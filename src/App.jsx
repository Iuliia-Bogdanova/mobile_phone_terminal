import React from 'react'
import styled from 'styled-components'
import bg from '/bg5.jpg'

const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    background-image: url(${bg});
    background-size: cover;
`;

const App = () => {

    return (
        <AppWrapper>
            <h1>терминал оплаты мобильного телефона</h1>
        </AppWrapper>
    );
};

export default App;
