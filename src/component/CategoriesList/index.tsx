import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toggleModal } from "../../redux/feature/categoryModal.slice";
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
  // const [modalStatus, setModalStatus] = useState(false);

  const params = useParams();
  const dispatch = useDispatch();
  // const show= useSelector((state:RootState)=>state.categoryModal)
  const categoriesList = useSelector((state: RootState) => state.cateogry);

  const handleClose = (flag: boolean) => {
    dispatch(toggleModal(flag));
  };

  return (
    <ListContainer>
      <H1Center>categories</H1Center>
      <List>
        {categoriesList.map((category, i) => {
          return (
            <ListItem key={i} isActive={params.name === category.name}>
              <LinkItemList
                href={`/${category.name}`}
                isActive={params.name === category.name}
              >
                {category.name}
              </LinkItemList>
            </ListItem>
          );
        })}
        <Button onClick={() => handleClose(true)}>add category</Button>
      </List>
    </ListContainer>
  );
};

export default CategoriesList;
