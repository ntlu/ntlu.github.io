/**
 * tangram-bundle.js
 * Trò chơi Tangram chuẩn toán học (tham khảo cơ chế MathPlayground):
 * - 7 mảnh Tangram tỉ lệ chuẩn (khớp khít 100%, không hở)
 * - Kéo thả mượt mà từ khay lên bảng
 * - Xoay 45° (nút, cuộn chuột, hoặc nhấp đúp vào mảnh) & Lật mảnh (cho hình bình hành)
 * - Hút nam châm thông minh (xét đối xứng xoay + mảnh cùng hình dạng)
 * - Âm thanh Web Audio API không cần file mp3 ngoài
 */

'use strict';

/* ============================================================
   1. PIECE DEFINITIONS (Tỉ lệ chuẩn Tangram, đơn vị u = 60)
   ============================================================ */
const PIECE_DEFS = {
  LT1: {
    label: 'Tam giác lớn 1', color: '#FFB3BA', stroke: '#FF8A94',
    points: '-120,40 120,40 0,-80'
  },
  LT2: {
    label: 'Tam giác lớn 2', color: '#FFDFBA', stroke: '#FFB870',
    points: '-120,40 120,40 0,-80'
  },
  MT: {
    label: 'Tam giác vừa', color: '#FFF0BA', stroke: '#FFD060',
    points: '-40,-40 80,-40 -40,80'
  },
  ST1: {
    label: 'Tam giác nhỏ 1', color: '#BAFFC9', stroke: '#60D890',
    points: '-60,20 60,20 0,-40'
  },
  ST2: {
    label: 'Tam giác nhỏ 2', color: '#BAE1FF', stroke: '#60B8FF',
    points: '-60,20 60,20 0,-40'
  },
  SQ: {
    label: 'Hình vuông', color: '#D0BAFF', stroke: '#A880FF',
    points: '0,-60 60,0 0,60 -60,0'
  },
  PA: {
    label: 'Bình hành', color: '#FFBAE1', stroke: '#FF80C0',
    points: '-30,-30 90,-30 30,30 -90,30'
  }
};

/* ============================================================
   2. LEVEL DATA (Tất cả tọa độ khớp khít từng pixel)
   ============================================================ */
const LEVELS = [
  {
    id: 'square_01', name: 'Hình vuông', icon: '🟩',
    pieces: [
      { pieceId: 'LT1', targetX: 300, targetY: 220, rotation: 180, flip: 1 },
      { pieceId: 'LT2', targetX: 220, targetY: 300, rotation: 90,  flip: 1 },
      { pieceId: 'MT',  targetX: 380, targetY: 380, rotation: 180, flip: 1 },
      { pieceId: 'ST1', targetX: 340, targetY: 300, rotation: 270, flip: 1 },
      { pieceId: 'SQ',  targetX: 300, targetY: 360, rotation: 0,   flip: 1 },
      { pieceId: 'ST2', targetX: 240, targetY: 400, rotation: 0,   flip: 1 },
      { pieceId: 'PA',  targetX: 390, targetY: 270, rotation: 90,  flip: -1 }
    ]
  },
  {
    id: 'house_01', name: 'Ngôi nhà', icon: '🏠',
    pieces: [
      { pieceId: 'LT1', targetX: 300, targetY: 210, rotation: 0,   flip: 1 },
      { pieceId: 'LT2', targetX: 300, targetY: 330, rotation: 0,   flip: 1 },
      { pieceId: 'MT',  targetX: 220, targetY: 290, rotation: 0,   flip: 1 },
      { pieceId: 'ST1', targetX: 360, targetY: 270, rotation: 180, flip: 1 },
      { pieceId: 'ST2', targetX: 400, targetY: 310, rotation: 270, flip: 1 },
      { pieceId: 'SQ',  targetX: 240, targetY: 130, rotation: 0,   flip: 1 },
      { pieceId: 'PA',  targetX: 330, targetY: 400, rotation: 0,   flip: 1 }
    ]
  },
  {
    id: 'boat_01', name: 'Con thuyền', icon: '⛵',
    pieces: [
      { pieceId: 'LT1', targetX: 220, targetY: 280, rotation: 90,  flip: 1 },
      { pieceId: 'LT2', targetX: 340, targetY: 280, rotation: 90,  flip: 1 },
      { pieceId: 'MT',  targetX: 380, targetY: 360, rotation: 180, flip: 1 },
      { pieceId: 'SQ',  targetX: 300, targetY: 100, rotation: 0,   flip: 1 },
      { pieceId: 'ST1', targetX: 210, targetY: 420, rotation: 180, flip: 1 },
      { pieceId: 'PA',  targetX: 300, targetY: 430, rotation: 0,   flip: 1 },
      { pieceId: 'ST2', targetX: 390, targetY: 440, rotation: 0,   flip: 1 }
    ]
  },
  {
    id: 'rocket_01', name: 'Tên lửa', icon: '🚀',
    pieces: [
      { pieceId: 'LT1', targetX: 300, targetY: 180, rotation: 0,   flip: 1 },
      { pieceId: 'MT',  targetX: 220, targetY: 260, rotation: 0,   flip: 1 },
      { pieceId: 'ST1', targetX: 360, targetY: 240, rotation: 180, flip: 1 },
      { pieceId: 'ST2', targetX: 300, targetY: 320, rotation: 0,   flip: 1 },
      { pieceId: 'SQ',  targetX: 300, targetY: 400, rotation: 0,   flip: 1 },
      { pieceId: 'LT2', targetX: 300, targetY: 500, rotation: 0,   flip: 1 },
      { pieceId: 'PA',  targetX: 300, targetY: 570, rotation: 0,   flip: 1 }
    ]
  },
  {
    id: 'fish_01', name: 'Con cá', icon: '🐟',
    pieces: [
      { pieceId: 'SQ',  targetX: 80,  targetY: 300, rotation: 0,   flip: 1 },
      { pieceId: 'LT1', targetX: 260, targetY: 260, rotation: 0,   flip: 1 },
      { pieceId: 'LT2', targetX: 260, targetY: 340, rotation: 180, flip: 1 },
      { pieceId: 'ST1', targetX: 260, targetY: 160, rotation: 0,   flip: 1 },
      { pieceId: 'ST2', targetX: 260, targetY: 440, rotation: 180, flip: 1 },
      { pieceId: 'PA',  targetX: 410, targetY: 300, rotation: 90,  flip: 1 },
      { pieceId: 'MT',  targetX: 480, targetY: 310, rotation: 0,   flip: 1 }
    ]
  },
  {
    id: 'tree_01', name: 'Cây thông', icon: '🌲',
    pieces: [
      { pieceId: 'ST1', targetX: 300, targetY: 110, rotation: 0,   flip: 1 },
      { pieceId: 'LT1', targetX: 300, targetY: 210, rotation: 0,   flip: 1 },
      { pieceId: 'LT2', targetX: 300, targetY: 330, rotation: 0,   flip: 1 },
      { pieceId: 'SQ',  targetX: 300, targetY: 430, rotation: 0,   flip: 1 },
      { pieceId: 'PA',  targetX: 330, targetY: 520, rotation: 0,   flip: 1 },
      { pieceId: 'ST2', targetX: 420, targetY: 530, rotation: 0,   flip: 1 },
      { pieceId: 'MT',  targetX: 200, targetY: 470, rotation: 270, flip: 1 }
    ]
  },
  {
    id: 'arrow_01', name: 'Mũi tên', icon: '🏹',
    pieces: [
      { pieceId: 'LT1', targetX: 300, targetY: 160, rotation: 0,   flip: 1 },
      { pieceId: 'SQ',  targetX: 300, targetY: 260, rotation: 0,   flip: 1 },
      { pieceId: 'LT2', targetX: 300, targetY: 400, rotation: 0,   flip: 1 },
      { pieceId: 'ST1', targetX: 240, targetY: 460, rotation: 180, flip: 1 },
      { pieceId: 'ST2', targetX: 360, targetY: 460, rotation: 180, flip: 1 },
      { pieceId: 'PA',  targetX: 300, targetY: 530, rotation: 0,   flip: 1 },
      { pieceId: 'MT',  targetX: 160, targetY: 480, rotation: 0,   flip: 1 }
    ]
  },
  {
    id: 'crown_01', name: 'Vương miện', icon: '👑',
    pieces: [
      { pieceId: 'LT1', targetX: 300, targetY: 360, rotation: 0,   flip: 1 },
      { pieceId: 'MT',  targetX: 220, targetY: 320, rotation: 0,   flip: 1 },
      { pieceId: 'ST1', targetX: 360, targetY: 300, rotation: 180, flip: 1 },
      { pieceId: 'ST2', targetX: 400, targetY: 340, rotation: 270, flip: 1 },
      { pieceId: 'LT2', targetX: 300, targetY: 240, rotation: 0,   flip: 1 },
      { pieceId: 'SQ',  targetX: 210, targetY: 190, rotation: 0,   flip: 1 },
      { pieceId: 'PA',  targetX: 410, targetY: 220, rotation: 90,  flip: 1 }
    ]
  }
];

/* ============================================================
   3. PROGRESS (localStorage)
   ============================================================ */
function loadProgress() {
  try {
    const raw = JSON.parse(localStorage.getItem('tangramProgress'));
    const unlocked = Array.isArray(raw?.unlocked) ? raw.unlocked : ['square_01'];
    const stars = (raw?.stars && typeof raw.stars === 'object' && !Array.isArray(raw.stars)) ? raw.stars : {};
    return { unlocked, stars };
  } catch {
    return { unlocked: ['square_01'], stars: {} };
  }
}

function saveProgress(prog) {
  try { localStorage.setItem('tangramProgress', JSON.stringify(prog)); } catch {}
}

/* ============================================================
   4. SNAP & SYMMETRY SYSTEM
   ============================================================ */
const SNAP_POS_TOLERANCE = 32;  // SVG user-units
const SNAP_ROT_TOLERANCE = 20;  // degrees

function normalizeAngle(a) { return ((a % 360) + 360) % 360; }

function getRotationalSymmetry(pieceId) {
  if (pieceId === 'SQ') return 90;
  if (pieceId === 'PA') return 180;
  return 360;
}

function getShapeGroup(pieceId) {
  if (pieceId === 'LT1' || pieceId === 'LT2') return 'LT';
  if (pieceId === 'ST1' || pieceId === 'ST2') return 'ST';
  return pieceId;
}

function matchesTarget(pieceId, tx, ty, rot, flip, targetX, targetY, targetRot, targetFlip) {
  const dx = Math.abs(tx - targetX);
  const dy = Math.abs(ty - targetY);
  if (dx > SNAP_POS_TOLERANCE || dy > SNAP_POS_TOLERANCE) return false;

  // Chỉ hình bình hành (PA) mới phân biệt mặt lật
  if (pieceId === 'PA' && flip !== targetFlip) return false;

  const sym = getRotationalSymmetry(pieceId);
  const a1 = ((rot % sym) + sym) % sym;
  const a2 = ((targetRot % sym) + sym) % sym;
  let dRot = Math.abs(a1 - a2);
  if (dRot > sym / 2) dRot = sym - dRot;

  return dRot <= SNAP_ROT_TOLERANCE;
}

function snapTo(g, targetX, targetY, targetRot, targetFlip) {
  g.dataset.scale = 1;
  applyTransform(g, targetX, targetY, targetRot, 1, targetFlip);
  g.dataset.snapped = 'true';
  g.style.cursor    = 'grab';

  // Flash effect
  const poly = g.querySelector('polygon');
  if (poly) {
    const orig = poly.getAttribute('fill');
    poly.setAttribute('fill', '#ffffff');
    setTimeout(() => poly.setAttribute('fill', orig), 130);
  }

  updateTrayLabel();
  playTone('snap');
}

/* ============================================================
   5. WEB AUDIO HELPER
   ============================================================ */
let tangramAudioCtx = null;

function playTone(type) {
  try {
    if (!tangramAudioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      tangramAudioCtx = new AC();
    }
    if (tangramAudioCtx.state === 'suspended') tangramAudioCtx.resume();

    const now = tangramAudioCtx.currentTime;
    const notes = type === 'success' ? [523.25, 659.25, 783.99, 1046.5] : [660, 880];
    notes.forEach((freq, idx) => {
      const osc = tangramAudioCtx.createOscillator();
      const gain = tangramAudioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.07);
      gain.gain.setValueAtTime(0.001, now + idx * 0.07);
      gain.gain.linearRampToValueAtTime(0.22, now + idx * 0.07 + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.22);
      osc.connect(gain);
      gain.connect(tangramAudioCtx.destination);
      osc.start(now + idx * 0.07);
      osc.stop(now + idx * 0.07 + 0.25);
    });
  } catch {}
}

/* ============================================================
   6. DRAG SYSTEM
   ============================================================ */
let dragState = null;

function getClientXY(e) {
  const src = (e.touches && e.touches[0]) ? e.touches[0] : e;
  return { x: src.clientX, y: src.clientY };
}

function clientToSVGCoords(clientX, clientY, svgEl) {
  const pt  = svgEl.createSVGPoint();
  pt.x = clientX;
  pt.y = clientY;
  const ctm = svgEl.getScreenCTM();
  if (!ctm) return { x: clientX, y: clientY };
  return pt.matrixTransform(ctm.inverse());
}

function applyTransform(g, tx, ty, rot, scale, flip) {
  g.dataset.tx = tx;
  g.dataset.ty = ty;
  if (rot !== undefined) g.dataset.rot = rot;
  if (scale !== undefined) g.dataset.scale = scale;
  if (flip !== undefined) g.dataset.flip = flip;

  const r = parseFloat(g.dataset.rot || 0);
  const s = parseFloat(g.dataset.scale || 1);
  const f = parseFloat(g.dataset.flip || 1);
  const sx = s * f;
  const sy = s;
  const scalePart = (sx !== 1 || sy !== 1) ? ` scale(${sx},${sy})` : '';
  g.setAttribute('transform', `translate(${tx},${ty}) rotate(${r})${scalePart}`);
}

function onPieceMouseDown(e, g) {
  e.preventDefault();
  e.stopPropagation();
  if (gameState.isCompleted) return;

  // Nếu mảnh đã khớp nhưng user muốn tháo ra chỉnh lại → mở khóa mảnh
  if (g.dataset.snapped === 'true') {
    g.dataset.snapped = 'false';
    g.style.cursor = 'grabbing';
    updateTrayLabel();
  }

  selectPiece(g);

  const boardSVG = document.getElementById('game-svg');
  const traySVG  = document.getElementById('tray-svg');

  const { x, y } = getClientXY(e);
  const svgPt = clientToSVGCoords(x, y, boardSVG);

  // Kéo từ khay lên bảng: phóng về tỉ lệ chuẩn 1:1
  if (g.closest('svg') === traySVG) {
    const piecesG = document.getElementById('pieces-group');
    const cx = Math.max(40, Math.min(560, svgPt.x));
    const cy = Math.max(40, Math.min(560, svgPt.y));
    applyTransform(g, cx, cy, parseFloat(g.dataset.rot || 0), 1, parseFloat(g.dataset.flip || 1));
    piecesG.appendChild(g);
  }

  dragState = {
    g,
    boardSVG,
    startSVGPt: svgPt,
    startTx: parseFloat(g.dataset.tx || 0),
    startTy: parseFloat(g.dataset.ty || 0)
  };

  g.parentNode.appendChild(g);
}

function onGlobalMouseMove(e) {
  if (!dragState) return;
  e.preventDefault();

  const { x, y } = getClientXY(e);
  const cur = clientToSVGCoords(x, y, dragState.boardSVG);

  const newTx = dragState.startTx + (cur.x - dragState.startSVGPt.x);
  const newTy = dragState.startTy + (cur.y - dragState.startSVGPt.y);

  applyTransform(dragState.g, newTx, newTy);
}

function onGlobalMouseUp() {
  if (!dragState) return;
  const g = dragState.g;
  dragState = null;

  trySnapPiece(g);
}

/* ============================================================
   7. GAME STATE
   ============================================================ */
let gameState = {
  currentLevel: null,
  pieces: [],
  selectedPiece: null,
  timerInterval: null,
  secondsElapsed: 0,
  isCompleted: false
};

let progress = loadProgress();

/* ============================================================
   8. SELECT / ROTATE / FLIP
   ============================================================ */
function selectPiece(g) {
  if (gameState.selectedPiece && gameState.selectedPiece !== g) {
    gameState.selectedPiece.querySelector('polygon')?.setAttribute('stroke-width', '4');
  }
  gameState.selectedPiece = g;
  g.querySelector('polygon')?.setAttribute('stroke-width', '7');
  document.getElementById('rotate-bar').style.display = 'flex';
}

function rotatePiece(delta, targetPiece) {
  const g = targetPiece || gameState.selectedPiece;
  if (!g || gameState.isCompleted) return;
  if (g.dataset.snapped === 'true') {
    g.dataset.snapped = 'false';
    g.style.cursor = 'grab';
    updateTrayLabel();
  }

  const rot = normalizeAngle(parseFloat(g.dataset.rot || 0) + delta);
  applyTransform(g, parseFloat(g.dataset.tx || 0), parseFloat(g.dataset.ty || 0), rot);
  trySnapPiece(g);
}

function flipPiece(targetPiece) {
  const g = targetPiece || gameState.selectedPiece;
  if (!g || gameState.isCompleted) return;
  if (g.dataset.snapped === 'true') {
    g.dataset.snapped = 'false';
    g.style.cursor = 'grab';
    updateTrayLabel();
  }

  const flip = parseFloat(g.dataset.flip || 1) * -1;
  applyTransform(g, parseFloat(g.dataset.tx || 0), parseFloat(g.dataset.ty || 0), undefined, undefined, flip);
  trySnapPiece(g);
}

function returnPieceToTray(targetPiece) {
  const g = targetPiece || gameState.selectedPiece;
  if (!g || gameState.isCompleted) return;

  g.dataset.snapped = 'false';
  g.style.cursor = 'grab';
  g.querySelector('polygon')?.setAttribute('stroke-width', '4');

  const trayG = document.getElementById('tray-pieces-group');
  const tx = parseFloat(g.dataset.trayX || 350);
  const ty = parseFloat(g.dataset.trayY || 80);
  applyTransform(g, tx, ty, 0, 0.36, 1);
  trayG.appendChild(g);

  if (gameState.selectedPiece === g) {
    gameState.selectedPiece = null;
    document.getElementById('rotate-bar').style.display = 'none';
  }
  updateTrayLabel();
}

function updateTrayLabel() {
  const label = document.querySelector('.tray-label');
  if (!label || !gameState.pieces.length) return;
  const snappedCount = gameState.pieces.filter(p => p.dataset.snapped === 'true').length;
  const total = gameState.pieces.length;
  label.textContent = snappedCount === total
    ? `✨ Tuyệt vời! Đã ghép xong ${total}/${total} mảnh!`
    : `Kéo mảnh lên bảng (đã khớp ${snappedCount}/${total} mảnh) — Chạm mảnh đã đặt để tháo/chỉnh`;
}

/* ============================================================
   9. SNAP PIECE
   ============================================================ */
function trySnapPiece(g) {
  const pieceId = g.getAttribute('data-piece-id');
  const group = getShapeGroup(pieceId);
  const curTx = parseFloat(g.dataset.tx || 0);
  const curTy = parseFloat(g.dataset.ty || 0);
  const curRot = parseFloat(g.dataset.rot || 0);
  const curFlip = parseFloat(g.dataset.flip || 1);

  const candidates = gameState.pieces.filter(p =>
    p.dataset.snapped !== 'true' && getShapeGroup(p.getAttribute('data-piece-id')) === group
  );

  candidates.sort((a, b) => (a === g ? -1 : b === g ? 1 : 0));

  for (const targetOwner of candidates) {
    const tx   = parseFloat(targetOwner.getAttribute('data-target-x'));
    const ty   = parseFloat(targetOwner.getAttribute('data-target-y'));
    const rot  = parseFloat(targetOwner.getAttribute('data-target-rot'));
    const flip = parseFloat(targetOwner.getAttribute('data-target-flip') || 1);

    if (matchesTarget(pieceId, curTx, curTy, curRot, curFlip, tx, ty, rot, flip)) {
      if (targetOwner !== g) {
        const gTx   = g.getAttribute('data-target-x');
        const gTy   = g.getAttribute('data-target-y');
        const gRot  = g.getAttribute('data-target-rot');
        const gFlip = g.getAttribute('data-target-flip') || '1';
        g.setAttribute('data-target-x',    tx);
        g.setAttribute('data-target-y',    ty);
        g.setAttribute('data-target-rot',  rot);
        g.setAttribute('data-target-flip', flip);
        targetOwner.setAttribute('data-target-x',    gTx);
        targetOwner.setAttribute('data-target-y',    gTy);
        targetOwner.setAttribute('data-target-rot',  gRot);
        targetOwner.setAttribute('data-target-flip', gFlip);
      }

      const sym = getRotationalSymmetry(pieceId);
      const snappedRot = sym < 360 ? rot + Math.round((curRot - rot) / sym) * sym : rot;

      snapTo(g, tx, ty, snappedRot, flip);
      g.querySelector('polygon')?.setAttribute('stroke-width', '4');

      if (gameState.selectedPiece === g) {
        gameState.selectedPiece = null;
        document.getElementById('rotate-bar').style.display = 'none';
      }

      const piecesG = document.getElementById('pieces-group');
      if (g.parentNode !== piecesG) piecesG.appendChild(g);

      checkComplete();
      return;
    }
  }
}

/* ============================================================
   10. RENDER LEVEL
   ============================================================ */
const NS = 'http://www.w3.org/2000/svg';

function renderLevel(levelData) {
  gameState.currentLevel  = levelData;
  gameState.pieces        = [];
  gameState.selectedPiece = null;
  gameState.isCompleted   = false;

  document.getElementById('complete-popup').classList.add('hidden');
  document.getElementById('pieces-group').innerHTML      = '';
  document.getElementById('tray-pieces-group').innerHTML = '';
  document.getElementById('outline-group').innerHTML     = '';

  document.getElementById('rotate-bar').style.display = 'none';
  document.getElementById('level-title').textContent = levelData.name;

  // Bóng hình mục tiêu liền khối (Silhouette)
  const outlineG = document.getElementById('outline-group');
  levelData.pieces.forEach(pd => {
    const def = PIECE_DEFS[pd.pieceId];
    if (!def) return;
    const poly = createSVGEl('polygon');
    poly.setAttribute('points', def.points);
    poly.setAttribute('fill', '#94a3b8');
    poly.setAttribute('stroke', '#94a3b8');
    poly.setAttribute('stroke-width', '1');
    const g = createSVGEl('g');
    const fl = pd.flip || 1;
    const scalePart = fl !== 1 ? ` scale(${fl},1)` : '';
    g.setAttribute('transform', `translate(${pd.targetX},${pd.targetY}) rotate(${pd.rotation})${scalePart}`);
    g.appendChild(poly);
    outlineG.appendChild(g);
  });

  // Xếp 7 mảnh gọn gàng trong khay
  const trayG = document.getElementById('tray-pieces-group');
  const total = levelData.pieces.length;
  const trayW = 700;
  const colW  = trayW / total;

  levelData.pieces.forEach((pd, i) => {
    const g  = createPieceElement(pd);
    const tx = colW * i + colW / 2;
    const ty = 80;
    g.dataset.trayX = tx;
    g.dataset.trayY = ty;
    applyTransform(g, tx, ty, 0, 0.36, 1);
    trayG.appendChild(g);
    gameState.pieces.push(g);
  });

  updateTrayLabel();
  startTimer();
}

function createSVGEl(tag) {
  return document.createElementNS(NS, tag);
}

function createPieceElement(pd) {
  const def = PIECE_DEFS[pd.pieceId];
  if (!def) return createSVGEl('g');

  const fid  = `f${pd.pieceId}${Math.random().toString(36).slice(2,5)}`;
  const defs = createSVGEl('defs');
  const filt = createSVGEl('filter');
  filt.setAttribute('id', fid);
  filt.setAttribute('x', '-40%'); filt.setAttribute('y', '-40%');
  filt.setAttribute('width', '180%'); filt.setAttribute('height', '180%');
  const ds = createSVGEl('feDropShadow');
  ds.setAttribute('dx', '0'); ds.setAttribute('dy', '4');
  ds.setAttribute('stdDeviation', '5');
  ds.setAttribute('flood-color', 'rgba(0,0,0,0.22)');
  filt.appendChild(ds);
  defs.appendChild(filt);

  const poly = createSVGEl('polygon');
  poly.setAttribute('points',          def.points);
  poly.setAttribute('fill',            def.color);
  poly.setAttribute('stroke',          '#ffffff');
  poly.setAttribute('stroke-width',    '4');
  poly.setAttribute('stroke-linejoin', 'round');
  poly.setAttribute('filter',          `url(#${fid})`);

  const title = createSVGEl('title');
  title.textContent = def.label;

  const g = createSVGEl('g');
  g.setAttribute('data-piece-id',    pd.pieceId);
  g.setAttribute('data-target-x',    pd.targetX);
  g.setAttribute('data-target-y',    pd.targetY);
  g.setAttribute('data-target-rot',  pd.rotation);
  g.setAttribute('data-target-flip', pd.flip || 1);
  g.dataset.tx      = 0;
  g.dataset.ty      = 0;
  g.dataset.rot     = 0;
  g.dataset.scale   = 1;
  g.dataset.flip    = 1;
  g.dataset.snapped = 'false';
  g.style.cursor    = 'grab';

  g.appendChild(defs);
  g.appendChild(poly);
  g.appendChild(title);

  g.addEventListener('mousedown',  e => onPieceMouseDown(e, g));
  g.addEventListener('touchstart', e => onPieceMouseDown(e, g), { passive: false });
  // Nhấp đúp hoặc cuộn chuột trên mảnh để xoay nhanh 45°
  g.addEventListener('dblclick', e => {
    e.preventDefault();
    e.stopPropagation();
    if (g.closest('svg') === document.getElementById('game-svg')) {
      selectPiece(g);
      rotatePiece(45, g);
    }
  });
  g.addEventListener('wheel', e => {
    if (g.closest('svg') !== document.getElementById('game-svg')) return;
    e.preventDefault();
    selectPiece(g);
    rotatePiece(e.deltaY > 0 ? 45 : -45, g);
  }, { passive: false });

  return g;
}

/* ============================================================
   11. COMPLETE CHECK
   ============================================================ */
function checkComplete() {
  const done = gameState.pieces.every(p => p.dataset.snapped === 'true');
  if (!done) return;

  gameState.isCompleted = true;
  document.getElementById('rotate-bar').style.display = 'none';
  stopTimer();

  let stars = 1;
  if (gameState.secondsElapsed < 60)       stars = 3;
  else if (gameState.secondsElapsed < 120) stars = 2;

  const idx    = LEVELS.findIndex(l => l.id === gameState.currentLevel.id);
  const nextId = (idx >= 0 && idx < LEVELS.length - 1) ? LEVELS[idx + 1].id : null;

  if (nextId && !progress.unlocked.includes(nextId)) {
    progress.unlocked.push(nextId);
  }
  const curId = gameState.currentLevel.id;
  const prev  = progress.stars[curId] || 0;
  progress.stars[curId] = Math.max(prev, stars);
  saveProgress(progress);

  const timeStr = document.getElementById('timer').textContent.replace('⏱ ', '');

  setTimeout(() => {
    document.getElementById('stars-display').textContent = '⭐'.repeat(stars);
    document.getElementById('final-time').textContent    = timeStr;
    document.getElementById('complete-popup').classList.remove('hidden');
    if (typeof confetti === 'function') {
      confetti({ particleCount: 180, spread: 90, origin: { y: 0.55 } });
    }
    playTone('success');
  }, 350);
}

/* ============================================================
   12. TIMER
   ============================================================ */
function startTimer() {
  stopTimer();
  gameState.secondsElapsed = 0;
  updateTimerDisplay(0);
  gameState.timerInterval = setInterval(() => {
    gameState.secondsElapsed++;
    updateTimerDisplay(gameState.secondsElapsed);
  }, 1000);
}

function stopTimer() {
  clearInterval(gameState.timerInterval);
  gameState.timerInterval = null;
}

function updateTimerDisplay(s) {
  const m = String(Math.floor(s / 60)).padStart(2, '0');
  const sec = String(s % 60).padStart(2, '0');
  document.getElementById('timer').textContent = `⏱ ${m}:${sec}`;
}

/* ============================================================
   13. UI — SCREENS
   ============================================================ */
function showScreen(name) {
  ['home', 'levelSelect', 'game'].forEach(n => {
    const el = document.getElementById(n + '-screen');
    if (el) {
      el.classList.toggle('active', n === name);
      el.classList.toggle('hidden', n !== name);
    }
  });
  if (name === 'levelSelect') renderLevelGrid();
}

function renderLevelGrid() {
  const grid = document.getElementById('level-grid');
  grid.innerHTML = '';

  LEVELS.forEach((lv) => {
    const unlocked = true;
    const stars    = progress.stars[lv.id] || 0;

    const card = document.createElement('div');
    card.className = `level-card${unlocked ? '' : ' locked'}`;
    card.innerHTML = `
      <div class="level-emoji">${lv.icon}</div>
      <h3>${lv.name}</h3>
      <div class="level-stars">${unlocked ? ('⭐'.repeat(stars) || '·') : '🔒'}</div>
    `;
    if (unlocked) {
      card.addEventListener('click', () => {
        renderLevel(lv);
        showScreen('game');
      });
    }
    grid.appendChild(card);
  });
}

/* ============================================================
   14. INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-play')
    .addEventListener('click', () => showScreen('levelSelect'));

  document.getElementById('btn-back-home')
    .addEventListener('click', () => showScreen('home'));

  document.getElementById('btn-back-levels')
    .addEventListener('click', () => {
      document.getElementById('complete-popup').classList.add('hidden');
      stopTimer();
      showScreen('levelSelect');
    });

  document.getElementById('btn-reset')
    .addEventListener('click', () => { if (gameState.currentLevel) { stopTimer(); renderLevel(gameState.currentLevel); } });

  document.getElementById('btn-hint')
    .addEventListener('click', () => {
      const unsnapped = gameState.pieces.find(p => p.dataset.snapped !== 'true');
      if (!unsnapped) return;
      const piecesG = document.getElementById('pieces-group');
      if (unsnapped.parentNode !== piecesG) piecesG.appendChild(unsnapped);
      unsnapped.querySelector('polygon')?.setAttribute('stroke-width', '4');
      if (gameState.selectedPiece === unsnapped) {
        gameState.selectedPiece = null;
        document.getElementById('rotate-bar').style.display = 'none';
      }
      snapTo(unsnapped,
        parseFloat(unsnapped.getAttribute('data-target-x')),
        parseFloat(unsnapped.getAttribute('data-target-y')),
        parseFloat(unsnapped.getAttribute('data-target-rot')),
        parseFloat(unsnapped.getAttribute('data-target-flip') || 1)
      );
      checkComplete();
    });

  document.getElementById('btn-rotate-left')
    .addEventListener('click', () => rotatePiece(-45));

  document.getElementById('btn-rotate-right')
    .addEventListener('click', () => rotatePiece(+45));

  document.getElementById('btn-flip')
    .addEventListener('click', () => flipPiece());

  document.getElementById('btn-to-tray')
    .addEventListener('click', () => returnPieceToTray());

  document.getElementById('btn-next-level')
    .addEventListener('click', () => {
      document.getElementById('complete-popup').classList.add('hidden');
      const idx = LEVELS.findIndex(l => l.id === gameState.currentLevel?.id);
      if (idx >= 0 && idx < LEVELS.length - 1) {
        renderLevel(LEVELS[idx + 1]);
        showScreen('game');
      } else {
        showScreen('levelSelect');
      }
    });

  document.getElementById('btn-home-from-popup')
    .addEventListener('click', () => {
      document.getElementById('complete-popup').classList.add('hidden');
      showScreen('levelSelect');
    });

  window.addEventListener('mousemove',   onGlobalMouseMove, { passive: false });
  window.addEventListener('touchmove',   onGlobalMouseMove, { passive: false });
  window.addEventListener('mouseup',     onGlobalMouseUp);
  window.addEventListener('touchend',    onGlobalMouseUp);
  window.addEventListener('touchcancel', onGlobalMouseUp);
});
