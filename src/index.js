import { DIFFICULTIES } from './scripts/constants';
import { Game } from './scripts/game';
import { initialezeGameControl } from './scripts/game-control';

document.addEventListener('DOMContentLoaded', function () {
  initialezeGameControl();
  let game = new Game(DIFFICULTIES.MEDIUM);
  document.body.addEventListener('keydown', (e) => {
    game.onKeyEntered(e.key);
  });
  game.run();
});
