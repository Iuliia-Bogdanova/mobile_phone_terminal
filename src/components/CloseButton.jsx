import React from 'react'
import styled from "styled-components"
import close from "/close.svg"

const StyledCloseButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    margin-bottom: 20px;
    outline: none;
    font-size: 24px;
    transition: all 0.5s ease;

    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`;

const CloseButton = ({ onRequestClose }) => {
    return (
        <StyledCloseButton onClick={onRequestClose}>
            <img src={close} />
        </StyledCloseButton>
    );
};

export default CloseButton