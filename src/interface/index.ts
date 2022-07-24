export interface ITodo {
  id: string;
  description: string;
  done: boolean;
}

export interface ICategory {
  id: string;
  name: string;
  todos: ITodo[];
}
