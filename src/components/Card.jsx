import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
    width: 160px;
    height: 160px;
    margin: 10px;
    padding: 20px;
    border: 2px solid #c6c1b7;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    text-align: center;
    transition: transform 0.5s ease;


    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`;

const Card = ({ logo, title }) => {
    return (
        <StyledCard>
            <img src={logo} alt="logo" />
            <h2>{title}</h2>
        </StyledCard>
    );
}

export default Card