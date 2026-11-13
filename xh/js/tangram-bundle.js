/**
 * tangram-bundle.js
 * Tất cả JS được gộp vào 1 file để chạy qua file:// mà không cần HTTP server.
 * Không dùng ES6 import/export.
 */

'use strict';

/* ============================================================
   1. PIECE DEFINITIONS
   ============================================================ */
const PIECE_DEFS = {
  LT1: {
    label: 'Tam giác lớn 1', color: '#FFB3BA', stroke: '#FF8A94',
    // Tam giác vuông cân, cạnh góc vuông = 200, đỉnh ở trên
    points: '0,-100 141,100 -141,100'
  },
  LT2: {
    label: 'Tam giác lớn 2', color: '#FFDFBA', stroke: '#FFB870',
    points: '0,-100 141,100 -141,100'
  },
  MT: {
    label: 'Tam giác vừa', color: '#FFF0BA', stroke: '#FFD060',
    points: '0,-70 100,70 -100,70'
  },
  ST1: {
    label: 'Tam giác nhỏ 1', color: '#BAFFC9', stroke: '#60D890',
    points: '0,-60 85,60 -85,60'
  },
  ST2: {
    label: 'Tam giác nhỏ 2', color: '#BAE1FF', stroke: '#60B8FF',
    points: '0,-60 85,60 -85,60'
  },
  SQ: {
    label: 'Hình vuông',  color: '#D0BAFF', stroke: '#A880FF',
    // Hình thoi (square xoay 45°)
    points: '0,-85 85,0 0,85 -85,0'
  },
  PA: {
    label: 'Bình hành', color: '#FFBAE1', stroke: '#FF80C0',
    // Hình bình hành
    points: '-80,-45 80,-45 130,45 -130,45'
  }
};

/* ============================================================
   2. LEVEL DATA
   ============================================================ */
const LEVELS = [
  {
    id: 'house_01', name: 'Ngôi nhà', icon: '🏠', path: 'easy/house',
    pieces: [
      { pieceId: 'LT1', targetX: 200, targetY: 160, rotation: 0   },
      { pieceId: 'LT2', targetX: 400, targetY: 160, rotation: 180 },
      { pieceId: 'MT',  targetX: 300, targetY: 290, rotation: 180 },
      { pieceId: 'SQ',  targetX: 300, targetY: 400, rotation: 0   },
      { pieceId: 'ST1', targetX: 200, targetY: 450, rotation: 90  },
      { pieceId: 'ST2', targetX: 400, targetY: 450, rotation: 270 },
      { pieceId: 'PA',  targetX: 300, targetY: 510, rotation: 0   }
    ]
  },
  {
    id: 'boat_01', name: 'Con thuyền', icon: '⛵', path: 'easy/boat',
    pieces: [
      { pieceId: 'LT1', targetX: 300, targetY: 150, rotation: 180 },
      { pieceId: 'LT2', targetX: 300, targetY: 330, rotation: 0   },
      { pieceId: 'MT',  targetX: 180, targetY: 240, rotation: 270 },
      { pieceId: 'SQ',  targetX: 300, targetY: 420, rotation: 45  },
      { pieceId: 'ST1', targetX: 420, targetY: 240, rotation: 90  },
      { pieceId: 'ST2', targetX: 200, targetY: 420, rotation: 0   },
      { pieceId: 'PA',  targetX: 400, targetY: 440, rotation: 180 }
    ]
  },
  {
    id: 'cat_01', name: 'Chú mèo', icon: '🐱', path: 'easy/cat',
    pieces: [
      { pieceId: 'LT1', targetX: 200, targetY: 160, rotation: 270 },
      { pieceId: 'LT2', targetX: 400, targetY: 160, rotation: 90  },
      { pieceId: 'MT',  targetX: 300, targetY: 220, rotation: 0   },
      { pieceId: 'SQ',  targetX: 300, targetY: 350, rotation: 0   },
      { pieceId: 'ST1', targetX: 180, targetY: 430, rotation: 0   },
      { pieceId: 'ST2', targetX: 420, targetY: 430, rotation: 0   },
      { pieceId: 'PA',  targetX: 300, targetY: 490, rotation: 0   }
    ]
  }
];

/* ============================================================
   3. PROGRESS (localStorage)
   ============================================================ */
function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem('tangramProgress')) || { unlocked: ['house_01'], stars: {} };
  } catch { return { unlocked: ['house_01'], stars: {} }; }
}

function saveProgress(prog) {
  try { localStorage.setItem('tangramProgress', JSON.stringify(prog)); } catch {}
}

/* ============================================================
   4. SNAP SYSTEM
   ============================================================ */
const SNAP_POS_TOLERANCE = 35;  // SVG user-units
const SNAP_ROT_TOLERANCE = 20;  // degrees

function normalizeAngle(a) { return ((a % 360) + 360) % 360; }

function shouldSnap(g, targetX, targetY, targetRot) {
  const tx  = parseFloat(g.dataset.tx  || 0);
  const ty  = parseFloat(g.dataset.ty  || 0);
  const rot = parseFloat(g.dataset.rot || 0);

  const dx = Math.abs(tx - targetX);
  const dy = Math.abs(ty - targetY);
  let dRot = Math.abs(normalizeAngle(rot) - normalizeAngle(targetRot));
  if (dRot > 180) dRot = 360 - dRot;

  return dx <= SNAP_POS_TOLERANCE && dy <= SNAP_POS_TOLERANCE && dRot <= SNAP_ROT_TOLERANCE;
}

function snapTo(g, targetX, targetY, targetRot) {
  g.dataset.tx  = targetX;
  g.dataset.ty  = targetY;
  g.dataset.rot = targetRot;
  g.setAttribute('transform', `translate(${targetX},${targetY}) rotate(${targetRot})`);
  g.dataset.snapped = 'true';
  g.style.cursor    = 'default';

  // Flash effect
  const poly = g.querySelector('polygon');
  if (poly) {
    const orig = poly.getAttribute('fill');
    poly.setAttribute('fill', '#ffffff');
    setTimeout(() => poly.setAttribute('fill', orig), 120);
  }

  // Sound
  playSound('snd-snap');
}

/* ============================================================
   5. AUDIO HELPER
   ============================================================ */
function playSound(id) {
  const el = document.getElementById(id);
  if (el) { el.currentTime = 0; el.play().catch(() => {}); }
}

/* ============================================================
   6. DRAG SYSTEM
   ============================================================ */
let dragState = null; // { g, startSVGPt, startTx, startTy }

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

function applyTransform(g, tx, ty, rot) {
  g.dataset.tx  = tx;
  g.dataset.ty  = ty;
  g.dataset.rot = rot !== undefined ? rot : parseFloat(g.dataset.rot || 0);
  const r = parseFloat(g.dataset.rot);
  g.setAttribute('transform', `translate(${tx},${ty}) rotate(${r})`);
}

function onPieceMouseDown(e, g) {
  e.preventDefault();
  e.stopPropagation();
  if (g.dataset.snapped === 'true') return;

  // Select piece
  selectPiece(g);

  const boardSVG = document.getElementById('game-svg');
  const traySVG  = document.getElementById('tray-svg');

  // Lấy cursor trong board SVG coords TRƯỚC KHI move piece
  const { x, y } = getClientXY(e);
  const svgPt = clientToSVGCoords(x, y, boardSVG);

  // Nếu piece đang ở trong tray → chuyển sang board tại vị trí con trỏ
  if (g.closest('svg') === traySVG) {
    const piecesG = document.getElementById('pieces-group');
    // Đặt piece tại cursor (clamped vào board), nếu cursor ngoài board thì đặt cạnh trên tray
    const cx = Math.max(30, Math.min(570, svgPt.x));
    const cy = Math.max(30, Math.min(570, svgPt.y));
    applyTransform(g, cx, cy, 0);
    piecesG.appendChild(g);
  }

  dragState = {
    g,
    boardSVG,
    startSVGPt: svgPt,             // con trỏ ban đầu (board coords)
    startTx: parseFloat(g.dataset.tx || 0), // vị trí piece (đã update nếu từ tray)
    startTy: parseFloat(g.dataset.ty || 0)
  };

  // Bring to front
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

  // Unhighlight
  g.querySelector('polygon')?.setAttribute('stroke-width', '4');

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
  secondsElapsed: 0
};

let progress = loadProgress();

/* ============================================================
   8. SELECT / ROTATE
   ============================================================ */
function selectPiece(g) {
  if (gameState.selectedPiece && gameState.selectedPiece !== g) {
    gameState.selectedPiece.querySelector('polygon')?.setAttribute('stroke-width', '4');
  }
  gameState.selectedPiece = g;
  g.querySelector('polygon')?.setAttribute('stroke-width', '7');
  document.getElementById('rotate-bar').style.display = 'flex';
}

function rotatePiece(delta) {
  const g = gameState.selectedPiece;
  if (!g || g.dataset.snapped === 'true') return;

  let rot = normalizeAngle(parseFloat(g.dataset.rot || 0) + delta);
  applyTransform(g, parseFloat(g.dataset.tx || 0), parseFloat(g.dataset.ty || 0), rot);
  trySnapPiece(g);
}

/* ============================================================
   9. SNAP PIECE
   ============================================================ */
function trySnapPiece(g) {
  const tx  = parseFloat(g.getAttribute('data-target-x'));
  const ty  = parseFloat(g.getAttribute('data-target-y'));
  const rot = parseFloat(g.getAttribute('data-target-rot'));

  if (shouldSnap(g, tx, ty, rot)) {
    snapTo(g, tx, ty, rot);

    if (gameState.selectedPiece === g) {
      gameState.selectedPiece = null;
      document.getElementById('rotate-bar').style.display = 'none';
    }

    // Ensure piece is on board
    const piecesG = document.getElementById('pieces-group');
    if (g.parentNode !== piecesG) piecesG.appendChild(g);

    checkComplete();
  }
}

/* ============================================================
   10. RENDER LEVEL
   ============================================================ */
const NS = 'http://www.w3.org/2000/svg';

function renderLevel(levelData) {
  gameState.currentLevel = levelData;
  gameState.pieces       = [];
  gameState.selectedPiece = null;

  // Clear
  document.getElementById('pieces-group').innerHTML  = '';
  document.getElementById('tray-pieces-group').innerHTML = '';
  document.getElementById('outline-group').innerHTML = '';

  document.getElementById('rotate-bar').style.display = 'none';
  document.getElementById('level-title').textContent = levelData.name;

  // Outline (ghost)
  const outlineG = document.getElementById('outline-group');
  levelData.pieces.forEach(pd => {
    const def = PIECE_DEFS[pd.pieceId];
    if (!def) return;
    const poly = createSVGEl('polygon');
    poly.setAttribute('points', def.points);
    poly.setAttribute('fill', '#b0bec5');
    poly.setAttribute('stroke', 'none');
    const g = createSVGEl('g');
    g.setAttribute('transform', `translate(${pd.targetX},${pd.targetY}) rotate(${pd.rotation})`);
    g.appendChild(poly);
    outlineG.appendChild(g);
  });

  // Pieces in tray
  const trayG    = document.getElementById('tray-pieces-group');
  const total    = levelData.pieces.length;
  const trayW    = 700;
  const colW     = trayW / total;

  levelData.pieces.forEach((pd, i) => {
    const g = createPieceElement(pd);
    const tx = colW * i + colW / 2;
    const ty = 80;
    applyTransform(g, tx, ty, 0);
    trayG.appendChild(g);
    gameState.pieces.push(g);
  });

  startTimer();
}

function createSVGEl(tag) {
  return document.createElementNS(NS, tag);
}

function createPieceElement(pd) {
  const def = PIECE_DEFS[pd.pieceId];
  if (!def) return createSVGEl('g');

  // Shadow filter
  const fid  = `f${pd.pieceId}${Math.random().toString(36).slice(2,5)}`;
  const defs = createSVGEl('defs');
  const filt = createSVGEl('filter');
  filt.setAttribute('id', fid);
  filt.setAttribute('x', '-40%'); filt.setAttribute('y', '-40%');
  filt.setAttribute('width', '180%'); filt.setAttribute('height', '180%');
  const ds = createSVGEl('feDropShadow');
  ds.setAttribute('dx', '0'); ds.setAttribute('dy', '5');
  ds.setAttribute('stdDeviation', '6');
  ds.setAttribute('flood-color', 'rgba(0,0,0,0.22)');
  filt.appendChild(ds);
  defs.appendChild(filt);

  // Polygon
  const poly = createSVGEl('polygon');
  poly.setAttribute('points',          def.points);
  poly.setAttribute('fill',            def.color);
  poly.setAttribute('stroke',          '#ffffff');
  poly.setAttribute('stroke-width',    '4');
  poly.setAttribute('stroke-linejoin', 'round');
  poly.setAttribute('filter',          `url(#${fid})`);

  // Title tooltip
  const title = createSVGEl('title');
  title.textContent = def.label;

  // Group
  const g = createSVGEl('g');
  g.setAttribute('data-piece-id',   pd.pieceId);
  g.setAttribute('data-target-x',   pd.targetX);
  g.setAttribute('data-target-y',   pd.targetY);
  g.setAttribute('data-target-rot', pd.rotation);
  g.dataset.tx      = 0;
  g.dataset.ty      = 0;
  g.dataset.rot     = 0;
  g.dataset.snapped = 'false';
  g.style.cursor    = 'grab';

  g.appendChild(defs);
  g.appendChild(poly);
  g.appendChild(title);

  // Drag events
  g.addEventListener('mousedown',  e => onPieceMouseDown(e, g));
  g.addEventListener('touchstart', e => onPieceMouseDown(e, g), { passive: false });

  return g;
}

/* ============================================================
   11. COMPLETE CHECK
   ============================================================ */
function checkComplete() {
  const done = gameState.pieces.every(p => p.dataset.snapped === 'true');
  if (!done) return;

  stopTimer();

  let stars = 1;
  if (gameState.secondsElapsed < 60)  stars = 3;
  else if (gameState.secondsElapsed < 120) stars = 2;

  const idx    = LEVELS.findIndex(l => l.id === gameState.currentLevel.id);
  const nextId = (idx >= 0 && idx < LEVELS.length - 1) ? LEVELS[idx + 1].id : null;

  // Unlock next level
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
    playSound('snd-success');
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

  LEVELS.forEach((lv, idx) => {
    const unlocked = idx === 0 || progress.unlocked.includes(lv.id);
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
  // Nav buttons
  document.getElementById('btn-play')
    .addEventListener('click', () => showScreen('levelSelect'));

  document.getElementById('btn-back-home')
    .addEventListener('click', () => showScreen('home'));

  document.getElementById('btn-back-levels')
    .addEventListener('click', () => { stopTimer(); showScreen('levelSelect'); });

  document.getElementById('btn-reset')
    .addEventListener('click', () => { if (gameState.currentLevel) { stopTimer(); renderLevel(gameState.currentLevel); } });

  document.getElementById('btn-hint')
    .addEventListener('click', () => {
      const unsnapped = gameState.pieces.find(p => p.dataset.snapped !== 'true');
      if (!unsnapped) return;
      const piecesG = document.getElementById('pieces-group');
      if (unsnapped.parentNode !== piecesG) piecesG.appendChild(unsnapped);
      snapTo(unsnapped,
        parseFloat(unsnapped.getAttribute('data-target-x')),
        parseFloat(unsnapped.getAttribute('data-target-y')),
        parseFloat(unsnapped.getAttribute('data-target-rot'))
      );
      checkComplete();
    });

  document.getElementById('btn-rotate-left')
    .addEventListener('click', () => rotatePiece(-45));

  document.getElementById('btn-rotate-right')
    .addEventListener('click', () => rotatePiece(+45));

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

  // Global drag events
  window.addEventListener('mousemove',   onGlobalMouseMove, { passive: false });
  window.addEventListener('touchmove',   onGlobalMouseMove, { passive: false });
  window.addEventListener('mouseup',     onGlobalMouseUp);
  window.addEventListener('touchend',    onGlobalMouseUp);
  window.addEventListener('touchcancel', onGlobalMouseUp);
});
