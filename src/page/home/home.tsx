import { TodoProvider } from "../../context/TodoContext";
import AddTodo from "./component/AddTodo";
import TaskList from "./component/TaskList";

const Home = () => {
  return (
    <TodoProvider>
      <TaskList />
      <AddTodo />
    </TodoProvider>
  );
};

export default Home;
