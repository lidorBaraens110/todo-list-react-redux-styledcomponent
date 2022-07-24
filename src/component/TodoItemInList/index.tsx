import { FC } from "react";
import { useDispatch } from "react-redux";
import { ITodo } from "../../interface";
import { removeTodo, toggleToDo } from "../../redux/feature/category.slice";
import { StyledButton, StyledLabel, StyledList } from "./todoList.styles";

const TodoItemInList: FC<{ categoryId: string } & ITodo> = ({
  categoryId,
  description,
  id,
  done,
}) => {
  const dispatch = useDispatch();
  const handleCheckboxChange = () => {
    dispatch(toggleToDo({ categoryId, todoId: id }));
  };
  const deleteItem = () => {
    dispatch(removeTodo({ categoryId, todoId: id }));
  };
  return (
    <StyledList>
      <StyledLabel htmlFor={id} textDecoration={done ? 1 : 0}>
        <input type="checkbox" id={id} onChange={handleCheckboxChange} />
        {description}
      </StyledLabel>
      <StyledButton type="button" onClick={deleteItem}>
        Delete
      </StyledButton>
    </StyledList>
  );
};

export default TodoItemInList;
