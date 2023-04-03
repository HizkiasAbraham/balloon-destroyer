function initialezeGameControl() {
  // const bg1 = document.getElementById('bg1');
  const bg2 = document.getElementById('bg2');
  const bg3 = document.getElementById('bg3');

  // bg1.addEventListener('click', () => {
  //   setCanvasBackground('bg1');
  // });
  bg2.addEventListener('click', () => {
    setCanvasBackground('bg2');
  });
  bg3.addEventListener('click', () => {
    setCanvasBackground('bg3');
  });

  setCanvasBackground('bg2');
  // runingRect();
}
let y = 10;
let x = 20;
let direction = 'down';
function runingRect() {
  const [canvas, context] = getCanvasAndContext();
  // context.restore()
  // context.fillStyle = 'none'
  context.clearRect(0, 0, canvas.width, canvas.height)
  // context.clearRect(x-6,y-6,12, 12)
  context.beginPath();
  context.fillStyle = 'yellow';
  context.strokeStyle = 'black';
  context.font = '0.6em Georgia';
  // context.lineWidth = 5;
  context.arc(x, y, 6, 0, 2 * Math.PI);
  context.fill();
  context.beginPath();
  context.fillStyle = 'red';
  context.fillText('A', x - 3, y + 3);
  context.fill();

  // context.clearRect(0, 0, canvas.width, canvas.height)
  // context.clearRect(x + 20-6,y+20-6,12, 12)
  context.beginPath();
  context.fillStyle = 'yellow';
  context.strokeStyle = 'black';
  context.font = '0.6em Georgia';
  // context.lineWidth = 5;
  context.arc(x+20, y+20, 6, 0, 2 * Math.PI);
  context.fill();
  context.beginPath();
  context.fillStyle = 'red';
  context.fillText('B', x + 20- 3, y +20+ 3);
  context.fill();
  if (y <= 0) {
    direction = 'down';
  }

  if (y >= 145) {
    direction = 'up';
    console.log('nwo it shoud go up')
  }

  direction === 'down' ? y += 0.2 : y -= 0.2;
  // console.log('x,y', x, y, canvas.height, canvas.width)
  // ctx.fillRect(50, x, 20, 20);
  requestAnimationFrame(runingRect);
}

function setCanvasBackground(image) {
  const canvasContainer = document.getElementById('canvas_container');
  canvasContainer.setAttribute('class', `container-right ${image}`);
}

function getCanvasAndContext() {
  const canvas = document.getElementById('game_canvas');
  const context = canvas.getContext('2d');
  return [canvas, context];
}

export { initialezeGameControl };
