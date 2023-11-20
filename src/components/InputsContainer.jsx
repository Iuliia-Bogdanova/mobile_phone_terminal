import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button"
import ModalComponent from "./ModalComponent";
import "@fontsource/mulish"
import styled from "styled-components";

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
    text-align: center;
    gap: 10px;
`;

const InputsContainer = () => {
    const { register, handleSubmit, setValue } = useForm();
    const [modalIsOpen, setIsOpen] = useState(false); // Состояние модального окна
    const [message, setMessage] = useState(""); // Сообщение для модального окна

    const onSubmit = (data) => {
        // Симулируем обработку данных формы
        const success = Math.random() > 0.5; // 50% вероятность успешной оплаты

        if (success) {
            setMessage("платеж зачислен");
        } else {
            setMessage("платеж не зачислен, попробуйте еще раз");
        }

        setIsOpen(true); // Открываем модальное окно
    };

    return (
        <StyledInputsContainer>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <StyledLabel>
                    Номер телефона
                    <Input
                        register={register}
                        type="phone"
                        placeholder="(123) 456-78-90"
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
                <Button type="submit">Оплатить</Button>
                <Button
                    type="button"
                    onClick={() => (window.location.href = "/")}
                >
                    На главную
                </Button>
            </StyledForm>
            <ModalComponent
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                message={message}
            />
        </StyledInputsContainer>
    );
};

export default InputsContainer;
