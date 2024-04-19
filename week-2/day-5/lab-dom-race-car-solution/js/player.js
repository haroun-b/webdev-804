class Player {
  constructor(gameScreen, left, top, width, height, gameWidth, gameHeight) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("div");
    this.element.className = "player";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.gameScreen.appendChild(this.element);
    this.isInvincible = false;
  }

  move() {
    const canMoveLeft = this.directionX === -1 && this.left > 0;
    const canMoveRight =
      this.directionX === 1 && this.left < this.gameWidth - this.width;

    if (canMoveLeft || canMoveRight) {
      this.left += this.directionX * 3;
      this.element.style.left = `${this.left}px`;
    }

    const canMoveUp = this.directionY === -1 && this.top > 0;
    const canMoveDown =
      this.directionY === 1 && this.top < this.gameHeight - this.height;

    if (canMoveUp || canMoveDown) {
      this.top += this.directionY * 3;
      this.element.style.top = `${this.top}px`;
    }
  }
  updatePosition() {}
  didCollide(obstacle) {
    if (this.isInvincible) {
      return false;
    }
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    return (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    );

    // const isLeftColliding =
    //   playerRect.left > obstacleRect.left &&
    //   playerRect.left < obstacleRect.right;
    // const isRightColliding =
    //   playerRect.right > obstacleRect.left &&
    //   playerRect.right < obstacleRect.right;

    // const isTopColliding =
    //   playerRect.top > obstacleRect.top && playerRect.top < obstacleRect.bottom;
    // const isBottomColliding =
    //   playerRect.bottom > obstacleRect.top &&
    //   playerRect.bottom < obstacleRect.bottom;

    // return (
    //   (isLeftColliding || isRightColliding) &&
    //   (isTopColliding || isBottomColliding)
    // );
  }
}
