import styled from "styled-components";

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
                {itemsLinks.map(link => (
                    <Item key={link}><Link href="#">{link}</Link></Item>
                ))}
            </NavList>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    ul {
        display: flex;
        gap: 54px;
        list-style: none;
    }
`

const NavList = styled.ul`
`

const Item = styled.li`
`

const Link = styled.a`

`