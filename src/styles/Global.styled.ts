import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme.ts";

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
        background-color: ${Theme.colors.background};
        color: ${Theme.colors.primaryText};
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

