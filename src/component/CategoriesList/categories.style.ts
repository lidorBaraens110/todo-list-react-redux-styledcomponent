import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  border-top: 1px solid black;
`;

export const ListItem = styled.li`
  text-align: center;
  padding: 10px;
  list-style-type: none;
  font-size: 24px;
  border-bottom: 1px solid black;
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  color: blue;
  border-bottom: 1px solid black;
  width: 100%;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: blue;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 2px solid black;
  min-height: 100vh;
`;
export const H1Center = styled.h1`
  text-align: center;
`;

export const LinkItemList = styled.a`
  text-decoration: none;
  width: 100%;
  display: block;
  color: black;
  &:hover {
    color: blue;
  }
`;
