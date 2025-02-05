import { renderDate } from "/dashboard-solo-project.github.io/scripts/date-hello.js";
import { openPopup } from "/dashboard-solo-project.github.io/scripts/pop-up.js";
import { renderSpotify } from "/dashboard-solo-project.github.io/scripts/spotify.js";
import { renderTimeTracker } from "/dashboard-solo-project.github.io/scripts/timeTracker.js";
import { renderTodoList } from "/dashboard-solo-project.github.io/scripts/todoList.js";

openPopup();

renderDate();
renderTodoList();
renderTimeTracker();
renderSpotify();
