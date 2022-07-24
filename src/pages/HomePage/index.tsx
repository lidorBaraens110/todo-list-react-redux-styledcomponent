import { FC, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CategoriesList from "../../component/CategoriesList";
import Layout from "../../component/Layout";
import TodoList from "../../component/Todo";
import { ICategory } from "../../interface";
import { RootState } from "../../redux/store";
import { WrapTodoContainer } from "./home.style";

const HomePage: FC = () => {
  let params = useParams();
  const navigate = useNavigate();
  const currentCategory = useSelector(
    (state: RootState) =>
      state.cateogry.filter((category) => {
        return category.name === params.name;
      })[0]
  );

  return (
    <Layout>
      <CategoriesList />
      <WrapTodoContainer>
        {currentCategory ? (
          <>
            <h1> {params.name}</h1>
            <TodoList
              categoryId={currentCategory.id}
              todos={currentCategory.todos}
            />
          </>
        ) : (
          <div>
            this route not exist please choose of your own category or add a new
            one
          </div>
        )}
      </WrapTodoContainer>
    </Layout>
  );
};

export default HomePage;
