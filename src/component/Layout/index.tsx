import { FC, ReactNode } from "react";
import { H1Layout, LayoutContainer, WrapLayout } from "./Layout.style";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <WrapLayout>
      <H1Layout>Todo List</H1Layout>
      <LayoutContainer>{children}</LayoutContainer>
    </WrapLayout>
  );
};

export default Layout;
