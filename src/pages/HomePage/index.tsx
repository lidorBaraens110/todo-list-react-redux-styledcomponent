import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CategoriesList from "../../component/CategoriesList";
import Layout from "../../component/Layout";
import Modal from "../../component/ModalCatrgory";
import TodoList from "../../component/Todo";
import { removeCategory } from "../../redux/feature/category.slice";
import { RootState } from "../../redux/store";
import { ButtonDelete, WrapTodoContainer } from "./home.style";

const HomePage: FC = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentCategory = useSelector(
    (state: RootState) =>
      state.cateogry.filter((category) => {
        return category.name === params.name;
      })[0]
  );
  const deleteCategory = () => {
    dispatch(removeCategory(currentCategory.id));
    navigate("/");
  };
  return (
    <Layout>
      <Modal />
      <CategoriesList />
      <WrapTodoContainer>
        {params.name !== undefined ? (
          currentCategory ? (
            <>
              <h1> {params.name}</h1>
              <TodoList
                categoryId={currentCategory.id}
                todos={currentCategory.todos}
              />
              <ButtonDelete onClick={deleteCategory}>
                delete category
              </ButtonDelete>
            </>
          ) : (
            <div>
              this route not exist please choose of your own category or add a
              new one
            </div>
          )
        ) : (
          <h1>
            hello my freind please choose one of your category or create new one
            to get started
          </h1>
        )}
      </WrapTodoContainer>
    </Layout>
  );
};

export default HomePage;
