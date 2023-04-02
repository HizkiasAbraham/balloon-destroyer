import background1 from '../images/1.jpg';
import background2 from '../images/2.png';
import background3 from '../images/3.jpg';

function initialezeGameControl(canvasContext) {
  const bg1 = document.getElementById('bg1');
  const bg2 = document.getElementById('bg2');
  const bg3 = document.getElementById('bg3');

  bg1.addEventListener('click', () => {
    setCanvasBackground(background1);
  });
  bg2.addEventListener('click', () => {
    setCanvasBackground(background2);
  });
  bg3.addEventListener('click', () => {
    setCanvasBackground(background3);
  });

  setCanvasBackground(background2);
}

function setCanvasBackground(image) {
  const canvas = document.getElementById('game_canvas');
  const context = canvas.getContext('2d');
  const img = new Image();
  img.src = image;
  img.onload = () => {
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
}

export { initialezeGameControl };
