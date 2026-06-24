import styled from "styled-components";
import {SocialLinks} from "../../components/SocialLinks.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {FooterNavigation} from "./footerNavigation/FooterNavigation.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <UpBlock>
                <Logo iconId={'logo-gray'}/>
                <NumberPhone>+91 12345 09876</NumberPhone>
                <Email>info@example.com</Email>
                <SocialLinks/>
            </UpBlock>
            <BottomBlock>
                <FooterNavigation/>
                <Text>Designed and built by Pavan MG with Love & Coffee</Text>
            </BottomBlock>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
`

const UpBlock = styled.div`
    display: flex;
    justify-content: space-between`

const BottomBlock = styled.div`
    display: flex;
    justify-content: space-between
`

const NumberPhone = styled.span`
`

const Email = styled.span`
`

const Text = styled.span`
`