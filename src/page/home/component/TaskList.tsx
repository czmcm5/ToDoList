import styled from "styled-components";
import { useTodoContext } from "../../../context/TodoContext";
import ThemeColor from "../../../style/colorSet";

const TaskList = () => {
  console.log("Task List 렌더링");
  const { todoList, removeItem } = useTodoContext();

  return (
    <ListBox>
      <h2>Task List</h2>

      {todoList.map((item, idx) => (
        <ListItem key={idx} onClick={() => removeItem(item.title)}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          <div>{item.hashTags}</div>
        </ListItem>
      ))}
    </ListBox>
  );
};
export default TaskList;

const ListBox = styled.section`
  position: relative;
  flex: 1;
  margin: 1rem;
  padding: 1rem 2rem;
  background-color: white;
  border-radius: 4px;
  box-shadow: ${ThemeColor.boxShadow};
  overflow: auto;
`;
const ListItem = styled.div`
  margin-bottom: 1rem;
  border: 1px solid #ccc;
`;
