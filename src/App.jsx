import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Title from './components/Title';
import CardsContainer from './components/CardsContainer'
import InputsContainer from './components/InputsContainer'
import Footer from "./components/Footer"
import styled from "styled-components"

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
        <Router>
            <Routes>
                <Route path="/" element={
                        <AppWrapper>
                            <Title />
                            <CardsContainer />
                            <Footer />
                        </AppWrapper>
                    }
                />
                <Route path="/inputs" element={
                        <AppWrapper>
                            <Title />
                            <InputsContainer />
                            <Footer />
                        </AppWrapper>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
