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
  input1: string;
  input2: string;
  input3: string;
  input4: string;
  input5: string;
}
