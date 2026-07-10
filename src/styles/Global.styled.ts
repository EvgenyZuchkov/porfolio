import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.ts";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: "Poppins", sans-serif;
        background-color: ${theme.colors.background};
        color: ${theme.colors.primaryText};
    }
    
    section {
        padding: 100px 0;
        
        @media ${theme.media.tablet} {
            padding: 90px 0;
        }
        @media ${theme.media.mobile} {
            padding: 80px 0;
        }
    }

    a,
    a:visited {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
    }

`

