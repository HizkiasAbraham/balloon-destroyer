import { DIFFICULTIES } from './constants';
import { Game } from './game';

function initialezeGameControl() {
  const bg1 = document.getElementById('bg1');
  const bg2 = document.getElementById('bg2');
  const bg3 = document.getElementById('bg3');

  const ch1 = document.getElementById('ch-1');
  const ch2 = document.getElementById('ch-2');
  const ch3 = document.getElementById('ch-3');

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

  ch1.addEventListener('click', () => {
    setGameHero('ch-1');
  });
  ch2.addEventListener('click', () => {
    setGameHero('ch-2');
  });
  ch3.addEventListener('click', () => {
    setGameHero('ch-3');
  });

  let game;
  let prevScore = 0;
  startGame.addEventListener('click', () => {
    if (!game) {
      game = new Game(DIFFICULTIES[gameLevel.value], prevScore);
      document.body.addEventListener('keydown', (e) => {
        game.onKeyEntered(e.key);
        prevScore = game.score;
      });
      game.run();
    } else if (game.gameEnded) {
      game = new Game(DIFFICULTIES[gameLevel.value], prevScore);
      document.body.addEventListener('keydown', (e) => {
        game.onKeyEntered(e.key);
        prevScore = game.score;
      });
      game.run();
    } else {
      alert('Game in progress!');
    }
  });

  setCanvasBackground('bg2');
  setGameHero('ch-2')
}

function setCanvasBackground(image) {
  const canvasContainer = document.getElementById('canvas_container');
  canvasContainer.setAttribute('class', `container-right ${image}`);
}

function setGameHero(image) {
  const characterImage = document.getElementById('characterImg');
  characterImage.setAttribute('src', './dist/images/' + image + '.png');
}

export { initialezeGameControl };
