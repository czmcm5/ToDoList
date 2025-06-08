import styled from "styled-components";
import { TodoProvider } from "../../context/TodoContext";
import AddTodo from "./component/AddTodo";
import TaskList from "./component/TaskList";
import ThemeColor from "../../style/colorSet";

const Home = () => {
  return (
    <TodoProvider>
      <ContentBox>
        <h1>할 일 목록</h1>
        <TaskList />
      </ContentBox>
      <ContentBox>
        <h1>등록하기</h1>
        <AddTodo />
      </ContentBox>
    </TodoProvider>
  );
};

export default Home;

const ContentBox = styled.section`
  position: relative;
  flex: 1;
  margin: 1rem;
  padding: 1rem 2rem;
  background-color: white;
  border-radius: 4px;
  box-shadow: ${ThemeColor.boxShadow};
  overflow: auto;
`;
