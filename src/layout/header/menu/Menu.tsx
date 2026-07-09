import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Theme} from "../../../styles/Theme.ts";

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
                <FlexWrapper gap={'54px'} >
                    {itemsLinks.map(link => (
                        <Item key={link}><Link href="#">{link}</Link></Item>
                    ))}
                </FlexWrapper>
            </NavList>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    
    @media ${Theme.media.tablet} {
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