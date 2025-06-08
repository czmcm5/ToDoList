import type { TodoItem } from "../model/TodoList";

export const saveList = (newItem: TodoItem) => {
  localStorage.setItem(
    "todoList",
    JSON.stringify([
      ...JSON.parse(localStorage.getItem("todoList") || "[]"),
      newItem,
    ])
  );
};
