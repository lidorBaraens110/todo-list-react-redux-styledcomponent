import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../../redux/feature/category.slice";
import { Button, Form, Input } from "./categoryModalForm.style";

interface ICateryModalFormProps {
  handleClose: () => void;
}

const CategoryModalForm: FC<ICateryModalFormProps> = ({ handleClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(createCategory(value));
    handleClose();
    navigate(`/${value}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input required value={value} onChange={handleChange} />
      <Button type="submit">add</Button>
    </Form>
  );
};

export default CategoryModalForm;
