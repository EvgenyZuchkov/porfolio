import styled, {css} from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";


export const MobileMenu = () => {

    const itemsLinks = [
        'Home',
        'About',
        'Tech Stack',
        'Projects',
        'Contact',
    ]

    return (
        <StyledNav>

            <BurgerBtn isOpen={true}>
                {/*<Icon iconId={props.isOpen ? 'close' : 'menu'}/>*/}
            </BurgerBtn>

            <MobileMenuPopup isOpen={true}>
                <NavList>
                    <FlexWrapper flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={'54px'}>
                        {itemsLinks.map(link => (
                            <Item key={link}><Link href="#">{link}</Link></Item>
                        ))}
                    </FlexWrapper>
                </NavList>
            </MobileMenuPopup>

        </StyledNav>
    );
};

const StyledNav = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        //display: block;
    }
`

const BurgerBtn = styled.div<{ isOpen: boolean }>`
    width: 200px;
    height: 200px;
    position: fixed;
    top: -100px;
    right: -100px;


`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    background-color: rgba(31, 30, 30, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`

const NavList = styled.ul`
    list-style: none;
`

const Item = styled.li`
`

const Link = styled.a`

`