import styled from "styled-components";

export const FooterNavigation = () => {
    return (
        <StyledFooterNavigation>
            <Item><Link>Home</Link></Item>
            <Item><Link>About</Link></Item>
            <Item><Link>Technologies</Link></Item>
            <Item><Link>Projects</Link></Item>
            <Item><Link>Contact</Link></Item>
        </StyledFooterNavigation>

    )
}

const StyledFooterNavigation = styled.div`
    display: flex;
    gap: 20px
`

const Item = styled.li`
`

const Link = styled.a`
`