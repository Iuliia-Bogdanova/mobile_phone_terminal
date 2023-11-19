import React from 'react'
import "@fontsource/mulish";
import styled from "styled-components";

const StyledButton = styled.button`
    width: 150px;
    padding: 10px;
    font-family: "Mulish", sans-serif;
    font-size: 22px;
    text-transform: lowercase;
    color: #e8e5de;
    background: #393e48;
    outline: none;
    border: 2px solid #c6c1b7;
    box-shadow: 0px 5px 10px rgba(19, 27, 44, 0.5);
    border-radius: 10px;
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }

    &:focus {
        border-color: #747677;
        opacity: 0.5;
    }
`;

const Button = ({ type, onClick, children }) => {
    return (
        <StyledButton type={type} onClick={onClick}>
        {children}
    </StyledButton>
    );    
};

export default Button