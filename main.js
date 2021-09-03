const playBtn = document.querySelector("#play-btn");
const pauseBtn = document.querySelector("#pause-btn");
const timer = document.querySelector(".timer");
let interval;
let sec = 9;
let msec = 99;

function startTimer() {
  msec--;
  timer.innerText = `${sec}:${msec}`;
  // console.log(msec);
  if (msec === 0) {
    // console.log(`sec: ${sec} msec: ${msec}`);
    if (sec === 0 && msec === 0) {
      clearInterval(interval);
    }
    msec = 99;
    sec--;
  }
}

playBtn.addEventListener("click", () => {
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
const items = document.querySelector(".items");
items.addEventListener("click", (e) => {
  // console.log(e.target.className);
  if (e.target.className === "carrot") {
    e.target.remove();
    const carrots = document.querySelectorAll(".carrot");
    remainCarrots.innerText = carrots.length;
  }
});
