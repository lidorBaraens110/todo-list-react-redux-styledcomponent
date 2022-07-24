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
    createCategory: {
      reducer: (state: ICategory[], action: PayloadAction<ICategory>) => {
        const exist = state.findIndex(
          (category) => category.name === action.payload.name
        );
        if (exist === -1) {
          state.push(action.payload);
        }
      },
      prepare: (name: string) => ({
        payload: {
          id: uuidv4(),
          name,
          todos: [],
        },
      }),
    },
    addTodo: {
      reducer: (state: ICategory[], action: PayloadAction<IAddTodo>) => {
        console.log("hello add todo from slice", action);
        return state.map((category) => {
          if (category.id === action.payload.categoryId) {
            console.log("we are in the category");
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
      state.filter((category) => category.id !== action.payload);
    },
    removeTodo(state: ICategory[], action: PayloadAction<IRemoveTodo>) {
      state.map((category) => {
        if (category.id === action.payload.categoryId) {
          return category.todos.filter(
            (todo) => todo.id !== action.payload.todoId
          );
        }
        return category;
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
