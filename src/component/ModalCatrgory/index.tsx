import { FC, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/feature/categoryModal.slice";
import { RootState } from "../../redux/store";
import CategoryModalForm from "../Forms/CategoryModalForm";
import { Container, ExitButton, Header, Model } from "./ModalCategory.style";

const Modal: FC = () => {
  const dispatch = useDispatch();
  const show = useSelector((state: RootState) => state.categoryModal);

  const handleModal = (flag: boolean) => {
    dispatch(toggleModal(flag));
  };

  const handleClicked = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();

  return (
    <Model show={show} onClick={() => handleModal(false)}>
      <Container onClick={(e) => handleClicked(e)}>
        <ExitButton onClick={() => handleModal(false)}>X</ExitButton>
        <Header>insert new category name</Header>
        <CategoryModalForm handleClose={() => handleModal(false)} />
      </Container>
    </Model>
  );
};

export default Modal;
