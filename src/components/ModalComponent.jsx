import React from "react";
import Modal from "react-modal";
import "@fontsource/comfortaa";
import styled from "styled-components"
import close from "/close.svg";

const StyledModal = styled(Modal)`
    position: absolute;
    width: 60%;
    max-width: 600px;
    height: 50vh;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    font-family: "Comfortaa", sans-serif;
    font-size: 22px;
    text-transform: lowercase;
    color: #e8e5de;
    background: #8b8988;
    outline: none;
    border: 2px solid #c6c1b7;
    box-shadow: 0px 5px 10px rgba(19, 27, 44, 0.5);
    border-radius: 10px;
`;

Modal.setAppElement("#root");

const ModalComponent = ({ isOpen, onRequestClose, message }) => {
    return (
        <StyledModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Modal"
        >
            <h2>{message}</h2>
            <button onClick={onRequestClose}>
                <img src={close} />
            </button>
        </StyledModal>
    );
};

export default ModalComponent;
