import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../component/Layout";
import HomePage from "../pages/HomePage";
import Category from "../pages/HomePage";

import NotFound from "../pages/NotFound";

const MainRoute: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route index element={<HomePage />} />
        <Route path=":name" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
