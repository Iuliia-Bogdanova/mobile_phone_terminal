import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
    width: 160px;
    height: 160px;
    margin: 10px;
    padding: 20px;
    border: 2px solid #c6c1b7;
    box-shadow: 0px 5px 10px rgba(19, 27, 44, 0.5);
    border-radius: 10px;
    text-align: center;
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }

    @media (max-width: 768px) {
        width: 230px;
        height: 230px;
    }

    @media (max-width: 566px) {
        width: 160px;
        height: 160px;
    }

    @media (max-width: 452px) {
        width: 230px;
        height: 230px;
    }
`;

const Card = ({ logo, alt }) => {
    return (
        <StyledCard>
            <img src={logo} alt={alt} />
        </StyledCard>
    );
}

export default Card