import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const FooterNavigation = () => {
    return (
        <StylesFooterNavigation>
            <FooterNavList>
                <FlexWrapper flexDirection={'row'}  gap={'52px'}>
                    <Item><Link href={'#'}>Home</Link></Item>
                    <Item><Link href={'#'}>About</Link></Item>
                    <Item><Link href={'#'}>Technologies</Link></Item>
                    <Item><Link href={'#'}>Projects</Link></Item>
                    <Item><Link href={'#'}>Contact</Link></Item>
                </FlexWrapper>
            </FooterNavList>
        </StylesFooterNavigation>


    )
}

const StylesFooterNavigation = styled.nav`
    margin-bottom: 61px;
`

const FooterNavList = styled.ul`
`

const Item = styled.li`
`

const Link = styled.a`

`