import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosReducer from "./feature/todo.slice";
import categoryReducer from "./feature/category.slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const userReducer = combineReducers({
  todo: todosReducer,
  cateogry: categoryReducer,
});

const persistConfig = {
  key: "root",

  storage,
};
const persistedReducer = persistReducer(persistConfig, userReducer);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
