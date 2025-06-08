import type { TodoItem } from "../model/TodoList";

export const saveList = (newItem: TodoItem): void => {
  localStorage.setItem(
    "todoList",
    JSON.stringify([
      ...JSON.parse(localStorage.getItem("todoList") || "[]"),
      newItem,
    ])
  );
};

export const removeListItem = (title: string): TodoItem[] => {
  const list: TodoItem[] = JSON.parse(localStorage.getItem("todoList") || "[]");
  const updated = list.filter((item) => item.title !== title);

  // 로컬 스토리지에서도 삭제
  localStorage.setItem("todoList", JSON.stringify(updated));

  return updated;
};
