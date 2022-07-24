import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../../redux/feature/category.slice";
import { RootState } from "../../../redux/store";
import { Button, Form, Input } from "./categoryModalForm.style";
import { v4 as uuidv4 } from "uuid";
import { ICategory } from "../../../interface";

interface ICateryModalFormProps {
  handleClose: () => void;
}

const CategoryModalForm: FC<ICateryModalFormProps> = ({ handleClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.cateogry);
  const [value, setValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newCategory: ICategory = {
      name: value,
      id: uuidv4(),
      todos: [],
    };
    dispatch(createCategory(newCategory));
    handleClose();
    // const newCategory = category.filter((cat) => cat.name === value);
    console.log(newCategory);
    setValue("");
    navigate(`/${newCategory.id}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input required ref={inputRef} value={value} onChange={handleChange} />
      <Button type="submit">add</Button>
    </Form>
  );
};

export default CategoryModalForm;
