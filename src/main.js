"use strict";

import PopUp from "./popup.js";

const CARROT_COUNT = 5;
const BUG_COUNT = 5;

const field = document.querySelector(".game__field");
const fieldRect = field.getBoundingClientRect();
const fieldHeight = field.getBoundingClientRect().height;
const fieldWidth = field.getBoundingClientRect().width;

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
  startGame();
});

function initGame() {
  score = 0;
  field.innerHTML = "";
  gameScore.innerText = CARROT_COUNT;
  // 벌레, 당근을 field에 추가
  addItem("carrot", CARROT_COUNT, "img/carrot.png");
  addItem("bug", BUG_COUNT, "img/bug.png");
}

function addItem(className, count, imgPath) {
  // position 랜덤 생성 후 추가
  const x1 = 0;
  const y1 = 0;

  const x2 = fieldWidth - 80;
  const y2 = fieldHeight - 80; // 아이템 크기만큼 빼줘야함

  for (let i = 0; i < count; i++) {
    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", imgPath);
    item.style.position = "absolute";

    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);

    item.style.left = `${x}px`;
    item.style.top = `${y}px`;

    field.appendChild(item);
  }
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
field.addEventListener("click", onFieldClick);

function onFieldClick(e) {
  if (!started) {
    return;
  }
  const target = e.target;

  if (target.matches(".carrot")) {
    // 당근
    target.remove();
    score++;
    updateScoreBoard();

    if (score === 5) {
      finishGame(true);
    }
  } else if (target.matches(".bug")) {
    //벌레

    finishGame(false);
  }
}

function updateScoreBoard() {
  gameScore.innerText = 5 - score;
}

function finishGame(win) {
  started = false;
  hideGameButton();
  gameFinishBanner.showWithText(win ? "YOU WIN 🚀" : "YOU LOST 💩");
  stopGameTimer();
}
