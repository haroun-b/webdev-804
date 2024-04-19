const game = new Game();

const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");

startButton.addEventListener("click", function () {
  game.start();
});

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  switch (e.key) {
    case "ArrowLeft":
      game.player.directionX = -1;
      break;
    case "ArrowRight":
      game.player.directionX = 1;
      break;
    case "ArrowUp":
      game.player.directionY = -1;
      break;
    case "ArrowDown":
      game.player.directionY = 1;
      break;
  }
});

document.addEventListener("keyup", (e) => {
  console.log(e.key);
  switch (e.key) {
    case "ArrowLeft":
      game.player.directionX = 0;
      break;
    case "ArrowRight":
      game.player.directionX = 0;
      break;
    case "ArrowUp":
      game.player.directionY = 0;
      break;
    case "ArrowDown":
      game.player.directionY = 0;
      break;
  }
});
