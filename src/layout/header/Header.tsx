import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Link} from "../../components/link/Link.tsx";


export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <StyledLinksContainer>
                <Link iconId={'icon-github-darkgray'}/>
                <Link iconId={'icon-twitter-darkgray'}/>
                <Link iconId={'icon-linkedin'}/>
            </StyledLinksContainer>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: cadetblue;
    display: flex;
    justify-content: space-between;
`

const StyledLinksContainer = styled.div`
display: flex;
gap: 20px
`