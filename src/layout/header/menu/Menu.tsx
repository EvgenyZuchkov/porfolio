import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Menu = () => {

    const itemsLinks = [
        'Home',
        'About',
        'Tech Stack',
        'Projects',
        'Contact',
    ]

    return (
        <StyledNav>
            <NavList>
                <FlexWrapper gap={'82px'} >
                    {itemsLinks.map(link => (
                        <Item key={link}><Link href="#">{link}</Link></Item>
                    ))}
                </FlexWrapper>
            </NavList>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    
    @media ${theme.media.tablet} {
        display: none;
    }
`

const NavList = styled.ul`
    list-style: none;
`

const Item = styled.li`
`

const Link = styled.a`

`