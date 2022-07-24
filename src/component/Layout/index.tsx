import { FC, ReactNode } from "react";
import CategoriesList from "../CategoriesList";
import TodoList from "../TodoList";
import { LayoutContainer } from "./Layout.style";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
