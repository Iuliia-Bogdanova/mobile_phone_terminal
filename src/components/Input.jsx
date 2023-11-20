import React, { useState } from "react"
import { useForm } from "react-hook-form"
import "@fontsource/mulish"
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
    text-align: center;
    color: #171a21;

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

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        background-color: inherit;
        margin: 0;
    }
`;

const Input = ({ register, type, pattern, placeholder }) => {
    let inputType = type;
    let inputPattern = pattern;

    const [value, setLocalValue] = useState("");
    const { setValue } = useForm();

    const handleInputChange = (event) => {
        let newValue = event.target.value.replace(/\D/g, "");

        if (type === "phone") {
            if (newValue.length <= 3) {
                newValue = `(${newValue}`;
            } else if (newValue.length <= 6) {
                newValue = `(${newValue.slice(0, 3)}) ${newValue.slice(3)}`;
            } else if (newValue.length <= 8) {
                newValue = `(${newValue.slice(0, 3)}) ${newValue.slice(
                    3,
                    6
                )}-${newValue.slice(6)}`;
            } else if (newValue.length <= 10) {
                newValue = `(${newValue.slice(0, 3)}) ${newValue.slice(
                    3,
                    6
                )}-${newValue.slice(6, 8)}-${newValue.slice(8)}`;
            }
        }

        if (type === "payment") {
            newValue = Math.min(newValue, 1000); 
        }

        setLocalValue(newValue);
        setValue(type, newValue);
    };

    if (type === "phone") {
        inputType = "tel";
        inputPattern = /^\(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    } else if (type === "payment") {
        inputType = "number";
        inputPattern = /^\d+$/;
    }

    return (
        <StyledInput
            type={inputType}
            {...register(type, {
                required: true,
                pattern: inputPattern,
            })}
            placeholder={placeholder}
            onChange={handleInputChange}
            value={value}
            maxLength={15}
            inputMode="numeric"
        />
    );
};

export default Input;


