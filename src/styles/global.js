import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: sans-serif;
    }

    body {
        width: 100vw;
        background: ${props => props.theme.colors.primary};
    }

    #root {
        width: 100%;
        max-width: 100vw;
        padding: 0;
    }
`;
