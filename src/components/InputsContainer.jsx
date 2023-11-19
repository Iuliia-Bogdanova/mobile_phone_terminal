import React from 'react'
import { useForm } from "react-hook-form"
import Input from './Input'
import "@fontsource/mulish"
import styled from "styled-components"

const StyledInputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
    padding: 30px 0;
    font-family: "Mulish", sans-serif;
    font-size: 26px;
    text-transform: lowercase;
    color: #393e48;
`;

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
`;

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

const InputsContainer = () => {
    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <StyledInputsContainer>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <StyledLabel>
                    Номер телефона
                    <Input 
                        register={register}     
                        type="phone" 
                        placeholder="+7" 
                    />
                </StyledLabel>
                <StyledLabel>
                    Сумма оплаты
                    <Input
                        register={register}
                        type="payment"
                        placeholder="от 1 до 1000 руб."
                    />
                </StyledLabel>

                <StyledButton type="submit">Оплатить</StyledButton>
                <StyledButton
                    type="button"
                    onClick={() => (window.location.href = "/")}
                >
                    На главную
                </StyledButton>
            </StyledForm>
        </StyledInputsContainer>
    );
}

export default InputsContainer