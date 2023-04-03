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

function setCanvasBackground(image) {
  const canvasContainer = document.getElementById('canvas_container');
  canvasContainer.setAttribute('class', `container-right ${image}`);
}

export { initialezeGameControl };
