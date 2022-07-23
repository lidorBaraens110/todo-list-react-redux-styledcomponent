import { FC } from "react";
import { useParams } from "react-router-dom";

const Category: FC = () => {
  let params = useParams();
  
  return (
    <div>
      hello category this is your category name : <h1> {params.id}</h1>
    </div>
  );
};

export default Category;
