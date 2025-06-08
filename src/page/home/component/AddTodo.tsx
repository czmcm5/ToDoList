import styled from "styled-components";
import ThemeColor from "../../../style/colorSet";
import { useTodoContext } from "../../../context/TodoContext";
import useAddList from "../../../hook/useAddList";

const AddTodo = () => {
  console.log("AddTodo 렌더링");

  const { loadList } = useTodoContext();
  const form = useAddList(loadList);

  return (
    <section>
      <h1>Add Todo</h1>

      <LabelText htmlFor="title">제목</LabelText>
      <InputBox
        id="title"
        value={form.title}
        onChange={form.settingTitle}
        placeholder="할 일"
      />

      <LabelText htmlFor="content">내용</LabelText>
      <InputBox
        id="content"
        value={form.content}
        onChange={form.settingContent}
        placeholder="상세내용"
      />

      <LabelText htmlFor="hashTag">해시태그</LabelText>
      <InputBox
        id="hashTag"
        value={form.hashTag}
        onChange={form.settingHashTag}
        onKeyDown={form.addHashTag}
        onCompositionStart={form.handleCompositionStart}
        onCompositionEnd={form.handleCompositionEnd}
      />

      <TagsBox>
        {form.hashTags.map((tag, idx) => (
          <span key={idx} onClick={() => form.removeHashTag(idx)}>
            #{tag}
          </span>
        ))}
      </TagsBox>

      <Btn onClick={form.submitForm}>+ 등록하기</Btn>
    </section>
  );
};

export default AddTodo;

const LabelText = styled.label`
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
