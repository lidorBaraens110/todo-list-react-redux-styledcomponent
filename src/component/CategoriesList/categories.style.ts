import styled from "styled-components";

interface LiProps {
  isActive: boolean;
}

interface AProps {
  isActive: boolean;
}

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  border-top: 1px solid black;
`;

export const ListItem = styled.li<LiProps>`
  text-align: center;
  padding: 10px;
  list-style-type: none;
  font-size: 24px;
  border-bottom: 1px solid black;
  background-color: ${(props) => (props.isActive ? "blue" : "transparent")};
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  color: green;
  border-bottom: 1px solid green;
  border-top: 1px solid green;
  background-color: transparent;
  width: 100%;
  font-size: 24px;
  cursor: pointer;
  margin-top: 60px;
  &:hover {
    color: white;
    background-color: green;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 2px solid black;
  min-height: calc(100vh - 78px);
`;
export const H1Center = styled.h1`
  text-align: center;
`;

export const LinkItemList = styled.a<AProps>`
  text-decoration: none;
  width: 100%;
  display: block;
  color: ${(props) => (props.isActive ? "white" : "black")};
  &:hover {
    color: ${(props) => (props.isActive ? "white" : "blue")};
  }
`;
