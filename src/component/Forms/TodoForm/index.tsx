import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/feature/category.slice";
import { AppDispatch } from "../../../redux/store";
import { FormInput, StyledButton, StyledForm } from "./todoForm.styles";

interface ITodoForm {
  categoryId: string;
}

const TodoForm: FC<ITodoForm> = ({ categoryId }) => {
  const [todoDesc, setTotoDesc] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTotoDesc(e.target.value);
  };

  const addTask = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(todoDesc, categoryId));
  };
  return (
    <StyledForm onSubmit={addTask}>
      <FormInput
        placeholder="Enter new todo"
        required
        type="text"
        onChange={handleChange}
        value={todoDesc}
      />
      <StyledButton type="submit">add</StyledButton>
    </StyledForm>
  );
};

export default TodoForm;
