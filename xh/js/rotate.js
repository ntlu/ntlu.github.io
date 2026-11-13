/**
 * rotate.js
 * Quản lý xoay mảnh đang được chọn (45° mỗi lần).
 */
import { SnapSystem } from './snap.js';

export class RotateSystem {
  constructor(game) {
    this.game = game;
    this.bar  = document.getElementById('rotate-bar');
    document.getElementById('btn-rotate-left') .addEventListener('click', () => this.rotate(-45));
    document.getElementById('btn-rotate-right').addEventListener('click', () => this.rotate(+45));
  }

  show() { this.bar.style.display = 'flex'; }
  hide() { this.bar.style.display = 'none'; }

  rotate(delta) {
    const g = this.game.selectedPiece;
    if (!g || g.dataset.snapped === 'true') return;

    let rot = parseFloat(g.dataset.rot || 0) + delta;
    rot = ((rot % 360) + 360) % 360;
    g.dataset.rot = rot;

    const tx = parseFloat(g.dataset.tx || 0);
    const ty = parseFloat(g.dataset.ty || 0);
    g.setAttribute('transform', `translate(${tx},${ty}) rotate(${rot})`);

    // Kiểm tra snap sau khi xoay
    this.game.trySnap(g);
  }
}
