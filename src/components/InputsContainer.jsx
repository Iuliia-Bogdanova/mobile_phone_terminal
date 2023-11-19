import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import Modal from "react-modal";
import "@fontsource/mulish";
import styled from "styled-components";

// Настройка стилей для модального окна
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

// Установка корневого элемента приложения для доступности
Modal.setAppElement("#root");

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
            setMessage("Оплата прошла успешно");
        } else {
            setMessage("Оплата не удалась");
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
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
                contentLabel="Modal"
            >
                <h2>{message}</h2>
                <button onClick={() => setIsOpen(false)}>Закрыть</button>
            </Modal>
        </StyledInputsContainer>
    );
};

export default InputsContainer;
