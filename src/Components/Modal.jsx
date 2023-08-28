import ComponentTest from "./Input";
import styled from "styled-components";

const Modal = ({ closeModal }) => {
  return (
    <ModalContainer onClick={() => closeModal()}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h1>Кастомизированная модалка</h1>
        <h2>Можно добавить что угодно</h2>
        <input type="text" style={{ width: "300px" }} />
        <div
          style={{ cursor: "pointer", color: "red" }}
          onClick={() => closeModal()}
        >
          Закрыть модалку
        </div>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
`;

const ModalContent = styled.div`
  padding: 16px ;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  z-index: 10;
  align-items: center;
  min-width: 550px;
`;
