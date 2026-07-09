import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "./menu/Menu.tsx";
import {SocialLinks} from "../../components/SocialLinks.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Theme} from "../../styles/Theme.ts";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";
import {Link} from "../../components/link/Link.tsx";


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
                    <Logo iconId={'logo'}/>
                    <FlexWrapper justifyContent={"space-between"} alignItems={"center"} gap={'51px'}>

                        <DesktopMenu>
                            <Menu/>
                            <SocialLinks/>
                        </DesktopMenu>

                        <MobileMenu/>
                        <BurgerBtn>
                            <Link iconId={'menu'}/>
                        </BurgerBtn>

                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>

    );
};

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
    background-color: ${Theme.colors.background}
`

const DesktopMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 51px;
    
    @media ${Theme.media.tablet} {
    display: none;
}
`

const BurgerBtn = styled.button`
    display: none;
    
    @media ${Theme.media.tablet} {
        display: block;
        color: ${Theme.colors.primaryText}
    }
`