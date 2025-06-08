import styled from "styled-components";
import ThemeColor from "../../../style/colorSet";
import { useTodoContext } from "../../../context/TodoContext";
import useAddList from "../../../hook/useAddList";

const AddTodo = () => {
  const { loadList } = useTodoContext();
  const { state, updateState, composition, ...utils } = useAddList(loadList);

  console.log("AddTodo 렌더링");

  return (
    <>
      <Label>제목</Label>
      <InputBox
        name="title"
        value={state.title}
        onChange={updateState}
        placeholder="할 일"
      />

      <Label>내용</Label>
      <InputBox
        name="content"
        value={state.content}
        onChange={updateState}
        placeholder="상세내용"
      />

      <Label>해시태그</Label>
      <InputBox
        name="hashTag"
        value={state.hashTag}
        onChange={updateState}
        onKeyDown={utils.addHashTag}
        onCompositionStart={composition.start}
        onCompositionEnd={composition.end}
      />

      <TagsBox>
        {state.hashTags.map((tag, idx) => (
          <span key={idx} onClick={() => utils.removeHashTag(idx)}>
            #{tag}
          </span>
        ))}
      </TagsBox>

      <Btn onClick={utils.submitForm}>+ 등록하기</Btn>
    </>
  );
};

export default AddTodo;

const Label = styled.span`
  display: block;
  margin-bottom: 5px;
`;
const InputBox = styled.input`
  width: 100%;
  height: 2rem;
  margin-bottom: 2rem;
  &:hover,
  &:focus {
    border-color: ${ThemeColor.main};
  }
`;
const Btn = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background-color: ${ThemeColor.main};
  width: 8rem;
  padding: 12px 0;
  text-align: center;
  font-weight: bold;
  color: white;
  border-radius: 20px;
  cursor: pointer;
`;
const TagsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 2rem;
  span {
    padding: 5px 10px;
    font-weight: bold;
    color: white;
    background-color: ${ThemeColor.main};
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      background-color: ${ThemeColor.main};
    }
  }
`;
