import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";

// Menu
const Item = styled.li`
`

const Link = styled.a`

`

// DesktopMenu
const Nav = styled.nav`

`

const NavList = styled.ul`
    list-style: none;

    ${FlexWrapper} {
        @media ${theme.media.desktop} {
            gap: 30px;
        }
    }

`

const DesktopMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 51px;

    @media ${theme.media.tablet} {
        display: none;
    }
`

// Mobile menu
const NavMobile = styled.nav`
    //display: none;

    @media ${theme.media.tablet} {
        //display: block;
    }
`

const BurgerBtn = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: 30px;
    right: 20px;
    z-index: 1001;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    color: ${theme.colors.primaryText};
    cursor: pointer;
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    background-color: rgba(31, 30, 30, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: none;;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`

export const S = {
    Item,
    Link,
    Nav,
    NavList,
    DesktopMenu,
    NavMobile,
    BurgerBtn,
    MobileMenuPopup,

}