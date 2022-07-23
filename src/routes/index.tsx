import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../component/Layout";
import Category from "../pages/Category";

import NotFound from "../pages/NotFound";

const MainRoute: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route index element={<Layout />} />
        <Route path=":id" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
