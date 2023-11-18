import React from 'react'
import styled from 'styled-components'
import "@fontsource/comfortaa";


const StyledTitle = styled.h1`
    font-family: "Comfortaa", sans-serif;
    font-size: 50px;
    text-transform: lowcase;
    color: #c6c1b7;
`;

const Title = ({children}) => {
    return (
        <StyledTitle>
            {children}
        </StyledTitle>
    )
}

export default Title;
