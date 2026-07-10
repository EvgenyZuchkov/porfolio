import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

export const FooterNavigation = () => {

    const itemsLinks = [
        'Home',
        'About',
        'Technologies',
        'Projects',
        'Contact',
    ]

    return (
        <StylesFooterNavigation>
            <NavList>

                    {itemsLinks.map(item => (
                        <Item key={item}><Link href={'#'}>{item}</Link></Item>
                    ))}

            </NavList>
        </StylesFooterNavigation>


    )
}

const StylesFooterNavigation = styled.nav`
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