import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background: #8b8988;
        user-select: none;
    }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <Global />
        <App />
    </>
);
