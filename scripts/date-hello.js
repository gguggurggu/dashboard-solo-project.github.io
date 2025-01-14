import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

export function renderDate() {
  let date = dayjs();
  const today = date.format("dddd, MMMM D");

  const getDateHTML = document.querySelector(".js-today");

  getDateHTML.innerHTML = `<p class="js-today">${today}</p>`;

  const hour = date.hour();

  const getHelloHTML = document.querySelector(".js-hello");
  if (hour >= 0 && hour < 12) {
    getHelloHTML.innerHTML = `Good morning, User!`;
  } else if (hour >= 12 && hour < 18) {
    getHelloHTML.innerHTML = `Good afternoon, User!`;
  } else if (hour >= 18 && hour <= 23) {
    getHelloHTML.innerHTML = `Good evening, User!`;
  }
}
