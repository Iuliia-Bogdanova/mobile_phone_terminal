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
        background: #939394;
        user-select: none;
    }

    a, a:link, a:visited, a:hover  {
        text-decoration: none;
        color: inherit;
    }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <Global />
        <App />
    </>
);
