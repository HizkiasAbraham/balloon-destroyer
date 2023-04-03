export class Balloon {
  constructor(value, x, y) {
    this.value = value;
    this.x = x;
    this.y = y;
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

  drop(step) {
    this.y += step;
  }
}
