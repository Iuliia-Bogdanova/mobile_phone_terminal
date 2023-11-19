import React from 'react'
import "@fontsource/mulish";
import styled from "styled-components"

const StyledInput = styled.input`
    font-family: "Mulish", sans-serif;
    font-size: 22px;
    padding: 10px;
    background: inherit;
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
    }

    &:last-of-type {
        margin-bottom: 20px;
    }
`;

const Input = ({ register, type, pattern, placeholder }) => {
    let inputType = type;
    let inputPattern = pattern;

    if (type === "phone") {
        inputType = "tel";
        inputPattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    } else if (type === "payment") {
        inputType = "number";
        inputPattern = /^\d+$/; // просто числа
    }

    return (
        <StyledInput
            type={inputType}
            {...register(type, {
                required: true,
                pattern: inputPattern,
            })}
            placeholder={placeholder}
        />
    );
};

export default Input