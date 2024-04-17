const encouragments = ["Nice!", "Good One!", "Keep Going!", "Quaaaack!"];

const startButton = document.querySelector("button");
const gameEl = document.querySelector("#game");
const scoreEl = document.querySelector("#score>span");
const highScoreEl = document.querySelector("#high-score>span");
const encouragmentEl = document.querySelector(".encouragment");
const tickleZone = gameEl.querySelector(".tickle-zone");

const quackSound = document.querySelector("audio");
const volumeSlider = document.querySelector("input[name=volume]");
changeVolume();

volumeSlider.addEventListener("change", () => {
  changeVolume();
});

startButton.addEventListener("click", (event) => {
  startButton.disabled = true;
  addNewDuck();
});

function addNewDuck() {
  const newDuckEl = document.createElement("div");
  newDuckEl.className = "duck";

  const newTickleZone = document.createElement("div");
  newTickleZone.setAttribute("class", "tickle-zone");

  newDuckEl.appendChild(newTickleZone);

  const randTop = Math.random() * 85;
  const randLeft = Math.random() * 65;

  newDuckEl.style.top = `${randTop}vh`;
  newDuckEl.style.left = `${randLeft}vw`;

  newTickleZone.addEventListener("click", () => {
    quackSound.currentTime = 0;
    quackSound.play();

    newTickleZone.closest(".duck").remove();
    incrementScore();

    const randomIndex = Math.floor(Math.random() * encouragments.length);
    encouragmentEl.textContent = encouragments[randomIndex];

    addNewDuck();
  });

  gameEl.appendChild(newDuckEl);
}

function incrementScore() {
  let score = parseInt(scoreEl.textContent);
  const highScore = parseInt(highScoreEl.textContent);

  score++;

  // .padStart(6, "0") makes sure score is at least 6 characters long, by adding zeros to start
  const paddedScore = score.toString().padStart(6, "0");
  scoreEl.textContent = paddedScore;

  if (score > highScore) {
    highScoreEl.textContent = paddedScore;
  }
}

function changeVolume() {
  quackSound.volume = volumeSlider.value / 100;
}
