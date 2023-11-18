import React from 'react'
import styled from 'styled-components';
import Card from './Card';

const StyledFlex = styled.div`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    align-content: center
    gap: 10px;
    padding: 30px 0;
`;

const Flex = () => {
    const cardsData = [
        { logo: "beeline.svg" },
        { logo: "MTS_logo.svg" },
        { logo: "megafon.svg" },
        { logo: "mobile.svg" },
    ];

    return (
        <StyledFlex>
            {cardsData.map((card, index) => (
                <Card key={index} logo={card.logo} />
            ))}
        </StyledFlex>
    );
}

export default Flex;