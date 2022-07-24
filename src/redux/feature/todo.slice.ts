import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { ITodo } from "../../interface";
// import { v4 as uuidv4 } from "uuid";

// const initialState = [] as ITodo[];

// const todoSlice = createSlice({
//   name: "todos",
//   initialState,
//   reducers: {
//     addTodo: {
//       reducer: (state: ITodo[], action: PayloadAction<ITodo>) => {
//         state.push(action.payload);
//       },
//       prepare: (description: string) => ({
//         payload: {
//           id: uuidv4(),
//           description,
//           done: false,
//         } as ITodo,
//       }),
//     },
//     removeTodo(state: ITodo[], action: PayloadAction<string>) {
//       state.filter((todo) => todo.id !== action.payload);
//     },
//     setTodoStatus(
//       state: ITodo[],
//       action: PayloadAction<{ completed: boolean; id: string }>
//     ) {
//       const index = state.findIndex((todo) => todo.id === action.payload.id);
//       state[index].done = action.payload.completed;
//     },
//   },
// });

// export const { addTodo, removeTodo, setTodoStatus } = todoSlice.actions;
// export default todoSlice.reducer;
