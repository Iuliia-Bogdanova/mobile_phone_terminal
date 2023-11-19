import React from 'react'
import "@fontsource/comfortaa"
import styled from "styled-components"

const StyledFooter = styled.div`
    font-family: "Comfortaa", sans-serif;
    font-size: 20px;
    text-transform: lowercase;
    color: #e8e5de;
    text-align: center;
    margin: 40px 0 30px;
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <a href="https://github.com/Iuliia-Bogdanova" target="_blank">
                © Iuliia Bogdanova, 2023
            </a>
        </StyledFooter>
    );
}

export default Footer