import { FC, MouseEvent } from "react";
import CategoryModalForm from "../Forms/CategoryModalForm";
import { Container, ExitButton, Header, Model } from "./ModalCategory.style";

interface IModalProps {
  handleClose: (flag: boolean) => void;
  show: boolean;
}

const Modal: FC<IModalProps> = ({ handleClose, show }) => {
  const sendNo = () => handleClose(false);

  const handleClicked = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();

  return (
    <Model show={show} onClick={() => sendNo()}>
      <Container onClick={(e) => handleClicked(e)}>
        <ExitButton onClick={sendNo}>X</ExitButton>
        <Header>insert new category name</Header>
        <CategoryModalForm handleClose={sendNo} />
      </Container>
    </Model>
  );
};

export default Modal;
