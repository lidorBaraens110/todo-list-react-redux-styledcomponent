import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toggleModal } from "../../redux/feature/categoryModal.slice";
import { RootState } from "../../redux/store";
import {
  Button,
  H1Center,
  LinkItemList,
  List,
  ListContainer,
  ListItem,
} from "./categories.style";

const CategoriesList: FC = () => {
  const params = useParams();
  const dispatch = useDispatch();
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
            <ListItem key={i} isActive={params.id === category.id}>
              <LinkItemList
                href={`/${category.id}`}
                isActive={params.id === category.id}
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
