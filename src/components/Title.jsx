import React from 'react'
import styled from 'styled-components'
import "@fontsource/comfortaa";

const StyledTitle = styled.h1`
    font-family: "Comfortaa", sans-serif;
    font-size: 50px;
    text-transform: lowercase;
    color: #c6c1b7;
    text-align: center;
`;

const Title = () => {
    return (
        <StyledTitle>
            терминал оплаты мобильного телефона
        </StyledTitle>
    );
}

export default Title;
