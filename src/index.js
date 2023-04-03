import { DIFFICULTIES } from './scripts/constants';
import { Game } from './scripts/game';
import { initialezeGameControl } from './scripts/game-control';

document.addEventListener('DOMContentLoaded', function () {
  initialezeGameControl();
  const game = new Game(DIFFICULTIES.MEDIUM);
  game.run()
});
