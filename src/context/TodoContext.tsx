import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { TodoItem } from "../model/TodoList";
import { removeListItem } from "../utils/list";

interface TaskListContextType {
  todoList: TodoItem[];
  removeItem: (title: string) => void;
}

interface TodoContextType {
  loadList: (item: TodoItem) => void;
}

const TaskListContext = createContext<TaskListContextType | null>(null);
const AddTodoContext = createContext<TodoContextType | null>(null);

const getLocalStorage = (): TodoItem[] => {
  try {
    const stored = localStorage.getItem("todoList");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  useEffect(() => {
    setTodoList(getLocalStorage());
  }, []);

  const loadList = useCallback((data: TodoItem) => {
    setTodoList((prev) => [...prev, data]);
  }, []);

  const removeItem = (title: string) => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      setTodoList(removeListItem(title));
    }
  };
  const addTodoValue = useMemo(() => ({ loadList }), [loadList]);
  const taskListValue = { todoList, removeItem };

  return (
    <AddTodoContext.Provider value={addTodoValue}>
      <TaskListContext.Provider value={taskListValue}>
        {children}
      </TaskListContext.Provider>
    </AddTodoContext.Provider>
  );
};

export const useTaskListContext = () => {
  const context = useContext(TaskListContext);
  if (!context)
    throw new Error("useTaskListContext must be used within a TodoProvider");
  return context;
};

export const useAddTodoContext = () => {
  const context = useContext(AddTodoContext);
  if (!context)
    throw new Error("useAddTodoContext must be used within a TodoProvider");
  return context;
};
