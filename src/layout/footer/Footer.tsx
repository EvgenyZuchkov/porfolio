import styled from "styled-components";
import {SocialLinks} from "../../components/SocialLinks.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {FooterNavigation} from "./footerNavigation/FooterNavigation.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Theme} from "../../styles/Theme.ts";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>

                <FlexWrapper flexDirection={'column'} justifyContent={'space-between'} gap={'93px'}>

                    <UpBlock>
                        <FlexWrapper flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <Logo iconId={'logo-gray'}/>
                            <NumberPhone href={'tel:+91 12345 09876'}>+91 12345 09876</NumberPhone>
                            <Email href={'mailto: info@example.com'}>info@example.com</Email>
                            <SocialLinks/>
                        </FlexWrapper>
                    </UpBlock>

                    <BottomBlock>
                        <FlexWrapper flexDirection={'row'} justifyContent={'space-between'}>
                            <FooterNavigation/>
                            <Text><span>Designed and built
                                by </span>Pavan MG <span>with</span> Love <span>& </span>Coffee</Text>
                        </FlexWrapper>
                    </BottomBlock>
                </FlexWrapper>

            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
`

const UpBlock = styled.div`
    position: relative;

    &::before {
        content: "";
        display: block;
        position: absolute;
        background: ${Theme.colors.gradient};
        width: 100%;
        height: 2px;
        bottom: -45px;
    }
`

const BottomBlock = styled.div`
`

const NumberPhone = styled.a`
`

const Email = styled.a`
`

const Text = styled.span`
    text-align: center;
    background: ${Theme.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    span {
        background: none;
        color: ${Theme.colors.primaryText};
        -webkit-text-fill-color: ${Theme.colors.primaryText};
    }
`