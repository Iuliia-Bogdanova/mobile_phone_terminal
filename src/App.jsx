import React from 'react'
import styled from 'styled-components'
import Title from './components/Title';
import Flex from './components/Flex';

const AppWrapper = styled.div`
    width: 100%;
    max-width: 800px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 20px;
`;

const App = () => {

    return (
        <AppWrapper>
            <Title />
            <Flex></Flex>
        </AppWrapper>
    );
};

export default App;
