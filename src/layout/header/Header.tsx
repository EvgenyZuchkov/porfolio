import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {SocialLinks} from "../../components/SocialLinks.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Theme} from "../../styles/Theme.ts";


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
                    <Logo iconId={'logo'}/>
                    <FlexWrapper justifyContent={"space-between"} alignItems={"center"} gap={'51px'}>
                        <Menu/>
                        <SocialLinks/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>

    );
};

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9999;
    background-color: ${Theme.colors.background}
`