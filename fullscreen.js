(function () {
  if (window.__fullscreenHelperInitialized) return;
  window.__fullscreenHelperInitialized = true;

  const INTERACTIVE_SELECTOR = [
    'a',
    'button',
    'input',
    'select',
    'textarea',
    'label',
    'option',
    'canvas',
    '[role="button"]',
    '.game-card',
    '.piano-key',
    '.op-toggle',
    '.mode-btn',
    '.note-pill'
  ].join(', ');

  function isEmptySpace(target) {
    if (!target || target === document || target === document.documentElement) return true;
    if (!(target instanceof Element)) return false;
    return !target.closest(INTERACTIVE_SELECTOR);
  }

  function showFullscreenToast(message) {
    let toast = document.getElementById('__fsToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = '__fsToast';
      Object.assign(toast.style, {
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(15, 23, 42, 0.85)',
        color: '#fff',
        padding: '8px 16px',
        borderRadius: '999px',
        fontSize: '13px',
        fontWeight: '700',
        fontFamily: 'sans-serif',
        zIndex: '99999',
        pointerEvents: 'none',
        boxShadow: '0 6px 20px rgba(0,0,0,0.35)',
        transition: 'opacity 0.25s ease',
        opacity: '0'
      });
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = '1';
    clearTimeout(toast.__timer);
    toast.__timer = setTimeout(() => {
      toast.style.opacity = '0';
    }, 1300);
  }

  function toggleFullscreen() {
    const doc = document;
    const docEl = doc.documentElement;
    const isFs = !!(doc.fullscreenElement || doc.webkitFullscreenElement);

    if (!isFs) {
      const req = docEl.requestFullscreen || docEl.webkitRequestFullscreen;
      if (req) {
        Promise.resolve(req.call(docEl))
          .then(() => showFullscreenToast('⛶ Đã bật toàn màn hình'))
          .catch(() => {});
      }
    } else {
      const exit = doc.exitFullscreen || doc.webkitExitFullscreen;
      if (exit) {
        Promise.resolve(exit.call(doc))
          .then(() => showFullscreenToast('⛶ Đã thoát toàn màn hình'))
          .catch(() => {});
      }
    }
  }

  // Hỗ trợ nhấp đúp chuột trên máy tính
  document.addEventListener('dblclick', (e) => {
    if (!isEmptySpace(e.target)) return;
    toggleFullscreen();
  });

  // Hỗ trợ chạm đúp trên điện thoại / máy tính bảng
  let lastTapTime = 0;
  let lastTapX = 0;
  let lastTapY = 0;

  document.addEventListener('touchend', (e) => {
    if (e.changedTouches.length !== 1) return;
    if (!isEmptySpace(e.target)) {
      lastTapTime = 0;
      return;
    }

    const touch = e.changedTouches[0];
    const now = Date.now();
    const dx = Math.abs(touch.clientX - lastTapX);
    const dy = Math.abs(touch.clientY - lastTapY);

    if (now - lastTapTime < 320 && dx < 30 && dy < 30) {
      lastTapTime = 0;
      toggleFullscreen();
    } else {
      lastTapTime = now;
      lastTapX = touch.clientX;
      lastTapY = touch.clientY;
    }
  }, { passive: true });
})();

