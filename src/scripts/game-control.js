import { DIFFICULTIES } from './constants';
import { Game } from './game';

function initialezeGameControl() {
  const bg1 = document.getElementById('bg1');
  const bg2 = document.getElementById('bg2');
  const bg3 = document.getElementById('bg3');
  const startGame = document.getElementById('startGame');
  const gameLevel = document.getElementById('gameLevel');

  bg1.addEventListener('click', () => {
    setCanvasBackground('bg1');
  });
  bg2.addEventListener('click', () => {
    setCanvasBackground('bg2');
  });
  bg3.addEventListener('click', () => {
    setCanvasBackground('bg3');
  });
  let game;
  let prevScore = 0;
  startGame.addEventListener('click', () => {
    if (!game) {
      game = new Game(DIFFICULTIES[gameLevel.value], prevScore);
      document.body.addEventListener('keydown', (e) => {
        game.onKeyEntered(e.key);
      });
      game.run();
    } else if (game.gameEnded) {
      game = new Game(DIFFICULTIES[gameLevel.value], prevScore);
      document.body.addEventListener('keydown', (e) => {
        game.onKeyEntered(e.key);
      });
      game.run();
    } else {
      alert('Game in progress!');
    }
  });

  setCanvasBackground('bg2');
}

function setCanvasBackground(image) {
  const canvasContainer = document.getElementById('canvas_container');
  canvasContainer.setAttribute('class', `container-right ${image}`);
}

export { initialezeGameControl };
