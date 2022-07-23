import { FC, FormEvent, MouseEvent } from "react";
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
  const sendYes = () => handleClose(true);

  const sendNo = () => handleClose(false);

  const handleClicked = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <Model show={show} onClick={() => sendNo()}>
      <Container onClick={(e) => handleClicked(e)}>
      <ExitButton onClick={sendNo}>X</ExitButton>
        <Header>insert new category name</Header>
        <Form onSubmit={handleSubmit}>
          <Input />
          <Button type="submit">add</Button>
        </Form>
      </Container>
    </Model>
  );
};

export default Modal;
