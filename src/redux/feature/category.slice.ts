import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory, ITodo } from "../../interface";
import { v4 as uuidv4 } from "uuid";

const initialState = [] as ICategory[];

interface IToggleTodo {
  categoryId: string;
  todoId: string;
}

interface IAddTodo {
  categoryId: string;
  todo: ITodo;
}
interface IRemoveTodo {
  categoryId: string;
  todoId: string;
}

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    createCategory: (state: ICategory[], action: PayloadAction<ICategory>) => {
      const exist = state.findIndex(
        (category) => category.name === action.payload.name
      );
      if (exist === -1) {
        state.push(action.payload);
      }
    },
    addTodo: {
      reducer: (state: ICategory[], action: PayloadAction<IAddTodo>) => {
        return state.map((category) => {
          if (category.id === action.payload.categoryId) {
            return {
              ...category,
              todos: [...category.todos, action.payload.todo],
            };
          }
          return category;
        });
      },
      prepare: (description: string, categoryId: string) => ({
        payload: {
          categoryId: categoryId,
          todo: {
            id: uuidv4(),
            description,
            done: false,
          } as ITodo,
        },
      }),
    },
    toggleToDo(state: ICategory[], action: PayloadAction<IToggleTodo>) {
      return state.map((category) => {
        if (category.id === action.payload.categoryId) {
          return {
            ...category,
            todos: category.todos.map((todo) => {
              if (todo.id === action.payload.todoId) {
                return { ...todo, done: !todo.done };
              }
              return todo;
            }),
          };
        }
        return category;
      });
    },
    removeCategory(state: ICategory[], action: PayloadAction<string>) {
      return state.filter((category) => category.id !== action.payload);
    },
    removeTodo(state: ICategory[], action: PayloadAction<IRemoveTodo>) {
      return state.map((category) => {
        if (category.id === action.payload.categoryId) {
          return {
            ...category,
            todos: category.todos.filter((todo: ITodo) => {
              return todo.id !== action.payload.todoId;
            }),
          };
        }
        return { ...category };
      });
    },
  },
});

export const {
  addTodo,
  removeTodo,
  createCategory,
  removeCategory,
  toggleToDo,
} = categorySlice.actions;
export default categorySlice.reducer;
