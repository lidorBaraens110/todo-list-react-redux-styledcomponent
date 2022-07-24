import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/feature/category.slice";
import { AppDispatch } from "../../../redux/store";

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
    <form onSubmit={addTask}>
      <input type="text" onChange={handleChange} value={todoDesc} />
      <button type="submit">add</button>
    </form>
  );
};

export default TodoForm;
