import React from 'react'
import styled from 'styled-components'
import "@fontsource/comfortaa";

const StyledTitle = styled.h1`
    font-family: "Comfortaa", sans-serif;
    font-size: 50px;
    text-transform: lowercase;
    color: #e8e5de;
    text-align: center;
    margin: 30px 0 40px;
`;

const Title = () => {
    return (
        <StyledTitle>
            терминал оплаты<br />мобильного телефона
        </StyledTitle>
    );
}

export default Title;
