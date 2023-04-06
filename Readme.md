# Balloon distroyer game

[Ballon distroyer game](link_to_demo) is a mini computer game program that helps users test and improve their keyboard usage and speed.

## How it works

Word characters are added to balloons that fall down from atmospher. Whenever a ballon with a letter(word character) is visible inside our canvas, user clicks the character value on keyboard and the ballon with character are destroyed. For each ballon destroy, user gets a score of additional 10. If it escapes beneath, there will be decrease in the number of lives for the session. Lives are number of chances atmost which the balloons escapes the player without destroying.

## Tech stack

This app was developed using `html`, `css` and `javascript`. In addition, `webpack` was used to bundle the source code and generate static page out of it.

## Some features

### 1) Animating balloons as if falling from atmospher in the canvas

The feature of animating balloons as if falling from atmosphere in the canvas involves creating a sequence of images that depict a group of balloons floating or falling through the sky. The image sequence of drawing balloons and text inside in the canvas is used to create an animation in the canvas, with the help of JavaScript, which will give the appearance that the balloons are falling through the atmosphere. The animation can be customized in terms of speed, color and size of the balloons, as well as their direction and distance they move throughout the canvas.

#### Challenge

The challenge of implementing this feature was creating the animation sequence. This required creating a series of different images of balloons which then had to be manipulated and combined to create a smooth animation in the canvas. It was also challenging to figure out the best way to manipulate the size, color, direction, and speed of the balloons to create an immersive and realistic experience for the user. Additionally, there was a challenge of figuring out the most efficient way to render the animation in the canvas without compromising performance.

#### Solution

Created a Balloon class that keeps the state of each balloon in the game run time including it position `[x,y]`, the character value inside the baloon and as if it is visible or escaped in the canvas area. below is the balloon class implementation.

```javascript
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
```

### 2) Changing the game background and game hero

The feature of changing the game background and game hero from available options in the game setting allows users to customize their gaming experience by personalizing their game environment. This customization can include selecting from a variety of pre-designed backgrounds and game characters for the game screens.

#### Challenge

The challenge of implementing this feature was to make sure that changing the background and game won't affect the state of the current game in any way and the update is reflected seemlesly

#### Solution

I took out the background and the game character being drawn inside the canvas and put into the DOM with an id to manipulate and added a javascript code with click event listene to change only the styling and bring the change. below is snippet of code that shows the implementation.

```javascript
function setCanvasBackground(image) {
  const canvasContainer = document.getElementById('canvas_container');
  canvasContainer.setAttribute('class', `container-right ${image}`);
}

function setGameHero(image) {
  const characterImage = document.getElementById('characterImg');
  characterImage.setAttribute('src', './dist/images/' + image + '.png');
}
```
