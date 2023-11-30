import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(108, 108, 107, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Spinner = styled.div`
    width: 250px;
    height: 250px;
    border: 16px solid #e8e5de;
    border-top: 16px solid #c6c1b7;
    border-radius: 50%;
    animation: ${spin} 2s linear infinite;
`;

const LoaderComponent = () => (
    <Loader>
        <Spinner />
    </Loader>
);

export default LoaderComponent;
