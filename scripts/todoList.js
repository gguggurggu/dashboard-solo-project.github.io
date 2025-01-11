export function addTodoList() {
  const inputElement = document.querySelector(".js-to-do-input-input");
  const todoListContainer = document.querySelector(".js-to-do-ul");

  document
    .querySelector(".js-to-do-input-button")
    .addEventListener("click", () => {
      const inputValue = inputElement.value.trim();

      if (inputValue) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<input type="checkbox"> ${inputValue}`;

        todoListContainer.appendChild(listItem);

        inputElement.value = "";
      }
    });
}
