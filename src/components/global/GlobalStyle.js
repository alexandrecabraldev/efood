import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body ,p, h1, h2, button, span, a {
        font-family: 'Roboto', sans-serif;
    }

`;