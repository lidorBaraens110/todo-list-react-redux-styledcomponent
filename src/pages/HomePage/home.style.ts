import styled from "styled-components";

export const WrapTodoContainer = styled.div`
  text-align: center;
  /* padding-top: 20px; */
  position: relative;
`;

export const H1HomePage = styled.h1`
  margin-top: 30px;
`;

export const H1Layout = styled.h1`
  margin: 0;
  padding: 20px 0;
  text-align: center;
  background-color: blue;
  color: white;
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

export const AnimationDash = styled.div`
  text-align: center;
  span {
    color: blue;
    font-size: 36px;
    &:not(:first-child) {
      animation: dash 6s infinite;
    }
    &:nth-child(4) {
      animation-delay: 0s;
    }
    &:nth-child(3) {
      animation-delay: 1s;
    }
    &:nth-child(2) {
      animation-delay: 2s;
    }
  }
  @keyframes dash {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`;
