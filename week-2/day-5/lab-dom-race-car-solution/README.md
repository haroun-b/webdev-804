![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | DOM Race Car


![Island Racer Logo](images/logo.png)

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>
  Upon completion of this exercise, you will be able to:

- Create a simple 2d game using HTML, CSS, JavaScript, and DOM.
- Implement game logic and UI, including start screen, game screen, and end-game screen.
- Use classes and OOP to organize data, functionality, and game elements.
- Use `setInterval()` to create a game loop that continuously updates the game elements.
- Handle user input and events to control game elements.
- Create and display randomly generated obstacles to add complexity to the game.
- Create and manipulate elements in the DOM, including displaying and hiding elements.
- Change the style of the game elements using DOM and CSS

  <br>

  <hr>

</details>

## Introduction

We are ready to start making 2d games using the knowledge we have gained so far in HTML, CSS, and JavaScript. In this exercise, we will create a **Race Car** game using DOM manipulation, classes, and object-oriented programming (OOP).

The goal of this exercise is to help you practice for the Module 1 project.

This exercise is divided into two parts: a teacher-led demo and a self-guided exercise.

During the first part, the teacher will do a demo and walk you through the creation of the game, allowing you to ask questions and observe the process. The demo will help you understand how to implement the game.

In the second part, you and your classmates will have the opportunity to create the game on your own. You will be provided with the finished game as a reference guide, and the teacher will be available to answer any questions you may have.

<!-- In the second part, you and your classmates will have to create the game on your own. The code of the finished game is already provided in the exercise as a reference guide, and the teacher will be available to answer any questions you may have. -->

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Instructions

### Iteration 0: Getting Started

The first thing we will do is get familiar with the starter code provided for the exercise:

1. Open the `index.html` file and take a look at the HTML structure of the game. The div `game-intro`, `game-container`, and `game-end` represent the screens of the game.

2. Open the `styles/style.css` file and take a look at the CSS styles for the game. The styles are already provided, but you are free to make changes to the styles or animations to your liking during the exercise.

3. The starter code includes a couple of JavaScript files that are located in the `js` folder:

   - `script.js` - This file contains code that handles the game's start button. Please open it and take a look at how the event listener is set up.

   - `game.js` - This is the file where we will define the `Game` class to represent the game's data (properties) and behaviors (methods). We will fill out this class as we progress through the exercise.

<br>

The start screen is already displayed on the page, as shown below.

![island racer game start screen](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m1/lab-dom-race-car/lab-dom-race-car-start-screen.png)

Upon clicking the **Start Game** button, the player should transition from the _start screen_ to the _game screen_, initiating the game. 

In the next iteration, we will create the `Game` class and implement the functionality required to **start** the game.

<br>

## Iteration 1: Create the Game

In this iteration, you will create the `Game` class in the `js/game.js` file. This class will be responsible for managing the game data and behavior.

1. The class `Game` is defined in the `js/game.js` file.

2. The `Game` class should have the following properties defined in the constructor:

   - `startScreen` - holds the div element `#game-intro`. To access the element, use either `document.getElementById()` or `document.querySelector()`.

   - `gameScreen` - holds the div element `#game-screen`.

   - `gameEndScreen` - holds the div element `#game-end`.

   - `player` - leave it as `null` for now. We will use this property to save the instance of the `Player` class that we'll create it in the next iteration.

   - `height` - the _height_ of the game screen in pixels. We will set it to `600`.

   - `width` - the _width_ of the game screen in pixels. We will set it to `500`.

   - `obstacles` - an empty array. We'll use it to store the obstacle instances we create later.

   - `score` - a score increases every time an obstacle is passed. Set its initial value to `0`.

   - `lives` - the number of remaining lives the player has. Set its initial value to `3`.

   - `gameIsOver` - a flag used to track whether the game is over. Set the initial value to `false`.

   - `gameIntervalId` - a variable used to store the id of the interval running the game loop. We store and use this id to clear the interval once the game is over.

   - `gameLoopFrecuency` - a number that indicates the interval in milliseconds at which the game loop will execute. A good value for most screens is `1000/60`, which equates to the the game being updated every ~17 millisecond, or about 60 times per second (60fps).

      <br>

3. The `Game` class should have the following methods:

   <details>
     <summary> <code><b>start()</b></code> </summary>

   Initializes the game by executing the following sequence of steps when called:

   - Sets the height and width of the game screen.
   - Hides the start screen.
   - Shows the game screen.
   - Starts the game loop using `setInterval()`, which repeatedly executes the `gameLoop()` function at a frecuency of 60 times per second.

   </details>

   <details>
     <summary> <code><b>gameLoop()</b></code> </summary>

   Runs the game loop by executing the following steps:

   - Invokes the `update()` method to update the game state. We will create a `update` method in the following iteration.

   - Checks if the `gameIsOver` flag is set to `true`. If it is, it interrupts the game interval by calling `clearInterval` while passing the `gameIntervalId` as an argument.

   </details>

   <details>
     <summary> <code><b>update()</b></code> </summary>

   This method is responsible for updating the game state during each loop iteration. For now, we will leave it empty and come back to implement it in the upcoming iterations.

   </details>

   <br>

You can use the below example of the completed code as a reference:

<details>
	<summary>See the code</summary>
<br>

```js
class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = null;
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000/60); // 60fps
  }

  start() {
    // Set the height and width of the game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    // Hide the start screen
    this.startScreen.style.display = "none";
    
    // Show the game screen
    this.gameScreen.style.display = "block";

    // Runs the gameLoop on a fequency of 60 times per second. Also stores the ID of the interval.
    this.gameIntervalId = setInterval(() => {
      this.gameLoop()
    }, this.gameLoopFrequency)
  }

  gameLoop() {
    console.log("in the game loop");
    
    this.update();

    // If "gameIsOver" is set to "true" clear the interval to stop the loop
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId)
    }
  }

  update() {
    console.log("in the update");
  }
}
```

<br>

</details>

<br>

## Iteration 2: Start the Game

Check the provided code in the `js/script.js` file. When the **Start Game** button is clicked, inside the `startGame` function we should create a new instance of the `Game` class and start the game by invoking the `start()` method:

<details>
	<summary>See the code</summary>

<br>

```js
// js/script.js

window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game; // added

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game(); // added

    game.start(); // added
  }
};
```

<br>

</details>

 <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m1/lab-dom-race-car/lab-dom-race-car-start-game.gif" width="600" style="display: block; margin: 0 auto" />

<br>

## Iteration 3: Create the Player

In this iteration, we will create the `Player` class, representing the player's car.

1. Open the `js/` folder and create a new file called `player.js`.

2. In the `index.html` file, add a script tag to link the `player.js` file.

3. Inside the `player.js` file that you just created, define a new class called `Player`.

4. The `Player` class should have the following properties defined in the constructor:

   - `gameScreen` - the game screen element passed as an argument to the constructor.

   - `left` - the horizontal position of the car passed as an argument to the constructor.

   - `top` - the vertical position of the car passed as an argument to the constructor.

   - `width` - the width of the car element passed as an argument to the constructor.

   - `height` - the height of the car element passed as an argument to the constructor.

   - `directionX` - initially set to 0. It is used to specify the **horizontal** movement direction and can have the following values:
     - `0`: not moving horizontally
     - `1`: moving horizontally to the right
     - `-1`: moving horizontally to the left
   - `directionY` - initially set to 0. It is used to specify the **vertical** movement direction and can have the following values:
     - `0`: not moving vertically
     - `1`: moving vertically down
     - `-1`: moving vertically up

   - `element` - the **image** element representing the car. This image element should be created in the constructor using the *provided image source (image url) passed as an argument* to the constructor.

   <br>

5. In order to set the exact position of the player element on the game screen, it should be positioned absolutely (`position: absolute`). The exact position is determined by this element's width, height, left and top properties.

6. Make sure to append the newly created element to the `gameScreen`.

7. The `Player` class should have the following methods:

   <details>
     <summary> <code><b>move()</b></code> </summary>

   Updates the player's car position based on the `directionX` and `directionY` properties by doing the following:

   - Adds the values of `directionX` and `directionY` to the player's `left` and `top` properties.

   - Ensures the player's car stays within the boundaries of the game screen by checking and adjusting the `left` and `top` properties.

   - Updates the player's car position on the screen by calling the `updatePosition()` method. This method will be created in one of the following iterations.

   </details>

   <details>
     <summary> <code><b>updatePosition()</b></code> </summary>

   Updates the position of the player's car element on the screen based on its current `left` and `top` properties.

   </details>

   <details>
     <summary> <code><b>didCollide(obstacle)</b></code> </summary>

   Checks if the player's car collides with an obstacle. This method takes an `Obstacle` object as an argument and returns a boolean value indicating whether a collision occurred.

   </details>

   <br>

You can use the below example of the completed code as a reference:

<details>
	<summary>See the code</summary>

<br>

```js
class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");

    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    // Set up the default element's property values
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;

    this.gameScreen.appendChild(this.element);
  }

  move() {
    // Update player's car position based on directionX and directionY
    this.left += this.directionX;
    this.top += this.directionY;

    // Ensure the player's car stays within the game screen
    // handles left hand side
    if (this.left < 10) {
      this.left = 10;
    }

    // handles top side
    if (this.top < 10) {
      this.top = 10;
    }

    // handles right hand side
    if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
      this.left = this.gameScreen.offsetWidth - this.width - 10;
    }

    // handles bottom side
    if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
      this.top = this.gameScreen.offsetHeight - this.height - 10;
    }

    // Update the player's car position on the screen
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }


}
```

<br>

</details>

<br>

## Iteration 4: Add the Player to the Game

1. As a reminder, we have already defined the `player` property of the `Game` class and set it to `null`. Now let's instantiate a new `Player` object and store it in the `player` property of the `Game`. 

<details>
	<summary>See the code</summary>

<br>

```js
class Game {
  constructor() {
    // ...
    this.player = new Player(
      this.gameScreen,
      200,
      500,
      100,
      150,
      "./images/car.png"
    );
    // ...
  }

  // ...
}
```

<br>

</details>

<br>

2. To continuously update the player's position during gameplay, add a call to the `player.move()` method within the `update()` method of the `Game` class.

<details>
	<summary>See the code</summary>

<br>

```js
class Game {
  // ...

  update() {
    this.player.move();
  }
}
```

<br>

</details>

<br>



![island racer game - player car showing](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m1/lab-dom-race-car/lab-dom-race-car-player.png)



<br>

## Iteration 5: Handle Keyboard Input

The goal of this iteration is to allow the player to control the car using the keyboard.

To do this, we will add an event listener in the `js/script.js` file, which will update the player's car `directionX` and `directionY` properties based on the keys that the user presses on the keyboard. 
This function listens for the `keydown` event using `document.onkeydown` and checks if the pressed key matches any of the allowed keystrokes (arrow keys).

<details>
	<summary>See the code</summary>

<br>

```js
// js/script.js

window.onload = function () {
  // ...

  // Function that handles keydown event
  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    // Check if the pressed key is in the possibleKeystrokes array
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      // Update player's directionX and directionY based on the key pressed
      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -1;
          break;
        case "ArrowUp":
          game.player.directionY = -1;
          break;
        case "ArrowRight":
          game.player.directionX = 1;
          break;
        case "ArrowDown":
          game.player.directionY = 1;
          break;
      }
    }
  }

  // Add the handleKeydown function as an event listener for the keydown event
  window.addEventListener("keydown", handleKeydown);
};
```

<br>

</details>

<br>

<img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m1/lab-dom-race-car/lab-dom-race-car-start-game-player.gif" width="600" style="display: block; margin: 0 auto" />

<br>

## Iteration 6: Obstacles

In this iteration, we will create the `Obstacle` class, which will be used to create obstacle instances.

1. Open the `js/` folder and create a new file called `obstacle.js`.

2. In the `index.html` file, add a script tag to link the new `obstacle.js` file.

3. Inside the `obstacle.js` file that you just created, define a new class called `Obstacle`.

4. The `Obstacle` class should have the following properties defined in the constructor:

   - `gameScreen` - the game screen element passed as an argument to the constructor.

   - `left` - randomly generated number representing the horizontal position of the car.

   - `top` - the initial vertical position of the obstacle. We will set it to `0`.

   - `width` - the width of the obstacle element. We will set it to `100`.

   - `height` - the height of the obstacle element. We will set it to `150`.

   - `element` - the image element that represents the obstacle car. We will use the image of the red car available in the `images/` folder.

     <br>

5. Once you create the obstacle element, you should position it absolutely (`position: absolute`) to be able to specify its exact position. The exact position is determined by this element's width, height, left and top properties.

6. Also, remember to append the obstacle element to the `gameScreen`.

7. The `Obstacle` class should have the following methods:

   <details>
     <summary> <code><b>move()</b></code> </summary>

   - Move the obstacle down by 3px by continuously updating its `top` property. 

   - Update the obstacle's position on the screen by calling the `updatePosition()` method.

   </details>

   <details>
     <summary> <code><b>updatePosition()</b></code> </summary>

   Updates the position of the obstacle element on the screen based on its current `left` and `top` properties.

   </details>

   <br>

You can use the below example of the completed code as a reference:

<details>
	<summary>See the code</summary>

<br>

```js
class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = Math.floor(Math.random() * 300 + 70);
    this.top = 0;
    this.width = 100;
    this.height = 150;
    this.element = document.createElement("img");

    this.element.src = "./images/redCar.png";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    // Update the obstacle's position based on the properties left and top
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  move() {
    // Move the obstacle down by 3px
    this.top += 3;
    // Update the obstacle's position on the screen
    this.updatePosition();
  }
}
```

<br>

</details>

<br>

## Iteration 7: Handling Collisions

The last key aspect of the game is handling the collisions between the player's car and the obstacle cars and generating obstacles randomly.

To do this, you need to modify the `update()` method in the `Game` class to do the following:

<details>
  <summary> <code><b>Game - update()</b></code> </summary>

This method is responsible for updating the game state during each loop iteration. Here are the steps that it should perform:

- Update player's car position based on its `directionX` and `directionY` properties by invoking the method `player.move()`.

- Randomly generate a new obstacle.

- Iterate through the list of `obstacles`, move each obstacle, and check for collision with the player’s car.

  - If there is a collision, remove the obstacle from the game and reduce the player’s remaining lives by one.

  - If the obstacle is off the screen, remove the obstacle from the game and increase the player’s score by one.

- Check if the player has run out of lives, and end the game if so. Create a new method (`endGame`) responsible for ending the game.


</details>
 
 <details>
   <summary> <code><b>endGame()</b></code> </summary>

 - Remove a player and all the obstacles from the DOM.
 - Set the `gameIsOver` flag to `true`.
 - Hide the game screen.
 - Show the end game screen.

 </details>

<br>

You can use the below example of the completed code as a reference:

<details>
	<summary>See the code</summary>

<br>

```js
// js/game.js

class Game {
  // ...

  update() {
    this.player.move();

    // Check for collision and if an obstacle is still on the screen
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      // If the player's car collides with an obstacle
      if (this.player.didCollide(obstacle)) {
        // Remove the obstacle element from the DOM
        obstacle.element.remove();
        // Remove obstacle object from the array
        this.obstacles.splice(i, 1);
        // Reduce player's lives by 1
        this.lives--;
        // Update the counter variable to account for the removed obstacle
        i--;
      } // If the obstacle is off the screen (at the bottom)
      else if (obstacle.top > this.height) {
        // Increase the score by 1
        this.score++;
        // Remove the obstacle from the DOM
        obstacle.element.remove();
        // Remove obstacle object from the array
        this.obstacles.splice(i, 1);
        // Update the counter variable to account for the removed obstacle
        i--;
      }
    }

    // If the lives are 0, end the game
    if (this.lives === 0) {
      this.endGame();
    }

    // Create a new obstacle based on a random probability
    // when there is no other obstacles on the screen
    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
  }

  // Create a new method responsible for ending the game
  endGame() {
    this.player.element.remove();
    this.obstacles.forEach(obstacle => obstacle.element.remove());

    this.gameIsOver = true;

    // Hide game screen
    this.gameScreen.style.display = "none";
    // Show end game screen
    this.gameEndScreen.style.display = "block";
  }

  // ...
}
```

<br>

</details>

<br>



<img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m1/lab-dom-race-car/lab-dom-race-car-start-game-obstacles.gif" width="600" style="display: block; margin: 0 auto" />

<br>



## Iteration 8: End Game Screen

In this final iteration, we will implement the end game screen, shown to the user when the game is over.

Check the code in the `js/script.js`. We will do this by adding a `click` event listener to the **Restart Game** button. The handler function for this listener should reload the page when the button is clicked. You can achieve this by using the [`location.reload()`](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload) method.

<br>

You can refer to the example of the completed code below to guide you through this iteration:

<details>
	<summary>See the code</summary>

<br>

```js
// js/script.js

window.onload = function () {
  // ...

  // Add an event listener to the restart button
  restartButton.addEventListener("click", function () {
    // Call the restartGame function when the button is clicked
    restartGame();
  });

  // The function that reloads the page to start a new game
  function restartGame() {
    location.reload();
  }
};
```

<br>

</details>

<br>

## BONUS - Iteration 9: Refactoring with Subclasses and Inheritance

In this iteration, we will focus on refactoring the `Player` and `Obstacle` classes by implementing inheritance. This will enable you to reuse common code and establish a more organized structure. In particular, we will create a superclass called `Component` that will hold the shared functionality for both `Player` and `Obstacle`:

1. Create a new class `Component` with a constructor that takes `gameScreen`, `left`, `top`, `width`, `height`, and `imgSrc` as parameters. This constructor will set up the common properties and DOM elements for both `Player` and `Obstacle`.

2. Update the `Player` and `Obstacle` classes to extend the `Component` class. Replace their constructors with a call to `super()` that passes the required parameters to the superclass constructor.

3. Remove any duplicated code from the `Player` and `Obstacle` classes that is already implemented in the `Component` class.

   <br>

Here's how the final refactored code should look like:

<details>
	<summary>See the code</summary>

<br>

```js
// js/component.js

class Component {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.element = document.createElement("img");

    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
}
```

<br>

```js
// js/player.js

class Player extends Component {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    super(gameScreen, left, top, width, height, imgSrc);

    this.directionX = 0;
    this.directionY = 0;
  }

  move() {
    // Update player's car position based on directionX and directionY
    this.left += this.directionX;
    this.top += this.directionY;
    debugger;

    // Ensure the player's car stays within the game screen
    if (this.left < 10) {
      this.left = 10;
    }
    if (this.top < 10) {
      this.top = 10;
    }
    if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
      this.left = this.gameScreen.offsetWidth - this.width - 10;
    }
    if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
      this.top = this.gameScreen.offsetHeight - this.height - 10;
    }

    // Update the player's car position on the screen
    this.updatePosition();
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      console.log("Crash!");
      return true;
    } else {
      return false;
    }
  }
}

```

<br>

```js
// js/obstacle.js

class Obstacle extends Component {
  constructor(gameScreen) {
    super(
      gameScreen,
      Math.floor(Math.random() * 300 + 70),
      0,
      100,
      150,
      "./images/redCar.png"
    );
  }

  move() {
    // Move the obstacle down by 3px
    this.top += 3;
    // Update the obstacle's position on the screen
    this.updatePosition();
  }
  
}

```

<br>

</details>



<br>

## BONUS - Iteration 10: Points, points, points

To make the game more competitive, add elements to shows the player's score and lives. These elements should display the remaining lives and accumulated points as the player successfully avoids obstacles.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_e4b1a09cee1b1a827a2c68023d0d2b1f.png)

<br>

## Lab Solution

You can find the complete solution code for the lab at:  [dom-race-car](https://github.com/ironhack-labs/lesson-code-dom-race-car).

To clone the solution repository, run the following commands:

```shell
# clone the repo
git clone https://github.com/ironhack-labs/lesson-code-dom-race-car.git

# navigate to the cloned repo
cd lesson-code-dom-race-car
```



<br>

**Happy coding!** :heart:
