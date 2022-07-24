import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";

const MainRoute: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path=":id" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
