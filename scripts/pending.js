export function renderTodoList() {
  const savedTodos = JSON.parse(localStorage.getItem("save-to-do")) || [];
  const inputElement = document.querySelector(".js-to-do-input-input");
  const todoListContainer = document.querySelector(".js-to-do-ul");
  const emptyMessage = document.createElement("p");
  emptyMessage.className = "empty-message";
  emptyMessage.innerHTML = `<img src="/images/todo-icons/empty.png"><span><strong>No plans yet?</strong> Let's make some magic!</span>`;

  const createTodoItem = (todo) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<input type="checkbox"> ${todo}
                <button class="to-do-input-button to-do-delete-button js-to-do-delete-button">
                  <img
                    class="delete-button"
                    src="/images/todo-icons/delete-button.png"
                  /> </button>`;

    listItem
      .querySelector(".js-to-do-delete-button")
      .addEventListener("click", () => {
        listItem.remove();
        const index = savedTodos.indexOf(todo);
        if (index !== -1) {
          savedTodos.splice(index, 1);
          localStorage.setItem("save-to-do", JSON.stringify(savedTodos));
          if (savedTodos.length === 0) {
            todoListContainer.appendChild(emptyMessage);
          }
        }
      });
    return listItem;
  };

  const refreshTodoList = () => {
    todoListContainer.innerHTML = "";

    if (savedTodos.length === 0) {
      todoListContainer.appendChild(emptyMessage);
    } else {
      savedTodos.forEach((todo) => {
        const listItem = createTodoItem(todo);

        const scrollToBottom = (container) => {
          container.scrollTop = container.scrollHeight;
        };
        todoListContainer.appendChild(listItem);
        scrollToBottom(todoListContainer);
      });
    }
  };

  const addNewTodo = () => {
    const inputValue = inputElement.value.trim();

    if (inputValue) {
      savedTodos.push(inputValue);
      localStorage.setItem("save-to-do", JSON.stringify(savedTodos));
      inputElement.value = "";
    }
  };

  document
    .querySelector(".js-to-do-input-button")
    .addEventListener("click", () => {
      addNewTodo();
      refreshTodoList();
    });

  document
    .querySelector(".js-to-do-input-input")
    .addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        addNewTodo();
        refreshTodoList();
      }
    });

  refreshTodoList();
}
