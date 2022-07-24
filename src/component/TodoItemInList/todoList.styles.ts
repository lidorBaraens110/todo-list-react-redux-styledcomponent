import styled from "styled-components";

interface LabelProps {
  textDecoration?: number;
}

export const StyledList = styled.li`
  list-style: none;
  overflow: hidden;
  width: 100%;
  margin-bottom: 10px;
`;
export const StyledLabel = styled.label<LabelProps>`
  display: flex;
  align-items: center;
  float: left;
  cursor: pointer;
  text-decoration: ${(props) =>
    props.textDecoration ? " line-through" : "unset"};
`;
export const StyledButton = styled.button`
  float: right;
  background: palevioletred;
  color: #fff;
  border-radius: 3px;
  border: 2px solid palevioletred;
  padding: 3px 10px;
  outline: none;
  cursor: pointer;
`;
