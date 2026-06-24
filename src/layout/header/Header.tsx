import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {SocialLinks} from "../../components/SocialLinks.tsx";


export const Header = () => {
    return (
        <StyledHeader>
            <Logo iconId={'logo'}/>
            <Menu/>
            <SocialLinks/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: cadetblue;
    display: flex;
    justify-content: space-between;
`