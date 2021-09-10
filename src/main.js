"use strict";

import PopUp from "./popup.js";
import Field from "./field.js";

const CARROT_COUNT = 5;
const BUG_COUNT = 5;

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
  startGame();
});

const gameField = new Field(CARROT_COUNT, BUG_COUNT);
gameField.setClickListener(onItemClick);

function onItemClick(e) {
  if (!started) {
    return;
  }

  if (item === "carrot") {
    score++;
    updateScoreBoard();

    if (score === CARROT_COUNT) {
      finishGame(true);
    }
  } else if (item === "bug") {
    finishGame(false);
  }
}

function initGame() {
  score = 0;
  gameScore.innerText = CARROT_COUNT;
  gameField.init();
}

function randomNumber(min, max) {
  // create random number
  return Math.random() * (max - min) + min;
}

const gameBtn = document.querySelector(".game__button");
const playBtn = document.querySelector(".play-btn");
const stopBtn = document.querySelector(".stop-btn");

const gameTimer = document.querySelector(".game__timer");
const gameScore = document.querySelector(".game__score");

let started = false;
let score = 0;
let timer = 10;

gameBtn.addEventListener("click", () => {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
  // started = !started;
});

function startGame() {
  started = true;
  initGame();
  showStopButton();
  showTimerAndScore();
  startGameTimer();
}

function showStopButton() {
  const icon = gameBtn.querySelector(".fas");
  icon.classList.add("fa-stop");
  icon.classList.remove("fa-play");
  gameBtn.style.visibility = "visible";
}

function showTimerAndScore() {
  gameTimer.style.visibility = "visible";
  gameScore.style.visibility = "visible";
}

let interval;

function startGameTimer() {
  updateTimerText(timer);
  interval = setInterval(() => {
    if (timer <= 0) {
      clearInterval(interval);
      finishGame(score === 5);
      return;
    }
    updateTimerText(--timer);
  }, 1000);
}

function updateTimerText(sec) {
  gameTimer.innerText = `0:${timer}`;
}

// 게임 중지

function stopGame() {
  started = false;
  stopGameTimer();
  hideGameButton();
  gameFinishBanner.showWithText("REFRESH ?");
}

function stopGameTimer() {
  clearInterval(interval);
}

function hideGameButton() {
  gameBtn.style.visibility = "hidden";
}

// field event

function updateScoreBoard() {
  gameScore.innerText = 5 - score;
}

function finishGame(win) {
  started = false;
  hideGameButton();
  gameFinishBanner.showWithText(win ? "YOU WIN 🚀" : "YOU LOST 💩");
  stopGameTimer();
}
