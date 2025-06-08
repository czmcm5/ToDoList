import type { AddTodo } from "../model/TodoList";

type UpdateFieldAction<K extends keyof AddTodo> = {
  type: "update_field";
  name: K;
  value: AddTodo[K];
};

type Action =
  | UpdateFieldAction<keyof AddTodo>
  | { type: "add_hasTah" }
  | { type: "remove_hasTah"; idx: number }
  | { type: "reset" };

export const initialState: AddTodo = {
  title: "",
  content: "",
  hashTag: "",
  hashTags: [],
};

export function reducer(state: AddTodo, action: Action): AddTodo {
  switch (action.type) {
    case "update_field":
      return {
        ...state,
        [action.name]: action.value,
      };

    case "add_hasTah":
      if (
        state.hashTag.trim() &&
        !state.hashTags.includes(state.hashTag.trim())
      ) {
        return {
          ...state,
          hashTags: [...state.hashTags, state.hashTag.trim()],
          hashTag: "",
        };
      }
      return state;

    case "remove_hasTah":
      return {
        ...state,
        hashTags: state.hashTags.filter((_, idx) => idx !== action.idx),
      };

    case "reset":
      return initialState;

    default:
      return state;
  }
}
