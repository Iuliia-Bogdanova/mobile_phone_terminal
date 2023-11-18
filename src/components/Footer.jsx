import React from 'react'
import styled from "styled-components"
import "@fontsource/comfortaa"

const StyledFooter = styled.div`
    font-family: "Comfortaa", sans-serif;
    font-size: 20px;
    text-transform: lowercase;
    color: #ece4d3;
    text-align: center;
    margin: 40px 0 30px;
`;

const Footer = () => {
    return (
        <StyledFooter>© Iuliia Bogdanova, 2023</StyledFooter>
    );
}

export default Footer