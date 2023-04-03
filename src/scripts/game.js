import { Balloon } from './balloon';
import {
  BALLOON_FILL_COLOR,
  BALLOON_RADIUS,
  BALLOON_TEXT_FILL_COLOR,
  BALLOON_TEXT_FONT,
  NUMBER_OF_BALLOONS,
  NUMBER_OF_LIVES,
  WORD_LETTERS,
} from './constants';

export class Game {
  constructor(difficulty) {
    this.lives = NUMBER_OF_LIVES;
    this.time = 0;
    this.score = 0;
    this.balloons = [];
    this.difficulty = difficulty;
    this.escaped = [];

    const canvas = document.getElementById('game_canvas');
    const context = canvas.getContext('2d');
    this.canvas = canvas;
    this.context = context;
    this.setLives();
  }

  async run() {
    const { context, canvas } = this;
    const { width, height } = canvas;

    while (this.lives > 0 && this.time <= 60000) {
      context.clearRect(0, 0, width, height);
      if (this.time % 6000 === 0) {
        this.generateBalloons();
      }
      this.drawBalloons();
      await sleep(100);
      this.time += 100;
    }
    console.log('LIVES, TIME', this.lives, this.time);
  }

  drawBalloons() {
    const { context, canvas } = this;
    const { height } = canvas;
    for (const balloon of this.balloons) {
      // Draw the balloon
      context.beginPath();
      context.fillStyle = BALLOON_FILL_COLOR;
      context.arc(balloon.x, balloon.y, BALLOON_RADIUS, 0, 2 * Math.PI);
      context.fill();

      // Draw the text value
      context.beginPath();
      context.font = BALLOON_TEXT_FONT;
      context.fillStyle = BALLOON_TEXT_FILL_COLOR;
      const textXPos = balloon.x - Math.ceil(BALLOON_RADIUS / 2);
      const textYPos = balloon.y + Math.ceil(BALLOON_RADIUS / 2);
      context.fillText(balloon.value, textXPos, textYPos);
      context.fill();
      balloon.drop(this.difficulty, height);
      if (balloon.isEscaped(height)) {
        if (!this.escaped.includes(balloon.id)) {
          this.escaped.push(balloon.id);
          this.lives--;
          this.setLives();
        }
      }
    }
  }

  setLives() {
    const lspan = document.getElementById('lives');
    lspan.innerHTML = this.lives <= 0 ? 0 : this.lives;
  }
  generateBalloons() {
    const { width, height } = this.canvas;

    for (let i = 0; i < 2; i++) {
      const x = getRandomInt(2 * BALLOON_RADIUS, width - 2 * BALLOON_RADIUS);
      let y = 0;
      if ((i + 1) % 10 === 0) {
        y = getRandomInt(i * 10, height + i * 10);
      } else {
        y = getRandomInt(0, height);
      }
      const letterIndex = getRandomInt(0, 24);
      const value = WORD_LETTERS[letterIndex];

      y = -1 * y;
      const balloon = new Balloon(value, x, y, this.balloons.length);
      this.balloons.push(balloon);
    }
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function sleep(ms) {
  return new Promise((r) => {
    setTimeout(r, ms);
  });
}
