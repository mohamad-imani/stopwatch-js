const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const led = document.querySelector("#led");

let [seconds, minutes, hours] = [0,0,0];
let int = null;

start.addEventListener("click", () => {
  
  if (int!==null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(int);
});

reset.addEventListener("click", () => {
  clearInterval(int);
  [seconds, minutes, hours] = [0, 0, 0];
  led.innerHTML = "00:00:00";
});


const displayTimer = () => {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;

  led.innerHTML = `${h}:${m}:${s}`;
}

