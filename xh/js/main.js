/**
 * main.js — Entry point
 */
import { UI }   from './ui.js';
import { Game } from './game.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui   = new UI();
  const game = new Game(ui);
  ui.init(game);
});
