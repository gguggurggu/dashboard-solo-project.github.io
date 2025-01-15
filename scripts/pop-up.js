export function openPopup() {
  const backgroundDashboard = document.querySelector(".js-dashboard");
  const popUp = document.querySelector(".pop-up");
  const openTrigger = document.querySelector(".js-open-trigger-button");
  const closeTrigger = document.querySelector(".js-close-trigger-button");

  openTrigger.addEventListener("click", () => {
    backgroundDashboard.classList.add("blur");
    popUp.classList.add("open-pop-up");
  });

  closeTrigger.addEventListener("click", () => {
    backgroundDashboard.classList.remove("blur");
    popUp.classList.remove("open-pop-up");
  });
}
