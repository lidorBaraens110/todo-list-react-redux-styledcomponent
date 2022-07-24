import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from "react";
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

  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  });

  const addTask = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(todoDesc, categoryId));
    setTotoDesc("");
  };
  return (
    <StyledForm onSubmit={addTask}>
      <FormInput
        ref={inputRef}
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
