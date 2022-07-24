import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import Modal from "../ModalCatrgory";
import {
  Button,
  H1Center,
  LinkItemList,
  List,
  ListContainer,
  ListItem,
} from "./categories.style";

const CategoriesList: FC = () => {
  const [modalStatus, setModalStatus] = useState(false);

  const categoriesList = useSelector((state: RootState) => state.cateogry);

  const handleClose = (flag: boolean) => {
    setModalStatus(flag);
  };

  return (
    <>
      <Modal handleClose={handleClose} show={modalStatus} />
      <ListContainer>
        <H1Center>categories</H1Center>
        <List>
          {categoriesList.map((category, i) => {
            return (
              <ListItem key={i}>
                <LinkItemList href={`/${category.name}`}>
                  {category.name}
                </LinkItemList>
              </ListItem>
            );
          })}
          <Button onClick={() => handleClose(true)}>add category</Button>
        </List>
      </ListContainer>
    </>
  );
};

export default CategoriesList;
