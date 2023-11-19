import React from 'react'
import { useForm } from "react-hook-form"
import Input from './Input'
import Button from './Button'
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
                    <Input register={register} type="phone" placeholder="+7" />
                </StyledLabel>
                <StyledLabel>
                    Сумма оплаты
                    <Input
                        register={register}
                        type="payment"
                        placeholder="от 1 до 1000 руб."
                    />
                </StyledLabel>
                <Button type="submit" onClick={handleSubmit(onSubmit)}>
                    Оплатить
                </Button>
                <Button
                    type="button"
                    onClick={() => (window.location.href = "/")}
                >
                    На главную
                </Button>
            </StyledForm>
        </StyledInputsContainer>
    );
}

export default InputsContainer