import { FC } from "react";
import { ITodo } from "../../interface";
import TodoForm from "../Forms/TodoForm";
import TodoItemInList from "../TodoItemInList";
import { StyledUl, WrapToDo } from "./todo.style";

interface ITodoList {
  categoryId: string;
  todos: ITodo[];
  categoryName: string;
}

const Todo: FC<ITodoList> = ({ categoryId, todos, categoryName }) => {
  return (
    <WrapToDo>
      <h1>{categoryName}</h1>
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
