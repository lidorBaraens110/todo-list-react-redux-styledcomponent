import styled from "styled-components";

interface ModalProps {
  show: boolean;
}

export const Model = styled.div<ModalProps>`
  z-index: auto;
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  text-align: center;
  position: fixed;
  background: white;
  width: 33%;
  height: auto;
  top: 50%;
  left: 50%;
  min-height: 20vh;
  padding: 20px;
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 139, 0.7);
`;

export const Header = styled.header`
  font-size: 24px;
`;

export const Form = styled.form`
  margin: 20%;
  display: flex;
  flex-direction: row;
`;
export const Button = styled.button`
  font-size: 16px;
  background-color: blue;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  color: white;
  cursor: pointer;
`;

export const Input = styled.input`
  padding: 2px;
  margin-right: 10px;
  font-size: 16px;
  flex: 1;
  border: none;
  outline: none;
  border-bottom: 1px solid gray;
  background-color: transparent;
`;

export const ExitButton = styled.button`
  background-color: white;
  padding: 10px;
  cursor: pointer;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
`;
