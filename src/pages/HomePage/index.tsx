import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CategoriesList from "../../component/CategoriesList";
import Layout from "../../component/Layout";
import Modal from "../../component/ModalCatrgory";
import Todo from "../../component/Todo";
import { removeCategory } from "../../redux/feature/category.slice";
import { RootState } from "../../redux/store";
import {
  AnimationDash,
  ButtonDelete,
  H1HomePage,
  H1Layout,
  WrapTodoContainer,
} from "./home.style";

const HomePage: FC = () => {
  const params = useParams();
  console.log(params.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentCategory = useSelector(
    (state: RootState) =>
      state.cateogry.filter((category) => {
        return category.id === params.id;
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
        {params.id !== undefined ? (
          currentCategory ? (
            <>
              <H1HomePage> {params.name}</H1HomePage>
              <Todo
                categoryName={currentCategory.name}
                categoryId={currentCategory.id}
                todos={currentCategory.todos}
              />
              <ButtonDelete onClick={deleteCategory}>
                delete category
              </ButtonDelete>
            </>
          ) : (
            <>
              <h1>Hello,</h1>
              <p>
                this route not exist please choose of your own category or add a
                new one
              </p>
              <AnimationDash>
                <span>{"<"}</span>
                <span>-</span>
                <span>-</span>
                <span>-</span>
              </AnimationDash>
            </>
          )
        ) : (
          <>
            <h1>Hello User,</h1>
            <p>
              Please Choose One Of Your Category Or Create New One To Get
              Started
            </p>
            <AnimationDash>
              <span>{"<"}</span>
              <span>-</span>
              <span>-</span>
              <span>-</span>
            </AnimationDash>
          </>
        )}
      </WrapTodoContainer>
    </Layout>
  );
};

export default HomePage;
