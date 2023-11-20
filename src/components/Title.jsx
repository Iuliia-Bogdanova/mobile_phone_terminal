import React from 'react'
import styled from 'styled-components'
import "@fontsource/comfortaa"

const StyledTitle = styled.h1`
    font-family: "Comfortaa", sans-serif;
    font-size: 50px;
    text-transform: lowercase;
    color: #e8e5de;
    text-align: center;
    margin: 30px 0 40px;

    @media (max-width: 566px) {
        font-size: 40px;
    }

    @media (max-width: 452px) {
        font-size: 32px;
    }
`;

const Title = () => {
    return (
        <StyledTitle>
            терминал оплаты<br />мобильного телефона
        </StyledTitle>
    );
}

export default Title;
