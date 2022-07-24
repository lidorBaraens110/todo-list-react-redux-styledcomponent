import { FC, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CategoriesList from "../../component/CategoriesList";
import Layout from "../../component/Layout";
import { ICategory } from "../../interface";
import { RootState } from "../../redux/store";

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
      {currentCategory ? (
        <div>
          id: {currentCategory.id} name: {currentCategory.name}
          {/* </div>
      <div> */}
          hello category this is your category name : <h1> {params.name}</h1>
        </div>
      ) : (
        <div>
          this route not exist please choose of your own category or add a new
          one
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
