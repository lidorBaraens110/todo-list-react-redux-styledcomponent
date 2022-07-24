import { ChangeEvent, FC, FormEvent, MouseEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../redux/feature/category.slice";
import {
  Button,
  Container,
  ExitButton,
  Form,
  Header,
  Input,
  Model,
} from "./ModalCategory.style";

interface IModalProps {
  handleClose: (flag: boolean) => void; // renderProp fn expects truthy or falsey
  show: boolean; // boolean - visible/invisible
  headerText: string; // text
  detailText: string; // html / inner text
  openPos: number;
}

const Modal: FC<IModalProps> = ({
  handleClose,
  show,
  headerText,
  detailText,
  openPos,
}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const sendYes = () => handleClose(true);
  const sendNo = () => handleClose(false);

  const handleClicked = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(createCategory(value));
    handleClose(false);
    navigate(`/${value}`);
  };

  return (
    <Model show={show} onClick={() => sendNo()}>
      <Container onClick={(e) => handleClicked(e)}>
        <ExitButton onClick={sendNo}>X</ExitButton>
        <Header>insert new category name</Header>
        <Form onSubmit={handleSubmit}>
          <Input required value={value} onChange={handleChange} />
          <Button type="submit">add</Button>
        </Form>
      </Container>
    </Model>
  );
};

export default Modal;
