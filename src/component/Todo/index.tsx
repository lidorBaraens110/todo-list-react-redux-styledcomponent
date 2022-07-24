import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICategory, ITodo } from "../../interface";
import { addTodo, toggleToDo } from "../../redux/feature/category.slice";
import { AppDispatch, RootState } from "../../redux/store";
import TodoForm from "../Forms/TodoForm";
import TodoItemInList from "../TodoItemInList";
import { StyledUl, WrapToDo } from "./todo.style";

interface ITodoList {
  categoryId: string;
  todos: ITodo[];
}

const Todo: FC<ITodoList> = ({ categoryId, todos }) => {
  return (
    <WrapToDo>
      <TodoForm categoryId={categoryId} />
      <StyledUl>
        {todos.map((todo, i) => {
          return <TodoItemInList key={i} categoryId={categoryId} {...todo} />;
        })}
      </StyledUl>
    </WrapToDo>
  );
};

export default Todo;
