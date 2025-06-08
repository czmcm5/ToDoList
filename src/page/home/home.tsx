import styled from "styled-components";
import ThemeColor from "../../style/colorSet";
import AddTodo from "./component/AddTodo";
import Header from "./component/Header";
import TaskList from "./component/TaskList";
import { TodoProvider } from "../../context/TodoContext";

const Home = () => {
  return (
    <Container>
      <Header />

      <div className="content">
        <TodoProvider>
          <TaskList />
          <AddTodo />
        </TodoProvider>
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  .content {
    flex: 1;
    display: flex;
    padding: 1rem;
    background-color: ${ThemeColor.background};
    overflow: hidden;
  }
  .content > section {
    position: relative;
    flex: 1;
    margin: 1rem;
    padding: 1rem 2rem;
    background-color: white;
    border-radius: 4px;
    box-shadow: ${ThemeColor.boxShadow};
    overflow: auto;
  }
`;
