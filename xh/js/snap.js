/**
 * snap.js
 * Kiểm tra & thực hiện snap mảnh vào đúng vị trí.
 *
 * Tọa độ được so sánh trong SVG user-space (board coords).
 * targetX/Y là tâm (cx,cy) của piece khi đặt đúng chỗ.
 */

export class SnapSystem {
  static POS_TOLERANCE = 30;  // px (SVG user units)
  static ROT_TOLERANCE = 18;  // degrees

  /**
   * Kiểm tra xem piece có gần đích không.
   * @param {SVGGElement} g
   * @param {number} targetX
   * @param {number} targetY
   * @param {number} targetRot
   * @returns {boolean}
   */
  static shouldSnap(g, targetX, targetY, targetRot) {
    const tx  = parseFloat(g.dataset.tx  || 0);
    const ty  = parseFloat(g.dataset.ty  || 0);
    const rot = parseFloat(g.dataset.rot || 0);

    const dx = Math.abs(tx - targetX);
    const dy = Math.abs(ty - targetY);

    // Hiệu góc theo đường ngắn nhất
    let dRot = Math.abs(((rot % 360) + 360) % 360 - ((targetRot % 360) + 360) % 360);
    if (dRot > 180) dRot = 360 - dRot;

    return dx <= this.POS_TOLERANCE && dy <= this.POS_TOLERANCE && dRot <= this.ROT_TOLERANCE;
  }

  /**
   * Snap piece vào đúng vị trí.
   */
  static snapTo(g, targetX, targetY, targetRot) {
    g.dataset.tx  = targetX;
    g.dataset.ty  = targetY;
    g.dataset.rot = targetRot;
    g.setAttribute('transform', `translate(${targetX},${targetY}) rotate(${targetRot})`);
    g.dataset.snapped = 'true';
    g.style.cursor = 'default';

    // Ánh sáng nhấp nháy khi snap
    const poly = g.querySelector('polygon');
    if (poly) {
      const originalFill = poly.getAttribute('fill');
      poly.setAttribute('fill', '#ffffff');
      setTimeout(() => poly.setAttribute('fill', originalFill), 120);
    }

    // Âm thanh snap
    const snd = document.getElementById('snd-snap');
    if (snd) { snd.currentTime = 0; snd.play().catch(() => {}); }
  }
}
