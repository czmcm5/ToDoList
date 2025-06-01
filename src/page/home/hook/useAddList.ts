import { useState } from "react";
import type { TodoItem } from "../context/TodoContext";

const useAddList = (loadList?: (data: TodoItem) => void) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [hashTag, setHashTag] = useState<string>("");
  const [hashTags, setHashTags] = useState<string[]>([]);
  const [isComposing, setIsComposing] = useState(false);

  const settingTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const settingContent = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContent(e.target.value);
  const settingHashTag = (e: React.ChangeEvent<HTMLInputElement>) =>
    setHashTag(e.target.value.trim());

  const handleCompositionStart = () => setIsComposing(true);
  const handleCompositionEnd = () => setIsComposing(false);

  const addHashTag = (e: React.KeyboardEvent) => {
    if (isComposing) return;
    if (hashTag.trim() === "") return;

    if (e.key === "Enter") {
      e.preventDefault();

      if (hashTags.includes(hashTag.trim())) {
        alert("이미 추가된 해시태그입니다.");
        return;
      }

      setHashTags((prev) => [...prev, hashTag.trim()]);
      setHashTag("");
    }
  };

  const removeHashTag = (idx: number) => {
    setHashTags((prev) => prev.filter((_, i) => i !== idx));
  };

  const submitForm = () => {
    if (title.trim() === "") return alert("제목을 입력해주세요.");

    const newTodoItem: TodoItem = {
      title,
      content,
      hashTags: hashTags.join(", "),
    };

    localStorage.setItem(
      "todoList",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("todoList") || "[]"),
        newTodoItem,
      ])
    );

    if (loadList) {
      loadList(newTodoItem);
    }

    setTitle("");
    setContent("");
    setHashTags([]);
  };

  return {
    title,
    content,
    hashTag,
    hashTags,
    settingTitle,
    settingContent,
    settingHashTag,
    addHashTag,
    removeHashTag,
    submitForm,
    handleCompositionStart,
    handleCompositionEnd,
  };
};

export default useAddList;
