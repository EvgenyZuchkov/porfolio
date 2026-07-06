import styled from "styled-components";

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
`

const Item = styled.li`
`

const Link = styled.a`

`