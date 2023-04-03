import { BALLOON_RADIUS } from './constants';

export class Balloon {
  constructor(value, x, y, id) {
    this.id = id + value;
    this.value = value;
    this.x = x;
    this.y = y;
    this.visible = false;
  }

  isVisible() {
    return this.visible;
  }

  getYPosition() {
    return this.y;
  }

  getPosition() {
    return [this.x, this.y];
  }

  getValue() {
    return this.value;
  }

  isEscaped(canvasHeight) {
    return this.y > canvasHeight + BALLOON_RADIUS;
  }

  drop(step, canvasHeight = 0) {
    this.y += step;
    this.visible = this.y >= BALLOON_RADIUS && this.y <= canvasHeight;
  }
}
