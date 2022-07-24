import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITodo } from "../../interface";
import { addTodo, toggleToDo } from "../../redux/feature/category.slice";
import { AppDispatch, RootState } from "../../redux/store";

const TodoList: FC<{ categoryId: string } & ITodo> = ({
  categoryId,
  description,
  id,
  done,
}) => {
  const dispatch = useDispatch();
  const handleCheckboxChange = (todoId: string) => {
    dispatch(toggleToDo({ categoryId, todoId }));
  };
  return (
    <li
      key={id}
      style={{
        textDecoration: done ? "line-through" : "none",
      }}
    >
      <input
        type="checkbox"
        checked={done}
        onChange={() => handleCheckboxChange(id)}
      />
      <span>{description}</span>
    </li>
  );
};

export default TodoList;
