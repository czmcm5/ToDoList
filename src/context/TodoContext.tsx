import { createContext, useContext, useEffect, useState } from "react";

export interface TodoItem {
  title: string;
  content: string;
  hashTags: string;
}

interface TodoContextType {
  todoList: TodoItem[];
  loadList: (item: TodoItem) => void;
  removeItem: (title: string) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const getLocalStorage = (): TodoItem[] => {
  try {
    const stored = localStorage.getItem("todoList");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context)
    throw new Error("useTodoContext must be used within a TodoProvider");
  return context;
};

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
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

  return (
    <TodoContext.Provider value={{ todoList, loadList, removeItem }}>
      {children}
    </TodoContext.Provider>
  );
};
