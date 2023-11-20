import React from "react";
import Modal from "react-modal";
import "@fontsource/comfortaa";
import styled, { keyframes } from "styled-components";
import CloseButton from "./CloseButton";

const ModalPopup = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100%) translate(-50%, -50%);
    }
    100% {
        opacity: 1;
        transform: translateY(0) translate(-50%, -50%);
    }
`;

const StyledModal = styled(Modal)`
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    position: absolute;
    width: 50%;
    max-width: 600px;
    height: 50vh;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    padding: 40px;
    font-family: "Comfortaa", sans-serif;
    font-size: 22px;
    text-transform: lowercase;
    color: #e8e5de;
    background: #8b8988;
    outline: none;
    border: 2px solid #c6c1b7;
    box-shadow: 0px 5px 10px rgba(19, 27, 44, 0.5);
    border-radius: 10px;
    animation: ${ModalPopup} 0.5s ease-in-out;
`;

Modal.setAppElement("#root");

const ModalComponent = ({ isOpen, onRequestClose, message }) => {
    return (
        <StyledModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Modal"
        >
            <CloseButton onRequestClose={onRequestClose} />
            <h2>{message}</h2>
        </StyledModal>
    );
};

export default ModalComponent;
