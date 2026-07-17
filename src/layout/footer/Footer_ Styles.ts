import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {font} from "../../styles/Common.ts";

// Footer
const Footer = styled.footer`
    ${font({family: '"DM Sans", sans-serif', lineHeight: 1.5, Fmax: 18, Fmin: 14})}

`

const UpBlock = styled.div`
    position: relative;

    &::before {
        content: "";
        display: block;
        position: absolute;
        background: ${theme.colors.formBorderColor};
        width: 100%;
        height: 2px;
        bottom: -45px;
    }

    @media ${theme.media.tablet} {
        ${FlexWrapper} {
            flex-direction: column;
            gap: 15px;
        }
    }
`

const BottomBlock = styled.div`
    @media ${theme.media.tablet} {
        ${FlexWrapper} {
            flex-direction: column;
        }
    }
`

const NumberPhone = styled.a`
`

const Email = styled.a`
`

const Text = styled.span`
    ${font({lineHeight: 1.45, fontWeight: 400, Fmax: 18, Fmin: 12})};
    text-align: center;
    background: ${theme.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-right: 30px;

    span {
        background: none;
        color: ${theme.colors.primaryText};
        -webkit-text-fill-color: ${theme.colors.primaryText};
    }
    
    @media ${theme.media.tablet} {
        padding: 0 0 25px;
    }
`

// Footer Navigation
const FooterNavigation = styled.nav`
    margin-bottom: 61px;
`

const NavList = styled.ul`
    display: flex;
    gap: 52px;


    @media ${theme.media.tablet} {
        gap: unset;
        justify-content: center;
    }
`

const Item = styled.li`
    flex-grow: 1;
`

const Link = styled.a`
    display: flex;
    justify-content: center;
`

export const S = {
    Footer,
    UpBlock,
    BottomBlock,
    NumberPhone,
    Email,
    Text,
    FooterNavigation,
    NavList,
    Item,
    Link,
}