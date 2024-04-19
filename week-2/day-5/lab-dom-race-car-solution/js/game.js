class Game {
  // code to be added
  constructor() {
    this.carWidth = 80;
    this.carHeight = 160;
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.gameEndScreen = document.querySelector("#game-end");
    this.livesDisplay = document.querySelector("#lives");
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.player = new Player(
      this.gameScreen,
      this.width / 2 - this.carWidth / 2,
      this.height - this.carHeight,
      this.carWidth,
      this.carHeight,
      this.width,
      this.height
    );
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = Math.floor(1000 / 60);
    this.renderCounter = 0;
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    // setInterval(() => {
    //   this.addObstacle();
    // }, 4000);

    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }

    this.renderCounter = ++this.renderCounter % 360;

    this.update();
  }

  update() {
    this.player.move();

    if (this.renderCounter === 0) {
      this.addObstacle();
    }

    this.obstacles.forEach((obstacle) => {
      obstacle.move();

      if (this.player.didCollide(obstacle)) {
        this.player.isInvincible = true;
        this.player.element.classList.add("invincible");

        this.livesDisplay.textContent = --this.lives;

        if (this.lives <= 0) {
          this.gameIsOver = true;
        }

        setTimeout(() => {
          this.player.isInvincible = false;
          this.player.element.classList.remove("invincible");
        }, 3000);
      }
    });

    if (this.obstacles[0].top > this.height) {
      this.obstacles[0].element.remove();
      this.obstacles.shift();
    }
  }

  addObstacle() {
    const obstacleX = Math.floor(Math.random() * (this.width - this.carWidth));
    const obstacleY = 0;

    this.obstacles.push(
      new Obstacle(
        this.gameScreen,
        obstacleX,
        obstacleY,
        this.carWidth,
        this.carHeight,
        this.width,
        this.height
      )
    );
  }
}
