import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICategory, ITodo } from "../../interface";
import { addTodo, toggleToDo } from "../../redux/feature/category.slice";
import { AppDispatch, RootState } from "../../redux/store";
import TodoForm from "../Forms/TodoForm";
import TodoList from "../TodoList";
import { WrapToDo } from "./todo.style";

interface ITodoList {
  categoryId: string;
  todos: ITodo[];
}

const Todo: FC<ITodoList> = ({ categoryId, todos }) => {
  return (
    <WrapToDo>
      <TodoForm categoryId={categoryId} />
      <div>
        <ul>
          {todos.map((todo, i) => {
            return <TodoList key={i} categoryId={categoryId} {...todo} />;
          })}
        </ul>
      </div>
    </WrapToDo>
  );
};

export default Todo;
