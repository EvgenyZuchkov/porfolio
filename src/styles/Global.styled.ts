import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.ts";
import {font} from "./Common.ts";

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
        min-width: 360px;
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
        width: 150px;
        padding: 5px 10px;
        color: ${theme.colors.secondaryText};
        background-color: ${theme.colors.backgroundInput};
        border: 1px solid ${theme.colors.formBorderColor};
        border-radius: 3px;
        cursor: pointer;
        ${font({fontWeight: 400, letterSpacing: '0.05em', Fmax: 12, Fmin: 12})}
    }

`

