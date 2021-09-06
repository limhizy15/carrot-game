"use strict";

const field = document.querySelector(".game__field");
const fieldRect = field.getBoundingClientRect();
const fieldHeight = field.getBoundingClientRect().height;
const fieldWidth = field.getBoundingClientRect().width;

function initGame() {
  // 벌레, 당근을 field에 추가
  addItem("carrot", 5, "img/carrot.png");
  addItem("bug", 5, "img/bug.png");
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

initGame();
