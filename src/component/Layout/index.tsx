import { FC } from "react";
import Categories from "../Categories";
import TodoList from "../TodoList";
import { LayoutContainer } from "./Layout.style";

const Layout: FC = () => {
  return (
    <LayoutContainer>
      <Categories categoryList={["xx", "ll"]} />
      <TodoList />
    </LayoutContainer>
  );
};

export default Layout;
