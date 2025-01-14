let timerInterval;
let elapsedTime = 0;

export function renderTimeTracker() {
  const stopwatchDisplay = document.querySelector(".stopwatch");
  const startButton = document.querySelector(".js-stopwatch-start-button");
  const stopButton = document.querySelector(".js-stopwatch-stop-button");

  function updateStopwatch() {
    elapsedTime += 1;
    const hours = Math.floor(elapsedTime / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((elapsedTime % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (elapsedTime % 60).toString().padStart(2, "0");
    stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}`;
  }

  //start and pause button
  startButton.addEventListener("click", () => {
    if (!timerInterval) {
      timerInterval = setInterval(updateStopwatch, 1000);
      const buttonImage = startButton.querySelector("img");
      buttonImage.src = "/images/stopwatch-icons/pause-button.png";
      startButton.classList.add("pause-button");
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      const buttonImage = startButton.querySelector("img");
      buttonImage.src = "/images/stopwatch-icons/start-button.png";
      startButton.classList.remove("pause-button");
    }
  });

  //stop button
  stopButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    stopwatchDisplay.textContent = "00:00:00";

    if (startButton.classList.contains("pause-button")) {
      startButton.classList.remove("pause-button");
      const buttonImage = startButton.querySelector("img");
      buttonImage.src = "/images/stopwatch-icons/start-button.png";
      startButton.classList.remove("pause-button");
    }
  });
}
