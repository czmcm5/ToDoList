import { useEffect, useState } from "react";

export interface TodoItem {
  title: string;
  content: string;
  hashTags: string;
}

const getLocalStorage = (): TodoItem[] => {
  try {
    const stored = localStorage.getItem("todoList");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const useLoadList = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  useEffect(() => {
    setTodoList(getLocalStorage());
  }, []);

  const loadList = (data: TodoItem) => setTodoList((prev) => [...prev, data]);

  const removeItem = (title: string) => {
    const updated = todoList.filter((item) => item.title !== title);
    setTodoList(updated);
    localStorage.setItem("todoList", JSON.stringify(updated));
  };

  return {
    todoList,
    loadList,
    removeItem,
  };
};
export default useLoadList;
