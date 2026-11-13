/**
 * game.js
 * Vòng lặp chính của trò chơi Tangram.
 *
 * SVG Architecture:
 *  - Board SVG viewBox="0 0 600 600": outline mờ + pieces đang chơi
 *  - Tray SVG viewBox="0 0 700 160": pieces chờ ở dưới
 *  - Mỗi piece là <g transform="translate(tx,ty) rotate(rot)">
 *    với dataset: tx, ty, rot, snapped, target-x, target-y, target-rot
 *  - Drag dùng getScreenCTM() cho chuyển đổi tọa độ chính xác
 */

import { LevelLoader }  from './levelLoader.js';
import { PIECE_DEFS }   from './pieces.js';
import { DragSystem }   from './drag.js';
import { RotateSystem } from './rotate.js';
import { SnapSystem }   from './snap.js';

export class Game {
  constructor(ui) {
    this.ui = ui;

    this.boardSVG = document.getElementById('game-svg');
    this.outlineG = document.getElementById('outline-group');
    this.piecesG  = document.getElementById('pieces-group');
    this.traySVG  = document.getElementById('tray-svg');
    this.trayG    = document.getElementById('tray-pieces-group');
    this.levelTitle = document.getElementById('level-title');

    this.currentLevelData = null;
    this.pieces           = [];
    this.selectedPiece    = null;

    this.timerInterval  = null;
    this.secondsElapsed = 0;

    // DragSystem cần game-svg đã render → khởi tạo ở đây là ổn
    this.dragSystem   = new DragSystem(this.boardSVG, this.traySVG, this);
    this.rotateSystem = new RotateSystem(this);
  }

  // -------------------------------------------------------
  //  Start / Reset
  // -------------------------------------------------------

  async startLevel(levelInfo) {
    this.currentLevelData = await LevelLoader.loadLevel(levelInfo.path);
    this.levelTitle.textContent = this.currentLevelData.name || levelInfo.name;
    this._reset();
  }

  _reset() {
    this.piecesG.innerHTML  = '';
    this.trayG.innerHTML    = '';
    this.outlineG.innerHTML = '';
    this.pieces = [];
    this.selectedPiece = null;
    this.rotateSystem.hide();

    this._renderOutline();
    this._renderTrayPieces();
    this.startTimer();
  }

  // -------------------------------------------------------
  //  Outline (ghost silhouette trên board)
  // -------------------------------------------------------

  _renderOutline() {
    const ns = 'http://www.w3.org/2000/svg';
    this.currentLevelData.pieces.forEach(pd => {
      const def = PIECE_DEFS[pd.pieceId];
      if (!def) return;

      const poly = document.createElementNS(ns, 'polygon');
      poly.setAttribute('points', def.points);
      poly.setAttribute('fill',   '#94a3b8');
      poly.setAttribute('stroke', 'none');

      const g = document.createElementNS(ns, 'g');
      g.setAttribute('transform', `translate(${pd.targetX},${pd.targetY}) rotate(${pd.rotation})`);
      g.appendChild(poly);
      this.outlineG.appendChild(g);
    });
  }

  // -------------------------------------------------------
  //  Khởi tạo pieces trong tray
  // -------------------------------------------------------

  _renderTrayPieces() {
    const total = this.currentLevelData.pieces.length; // = 7
    const viewW = 700;
    const colW  = viewW / total;

    this.currentLevelData.pieces.forEach((pd, i) => {
      const g = this._createPieceElement(pd);

      // Đặt vào tray: chia đều theo cột
      const tx = colW * i + colW / 2;
      const ty = 80;
      g.dataset.tx  = tx;
      g.dataset.ty  = ty;
      g.dataset.rot = 0;
      g.setAttribute('transform', `translate(${tx},${ty}) rotate(0)`);

      this.trayG.appendChild(g);
      this.pieces.push(g);
    });
  }

  // -------------------------------------------------------
  //  Tạo SVG <g> cho một mảnh
  // -------------------------------------------------------

  _createPieceElement(pieceData) {
    const ns  = 'http://www.w3.org/2000/svg';
    const def = PIECE_DEFS[pieceData.pieceId];
    if (!def) {
      console.warn('[Game] Không tìm thấy def:', pieceData.pieceId);
      return document.createElementNS(ns, 'g');
    }

    // Filter drop-shadow (unique id)
    const fid = `f-${pieceData.pieceId}-${Math.random().toString(36).slice(2,5)}`;
    const defs = document.createElementNS(ns, 'defs');
    const filt = document.createElementNS(ns, 'filter');
    filt.setAttribute('id', fid);
    filt.setAttribute('x', '-40%'); filt.setAttribute('y', '-40%');
    filt.setAttribute('width', '180%'); filt.setAttribute('height', '180%');
    const shadow = document.createElementNS(ns, 'feDropShadow');
    shadow.setAttribute('dx', '0'); shadow.setAttribute('dy', '4');
    shadow.setAttribute('stdDeviation', '5');
    shadow.setAttribute('flood-color', 'rgba(0,0,0,0.22)');
    filt.appendChild(shadow);
    defs.appendChild(filt);

    // Hình polygon
    const poly = document.createElementNS(ns, 'polygon');
    poly.setAttribute('points',          def.points);
    poly.setAttribute('fill',            def.color);
    poly.setAttribute('stroke',          '#ffffff');
    poly.setAttribute('stroke-width',    '4');
    poly.setAttribute('stroke-linejoin', 'round');
    poly.setAttribute('filter',          `url(#${fid})`);

    // Tooltip
    const title = document.createElementNS(ns, 'title');
    title.textContent = def.label;

    // Group
    const g = document.createElementNS(ns, 'g');
    g.setAttribute('data-piece-id',  pieceData.pieceId);
    g.setAttribute('data-target-x',  pieceData.targetX);
    g.setAttribute('data-target-y',  pieceData.targetY);
    g.setAttribute('data-target-rot',pieceData.rotation);
    // Lưu state qua dataset (không phải data-attr để dễ write)
    g.dataset.tx      = 0;
    g.dataset.ty      = 0;
    g.dataset.rot     = 0;
    g.dataset.snapped = 'false';
    g.style.cursor    = 'grab';

    g.appendChild(defs);
    g.appendChild(poly);
    g.appendChild(title);

    this.dragSystem.attach(g);
    return g;
  }

  // -------------------------------------------------------
  //  Callbacks từ DragSystem
  // -------------------------------------------------------

  /**
   * Được gọi khi người dùng bắt đầu kéo.
   * NẾU piece vẫn trong tray → chuyển sang board NGAY LẬP TỨC
   * (trước khi DragSystem tính delta lần đầu).
   */
  onPieceSelect(g) {
    // Deselect piece cũ
    if (this.selectedPiece && this.selectedPiece !== g) {
      this.selectedPiece.querySelector('polygon')
        ?.setAttribute('stroke-width', '4');
    }

    // Nếu piece đang ở trong tray → chuyển sang board
    if (g.closest('svg') === this.traySVG) {
      // Đặt tạm tại trung tâm board để drag bắt đầu từ đây
      const cx = 300, cy = 300;
      g.dataset.tx  = cx;
      g.dataset.ty  = cy;
      g.dataset.rot = 0;
      g.setAttribute('transform', `translate(${cx},${cy}) rotate(0)`);
      this.piecesG.appendChild(g);

      // Thông báo cho dragSystem biết vị trí mới để tính delta đúng
      this.dragSystem.startTx    = cx;
      this.dragSystem.startTy    = cy;
    }

    this.selectedPiece = g;
    // Highlight
    g.querySelector('polygon')?.setAttribute('stroke-width', '7');
    this.rotateSystem.show();
  }

  /** Được gọi khi thả (mouseup / touchend) */
  onPieceDrop(g) {
    g.querySelector('polygon')?.setAttribute('stroke-width', '4');
    this.trySnap(g);
  }

  // -------------------------------------------------------
  //  Snap
  // -------------------------------------------------------

  trySnap(g) {
    const tx  = parseFloat(g.getAttribute('data-target-x'));
    const ty  = parseFloat(g.getAttribute('data-target-y'));
    const rot = parseFloat(g.getAttribute('data-target-rot'));

    if (SnapSystem.shouldSnap(g, tx, ty, rot)) {
      SnapSystem.snapTo(g, tx, ty, rot);
      if (this.selectedPiece === g) {
        this.selectedPiece = null;
        this.rotateSystem.hide();
      }
      // Đảm bảo piece nằm trên board
      if (g.parentNode !== this.piecesG) {
        this.piecesG.appendChild(g);
      }
      this._checkComplete();
    }
  }

  // -------------------------------------------------------
  //  Hint
  // -------------------------------------------------------

  showHint() {
    const unsnapped = this.pieces.find(p => p.dataset.snapped !== 'true');
    if (!unsnapped) return;

    // Chuyển sang board nếu cần
    if (unsnapped.parentNode !== this.piecesG) {
      this.piecesG.appendChild(unsnapped);
    }

    const tx  = parseFloat(unsnapped.getAttribute('data-target-x'));
    const ty  = parseFloat(unsnapped.getAttribute('data-target-y'));
    const rot = parseFloat(unsnapped.getAttribute('data-target-rot'));
    SnapSystem.snapTo(unsnapped, tx, ty, rot);
    this._checkComplete();
  }

  resetLevel() {
    this.stopTimer();
    this._reset();
  }

  // -------------------------------------------------------
  //  Complete
  // -------------------------------------------------------

  _checkComplete() {
    const done = this.pieces.every(p => p.dataset.snapped === 'true');
    if (!done) return;

    this.stopTimer();

    let stars = 1;
    if (this.secondsElapsed < 60)  stars = 3;
    else if (this.secondsElapsed < 120) stars = 2;

    const levels = LevelLoader.getAvailableLevels();
    const idx    = levels.findIndex(l => l.id === this.currentLevelData.id);
    const nextId = (idx >= 0 && idx < levels.length - 1) ? levels[idx + 1].id : null;

    const timeStr = this.ui.timerEl.textContent.replace('⏱ ', '');
    setTimeout(() => this.ui.showCompletePopup(stars, timeStr, nextId), 400);
  }

  // -------------------------------------------------------
  //  Timer
  // -------------------------------------------------------

  startTimer() {
    this.stopTimer();
    this.secondsElapsed = 0;
    this.ui.updateTimer(0);
    this.timerInterval = setInterval(() => {
      this.secondsElapsed++;
      this.ui.updateTimer(this.secondsElapsed);
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
}
