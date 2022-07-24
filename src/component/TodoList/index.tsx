import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo, setTodoStatus } from "../../redux/feature/category/todoSlice";
import { AppDispatch, RootState } from "../../redux/store";

const TodoList: FC = () => {
  const [todoDesc, setTotoDesc] = useState("");
  const todoList = useSelector((state: RootState) => state);
  console.log(todoList);
  const dispatch = useDispatch<AppDispatch>();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTotoDesc(e.target.value);
  };

  const addTask = (e: FormEvent) => {
    e.preventDefault();
    // dispatch(addTodo(todoDesc));
  };

  // const handleCheckboxChange = (id: string, completed: boolean) => {
  //   console.log("hereh", completed, id);
  //   dispatch(setTodoStatus({ completed, id }));
  // };

  return (
    <div>
      <form onSubmit={addTask}>
        <input type="text" onChange={handleChange} value={todoDesc} />
        <button type="submit">add</button>
      </form>

      <div>
        <ul>
          {/* {todoList.map((task, i) => {
            return (
              <li
                key={task.id}
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() =>
                    handleCheckboxChange(task.id, !task.completed)
                  }
                />
                <span>{task.description}</span>
              </li>
            );
          })} */}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
