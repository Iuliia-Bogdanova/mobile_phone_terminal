import React from 'react'
import styled from 'styled-components'
import Title from './components/Title';
import CardsContainer from './components/CardsContainer';
import Footer from './components/Footer';

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 900px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 20px;
`;

const App = () => {

    return (
        <AppWrapper>
            <Title />
            <CardsContainer />
            <Footer />
        </AppWrapper>
    );
};

export default App;
