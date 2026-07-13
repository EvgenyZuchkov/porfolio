import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

const Header = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
    background-color: ${theme.colors.background};
    padding: 30px 0;
`

const BurgerBtn = styled.button`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
        color: ${theme.colors.primaryText}
    }
`



export const S = {
    Header,
    BurgerBtn,
}