/**
 * ui.js
 * Quản lý chuyển màn hình, popup, timer, localStorage.
 */
import { LevelLoader } from './levelLoader.js';

export class UI {
  constructor() {
    this.screens = {
      home:        document.getElementById('home-screen'),
      levelSelect: document.getElementById('level-select-screen'),
      game:        document.getElementById('game-screen')
    };
    this.popup       = document.getElementById('complete-popup');
    this.levelGrid   = document.getElementById('level-grid');
    this.timerEl     = document.getElementById('timer');
    this.starsEl     = document.getElementById('stars-display');
    this.finalTimeEl = document.getElementById('final-time');

    // Lưu tiến độ vào localStorage
    this.progress = JSON.parse(localStorage.getItem('tangramProgress') || 'null') || {
      unlocked: ['house_01'],
      stars: {}
    };
  }

  init(game) {
    this.game = game;
    this._bindNav();
  }

  _bindNav() {
    document.getElementById('btn-play')
      .addEventListener('click', () => this.showScreen('levelSelect'));

    document.getElementById('btn-back-home')
      .addEventListener('click', () => this.showScreen('home'));

    document.getElementById('btn-back-levels')
      .addEventListener('click', () => {
        this.game.stopTimer();
        this.showScreen('levelSelect');
      });

    document.getElementById('btn-reset')
      .addEventListener('click', () => this.game.resetLevel());

    document.getElementById('btn-hint')
      .addEventListener('click', () => this.game.showHint());

    document.getElementById('btn-next-level')
      .addEventListener('click', () => {
        this._hidePopup();
        const levels = LevelLoader.getAvailableLevels();
        const idx    = levels.findIndex(l => l.id === this.game.currentLevelData.id);
        if (idx >= 0 && idx < levels.length - 1) {
          this.game.startLevel(levels[idx + 1]);
        } else {
          this.showScreen('levelSelect');
        }
      });

    document.getElementById('btn-home-from-popup')
      .addEventListener('click', () => {
        this._hidePopup();
        this.showScreen('levelSelect');
      });
  }

  showScreen(name) {
    // Ẩn tất cả
    Object.values(this.screens).forEach(s => {
      s.classList.remove('active');
      s.classList.add('hidden');
    });
    // Hiện screen cần
    this.screens[name].classList.remove('hidden');
    this.screens[name].classList.add('active');

    if (name === 'levelSelect') this._renderLevels();
  }

  _renderLevels() {
    const levels = LevelLoader.getAvailableLevels();
    this.levelGrid.innerHTML = '';

    levels.forEach((lv, idx) => {
      const unlocked = idx === 0 || this.progress.unlocked.includes(lv.id);
      const stars    = this.progress.stars[lv.id] || 0;

      const card = document.createElement('div');
      card.className = `level-card${unlocked ? '' : ' locked'}`;
      card.innerHTML = `
        <div class="level-emoji">${lv.icon}</div>
        <h3>${lv.name}</h3>
        <div class="level-stars">${unlocked ? '⭐'.repeat(stars) || '🔘' : '🔒'}</div>
      `;
      if (unlocked) {
        card.addEventListener('click', () => {
          this.game.startLevel(lv);
          this.showScreen('game');
        });
      }
      this.levelGrid.appendChild(card);
    });
  }

  updateTimer(seconds) {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    this.timerEl.textContent = `⏱ ${m}:${s}`;
  }

  showCompletePopup(stars, timeStr, nextLevelId) {
    // Lưu stars
    if (this.game.currentLevelData) {
      const id = this.game.currentLevelData.id;
      const prev = this.progress.stars[id] || 0;
      this.progress.stars[id] = Math.max(prev, stars);
    }
    // Mở khóa level tiếp
    if (nextLevelId && !this.progress.unlocked.includes(nextLevelId)) {
      this.progress.unlocked.push(nextLevelId);
    }
    localStorage.setItem('tangramProgress', JSON.stringify(this.progress));

    this.starsEl.textContent     = '⭐'.repeat(stars);
    this.finalTimeEl.textContent = timeStr;
    this.popup.classList.remove('hidden');

    // Confetti
    if (typeof confetti === 'function') {
      confetti({ particleCount: 160, spread: 80, origin: { y: 0.55 } });
    }
    // Âm thanh
    const snd = document.getElementById('snd-success');
    if (snd) { snd.currentTime = 0; snd.play().catch(() => {}); }
  }

  _hidePopup() {
    this.popup.classList.add('hidden');
  }
}
