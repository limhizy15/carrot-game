const playBtn = document.querySelector("#play-btn");
const pauseBtn = document.querySelector("#pause-btn");
const timer = document.querySelector(".timer");
const items = document.querySelector(".items");
const gameItems = document.querySelectorAll(".items img");

let interval;
let sec = 9;
let msec = 99;

// 타이머 (시작, 중단 버튼과 상호작용)
function startTimer() {
  msec--;
  timer.innerText = `${sec}:${msec}`;
  if (msec === 0) {
    if (sec === 0 && msec === 0) {
      clearInterval(interval);
      playBtn.style.display = "block";
      pauseBtn.style.display = "none";
    }
    msec = 99;
    sec--;
  }
}

// 시작버튼
playBtn.addEventListener("click", () => {
  if (sec <= 0 && msec <= 0) {
    return;
  }

  playBtn.style.display = "none";
  pauseBtn.style.display = "block";

  interval = setInterval(startTimer);
});

pauseBtn.addEventListener("click", () => {
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
  clearInterval(interval);
});

// 당근의 개수 표시
const carrots = document.querySelectorAll(".carrot");
const remainCarrots = document.querySelector(".remain-carrot");
remainCarrots.innerText = carrots.length;

// 당근 클릭하면 해당 당근 없어지기
items.addEventListener("click", (e) => {
  if (e.target.className === "carrot") {
    e.target.remove();
    const carrots = document.querySelectorAll(".carrot");
    remainCarrots.innerText = carrots.length;
  }
});
