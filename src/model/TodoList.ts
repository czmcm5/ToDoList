export interface TodoItem {
  title: string;
  content: string;
  hashTag?: string;
  hashTags: string;
}

export interface AddTodo {
  title: string;
  content: string;
  hashTag: string;
  hashTags: string[];
}
