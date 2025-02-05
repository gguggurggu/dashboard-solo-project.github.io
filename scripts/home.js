export function homeButton() {
  document.querySelector(".js-home-button").addEventListener("click", () => {
    window.location.href = "/index.html";
  });
}
