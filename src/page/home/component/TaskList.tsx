import styled from "styled-components";
import { useTaskListContext } from "../../../context/TodoContext";

const TaskList = () => {
  console.log("Task List 렌더링");
  const { todoList, removeItem } = useTaskListContext();

  return todoList.map((item, idx) => (
    <ListItem key={idx} onClick={() => removeItem(item.title)}>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      <div>{item.hashTags}</div>
    </ListItem>
  ));
};
export default TaskList;

const ListItem = styled.div`
  margin-bottom: 1rem;
  border: 1px solid #ccc;
`;
