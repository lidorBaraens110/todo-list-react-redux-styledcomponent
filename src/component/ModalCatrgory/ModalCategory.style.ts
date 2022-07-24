import styled from "styled-components";

interface ModalProps {
  show: boolean;
}

export const Model = styled.div<ModalProps>`
  z-index: 10;
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

export const ExitButton = styled.button`
  background-color: white;
  padding: 10px;
  cursor: pointer;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
`;
