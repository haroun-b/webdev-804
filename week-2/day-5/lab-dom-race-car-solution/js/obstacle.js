class Obstacle {
  constructor(gameScreen, left, top, width, height, gameWidth, gameHeight) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.element = document.createElement("div");
    this.element.className = "obstacle";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.element.style.top = `${++this.top}px`;
  }
}
