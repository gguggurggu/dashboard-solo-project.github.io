import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

export function renderDate() {
  let date = dayjs();
  const today = date.format("dddd, MMMM D");

  const getDateHTML = document.querySelector(".js-today");

  getDateHTML.innerHTML = `<p class="js-today">${today}</p>`;
}
