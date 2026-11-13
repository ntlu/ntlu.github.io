/**
 * drag.js
 * Hệ thống Drag & Drop cho SVG pieces.
 *
 * Nguyên tắc hoạt động:
 *  - Dùng SVGElement.getScreenCTM().inverse() để chuyển đổi tọa độ
 *    screen-space → SVG-user-space.  Điều này đảm bảo drag luôn đúng
 *    dù SVG bị scale, có padding, hay responsive.
 *  - Piece có thể xuất phát từ tray-SVG hoặc board-SVG.
 *    Khi bắt đầu kéo piece trên tray, nó sẽ được chuyển ngay sang board.
 *  - Delta được tính trong cùng hệ tọa độ (board SVG user-space).
 */

export class DragSystem {
  /**
   * @param {SVGSVGElement} boardSVG
   * @param {SVGSVGElement} traySVG
   * @param {Game}          game
   */
  constructor(boardSVG, traySVG, game) {
    this.boardSVG = boardSVG;
    this.traySVG  = traySVG;
    this.game     = game;

    this.dragging   = null;   // <g> đang kéo
    this.startSVGPt = null;   // {x,y} điểm bắt đầu trong board SVG coords
    this.startTx    = 0;      // translate.x ban đầu của piece (board coords)
    this.startTy    = 0;      // translate.y ban đầu

    const move = this._onMove.bind(this);
    const end  = this._onEnd.bind(this);

    window.addEventListener('mousemove',   move, { passive: false });
    window.addEventListener('touchmove',   move, { passive: false });
    window.addEventListener('mouseup',     end);
    window.addEventListener('touchend',    end);
    window.addEventListener('touchcancel', end);
  }

  /** Gắn listener cho một SVG <g> piece */
  attach(g) {
    g.addEventListener('mousedown',  e => this._onStart(e, g));
    g.addEventListener('touchstart', e => this._onStart(e, g), { passive: false });
  }

  // --------------------------------------------------
  //  Helpers: chuyển đổi tọa độ
  // --------------------------------------------------

  /** Lấy {clientX, clientY} từ mouse hoặc touch event */
  _client(e) {
    const src = e.touches ? e.touches[0] : e;
    return { x: src.clientX, y: src.clientY };
  }

  /** Chuyển {clientX, clientY} → SVG user-space của targetSVG */
  _toSVGCoords(clientX, clientY, targetSVG) {
    const pt = targetSVG.createSVGPoint();
    pt.x = clientX;
    pt.y = clientY;
    const ctm = targetSVG.getScreenCTM();
    if (!ctm) return { x: clientX, y: clientY };
    return pt.matrixTransform(ctm.inverse());
  }

  // --------------------------------------------------
  //  Event handlers
  // --------------------------------------------------

  _onStart(e, g) {
    e.preventDefault();
    e.stopPropagation();

    if (g.dataset.snapped === 'true') return;

    // 1. Thông báo game → highlight, chuyển piece lên board nếu cần
    this.game.onPieceSelect(g);

    // 2. Đọc vị trí hiện tại của piece (luôn là board coords sau onPieceSelect)
    const tx = parseFloat(g.dataset.tx || 0);
    const ty = parseFloat(g.dataset.ty || 0);
    this.startTx = tx;
    this.startTy = ty;

    // 3. Lấy điểm bắt đầu trong board SVG coords
    const { x, y } = this._client(e);
    this.startSVGPt = this._toSVGCoords(x, y, this.boardSVG);

    this.dragging = g;

    // Đưa piece lên top (z-order trong SVG)
    g.parentNode.appendChild(g);
  }

  _onMove(e) {
    if (!this.dragging) return;
    e.preventDefault();

    const { x, y } = this._client(e);
    const cur = this._toSVGCoords(x, y, this.boardSVG);

    const dx = cur.x - this.startSVGPt.x;
    const dy = cur.y - this.startSVGPt.y;

    const newTx = this.startTx + dx;
    const newTy = this.startTy + dy;

    this._applyTranslate(this.dragging, newTx, newTy);
  }

  _onEnd() {
    if (!this.dragging) return;
    const g = this.dragging;
    this.dragging = null;
    this.game.onPieceDrop(g);
  }

  // --------------------------------------------------
  //  Helpers
  // --------------------------------------------------

  _applyTranslate(g, tx, ty) {
    g.dataset.tx = tx;
    g.dataset.ty = ty;
    const rot = parseFloat(g.dataset.rot || 0);
    g.setAttribute('transform', `translate(${tx},${ty}) rotate(${rot})`);
  }
}
