import styled from "styled-components";

export const WrapTodoContainer = styled.div`
  text-align: center;
  padding-top: 20px;
  position: relative;
`;

export const ButtonDelete = styled.button`
  position: absolute;
  bottom: 50px;
  right: 50px;
  padding: 5px 10px;
  background-color: transparent;
  color: palevioletred;
  border: 1px solid palevioletred;
  cursor: pointer;
  :hover {
    background-color: palevioletred;
    color: white;
  }
`;
