export function addTodoList() {
  const savedTodos = JSON.parse(localStorage.getItem("save-to-do")) || [];
  const inputElement = document.querySelector(".js-to-do-input-input");
  const todoListContainer = document.querySelector(".js-to-do-ul");

  const createTodoItem = (todo) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<input type="checkbox"> ${todo}
                <button class="to-do-input-button to-do-delete-button js-to-do-delete-button">
                  <img
                    class="delete-button"
                    src="/images/icons/delete-button.png"
                  /> </button>`;

    listItem
      .querySelector(".js-to-do-delete-button")
      .addEventListener("click", () => {
        listItem.remove();
        const index = savedTodos.indexOf(todo);
        if (index !== -1) {
          savedTodos.splice(index, 1);
          localStorage.setItem("save-to-do", JSON.stringify(savedTodos));
        }
      });
    return listItem;
  };

  savedTodos.forEach((todo) => {
    todoListContainer.appendChild(createTodoItem(todo));
  });

  document
    .querySelector(".js-to-do-input-button")
    .addEventListener("click", () => {
      const inputValue = inputElement.value.trim();

      if (inputValue) {
        todoListContainer.appendChild(createTodoItem(inputValue));
        savedTodos.push(inputValue);
        localStorage.setItem("save-to-do", JSON.stringify(savedTodos));

        inputElement.value = "";
      }
    });
}
