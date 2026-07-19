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
        scroll-behavior: smooth;
            scroll-padding-top: 50px;
            
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

    a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;


        transition: all 0.35s ease;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background: #13b0f5;
            transition: width 0.35s ease;
        }

        &:hover {
            color: #13b0f5;

            &::after {
                width: 100%;
            }
        }
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

        transition: all 0.35s ease;
        position: relative;
        z-index: 1;

        &::before {
            background: #13b0f5;
        }

        &:hover {
            color: #fff;
            box-shadow: 0 8px 30px rgba(19, 176, 245, 0.3);
            border-color: #13b0f5;

        }
    }

    a:visited {
        text-decoration: none;
        color: inherit;
    }

`

