import { useReducer, useState } from "react";
import { initialState, reducer } from "../features/addTodoReducer";
import type { TodoItem } from "../model/TodoList";
import { saveList } from "../utils/list";

const useAddList = (loadList?: (data: TodoItem) => void) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isComposing, setIsComposing] = useState(false);

  const handleCompositionStart = () => setIsComposing(true);
  const handleCompositionEnd = () => setIsComposing(false);

  const updateState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: "update_field",
      name: name as keyof TodoItem,
      value,
    });
  };

  const addHashTag = (e: React.KeyboardEvent) => {
    if (isComposing) return;
    if (e.key !== "Enter") return;

    e.preventDefault();

    if (state.hashTags.includes(state.hashTag.trim())) {
      alert("이미 추가된 해시태그입니다.");
      return;
    }

    dispatch({ type: "add_hasTah" });
  };

  const removeHashTag = (idx: number) => {
    dispatch({ type: "remove_hasTah", idx });
  };

  const submitForm = () => {
    if (state.title.trim() === "") {
      alert("제목을 입력해주세요.");
      return;
    }

    const newTodoItem: TodoItem = {
      title: state.title,
      content: state.content,
      hashTags: state.hashTags.join(", "),
    };

    // 저장
    saveList(newTodoItem);

    // List 로드
    if (loadList) {
      loadList(newTodoItem);
    }

    // 폼 초기화
    dispatch({ type: "reset" });
  };

  return {
    state,
    updateState,
    addHashTag,
    removeHashTag,
    submitForm,
    composition: {
      start: handleCompositionStart,
      end: handleCompositionEnd,
    },
  };
};

export default useAddList;
