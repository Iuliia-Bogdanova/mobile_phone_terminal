import React from 'react'
import { Link } from "react-router-dom"
import Card from './Card';
import styled from "styled-components"

const StyledCardsContainer = styled.div`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    align-content: center
    gap: 10px;
    padding: 30px 0;
`;

const CardsContainer = () => {
    const cardsData = [
        { logo: "beeline.svg", alt: "Билайн" },
        { logo: "MTS_logo.svg", alt: "МТС" },
        { logo: "megafon.svg", alt: "Мегафон" },
        { logo: "mobile.svg", alt: "Твой провайдер" },
    ];

    return (
        <StyledCardsContainer>
            {cardsData.map((card, index) => (
                <Link key={`${card.logo}-${card.alt}`} to="/inputs">
                    <Card logo={card.logo} alt={card.alt} />
                </Link>
            ))}
        </StyledCardsContainer>
    );
}

export default CardsContainer;