import React from 'react'
import styled from 'styled-components'
// import bg from '/bg3.jpg'
import Title from './components/Title';

const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    background: #6c6c6b;
`;

const App = () => {

    return (
        <AppWrapper>
            <Title>терминал оплаты мобильного телефона</Title>
        </AppWrapper>
    );
};

export default App;
