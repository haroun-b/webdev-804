const popup = {
  container: document.querySelector("#popup"),
  startBtn: document.querySelector("#start-button"),
  title: document.querySelector("#popup>h1"),
  p: document.querySelector("#popup>p")
};

const scoreEl = document.querySelector("#score>span");

const game = {
  highScore: 0,
  gridEl: document.querySelector("#game-grid"),
  gridSize: 20,
  intervalId: null,
  cells: [],
  snake: {
    direction: "right",
    positions: []
  },

  buildCells() {
    this.gridEl.style += `grid-template-rows: repeat(${this.gridSize}, 1fr); grid-template-columns: repeat(${this.gridSize}, 1fr);`;

    for (let i = 0; i < this.gridSize ** 2; i++) {
      const cell = document.createElement("div");

      cell.className = "cell";

      this.cells.push(cell);
      this.gridEl.append(cell);
    }
  },
  initSnake() {
    const randomIdx = Math.floor(Math.random() * this.gridSize ** 2);

    this.snake.positions.push(randomIdx);
    this.cells[randomIdx].classList.add("snake");
  },
  addFood() {
    const cellsWithoutSnake = this.cells.filter(
      (cell) => !cell.classList.contains("snake")
    );

    if (cellsWithoutSnake) {
      this.end("win");
      return;
    }

    const randomIdx = Math.floor(Math.random() * cellsWithoutSnake.length);
    cellsWithoutSnake[randomIdx].classList.add("food");
  },
  moveSnake() {
    const snakeOldHead = this.snake.positions[0];
    let snakeNewHead;

    switch (this.snake.direction) {
      case "left":
        snakeNewHead =
          snakeOldHead % this.gridSize === 0
            ? snakeOldHead + this.gridSize - 1
            : snakeOldHead - 1;
        break;
      case "right":
        snakeNewHead =
          (snakeOldHead + 1) % this.gridSize === 0
            ? snakeOldHead - this.gridSize + 1
            : snakeOldHead + 1;
        break;
      case "up":
        snakeNewHead =
          snakeOldHead < this.gridSize
            ? this.gridSize ** 2 - (this.gridSize - snakeOldHead)
            : snakeOldHead - this.gridSize;
        break;
      case "down":
        snakeNewHead =
          snakeOldHead >= this.gridSize ** 2 - this.gridSize
            ? this.gridSize - (this.gridSize ** 2 - snakeOldHead)
            : snakeOldHead + this.gridSize;
        break;
    }

    this.hideSnake();
    this.snake.positions.pop();
    this.snake.positions.unshift(snakeNewHead);
    this.showSnake();
    this.selfMiamCheck();
    this.miamCheck();
  },
  hideSnake() {
    this.snake.positions.forEach((pos) => {
      this.cells[pos].classList.remove("snake", "head");
    });
  },
  showSnake() {
    this.snake.positions.forEach((pos) => {
      this.cells[pos].classList.add("snake");
    });

    this.cells[this.snake.positions[0]].classList.add("head");
  },
  miamCheck() {
    const snakeHead = this.snake.positions[0];

    if (this.cells[snakeHead].classList.contains("food")) {
      this.cells[snakeHead].classList.remove("food");
      this.snake.positions.push(snakeHead);
      this.addFood();
      this.incrementScore();
    }
  },
  selfMiamCheck() {
    const snakeHead = this.snake.positions[0];

    for (let i = 1; i < this.snake.positions.length; i++) {
      if (snakeHead === this.snake.positions[i]) {
        this.end("lose");
      }
    }
  },
  incrementScore() {
    let score = parseInt(scoreEl.textContent);

    score++;

    scoreEl.textContent = score.toString().padStart(3, "0");
  },
  reset() {
    this.gridEl.innerHTML = null;
    this.gridEl.style = null;
    this.cells = [];
    this.snake.positions = [];
    this.snake.direction = "right";
  },
  start() {
    this.reset();
    this.buildCells();
    this.initSnake();
    this.addFood();

    this.intervalId = setInterval(() => {
      this.refresh();
    }, 200);
  },
  refresh() {
    this.moveSnake();
  },
  end(result) {
    clearInterval(this.intervalId);
    this.intervalId = null;

    const score = parseInt(scoreEl.textContent);
    let popupHeading;
    let popupP;

    switch (result) {
      case "lose":
        popupHeading = "Game Over";

        popupP =
          score >= this.highScore
            ? `New High Score: ${(this.highScore = score)}`
            : `Try Harder. The High Score is ${this.highScore}. You only Scored ${score}`;
        break;
      case "win":
        popupHeading = "You snaked it to the limit!!";
        popupP = `Your Score is ${score}`;
        break;
    }

    popup.title.textContent = popupHeading;
    popup.p.textContent = popupP;
    popup.startBtn.textContent = "Restart";

    popup.container.style.display = "block";
  }
};

popup.startBtn.addEventListener("click", () => {
  popup.container.style.display = "none";

  game.start();
});

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      if (game.snake.direction === "right") {
        return;
      }
      game.snake.direction = "left";
      break;
    case "ArrowRight":
      if (game.snake.direction === "left") {
        return;
      }
      game.snake.direction = "right";
      break;
    case "ArrowUp":
      if (game.snake.direction === "down") {
        return;
      }
      game.snake.direction = "up";
      break;
    case "ArrowDown":
      if (game.snake.direction === "up") {
        return;
      }
      game.snake.direction = "down";
      break;
  }
});
