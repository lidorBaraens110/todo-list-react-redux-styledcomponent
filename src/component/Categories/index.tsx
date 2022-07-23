import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../ModalCatrgory";
import {
  Button,
  H1Center,
  LinkItemList,
  List,
  ListContainer,
  ListItem,
} from "./categories.style";

interface ICategoriesProps {
  categoryList: string[];
}

const Categories: FC<ICategoriesProps> = ({ categoryList }) => {
  const [modalStatus, setModalStatus] = useState(false);

  const handleClose = (flag: boolean) => {
    setModalStatus(flag);
  };

  return (
    <>
      <Modal
        handleClose={handleClose}
        show={modalStatus}
        headerText={""}
        detailText={""}
        openPos={0}
      />
      <ListContainer>
        <H1Center>categories</H1Center>
        <List>
          {categoryList.map((category, i) => {
            return (
              <ListItem key={i}>
                <LinkItemList href={`/${category}`}>{category}</LinkItemList>
              </ListItem>
            );
          })}
          <Button onClick={() => handleClose(true)}>add category</Button>
        </List>
      </ListContainer>
    </>
  );
};

export default Categories;
