import { FC } from "react";
import { Link } from "react-router-dom";
import { Container, H1, P } from "./notFound.style";

const NotFound: FC = () => {
  return (
    <Container className="container">
      <H1>Page Not Found</H1>
      <P>The page your are looking for dont exist</P>
      <Link to={"/"}>Go To Home Page</Link>
    </Container>
  );
};

export default NotFound;
