import {SocialLinks} from "../../components/SocialLinks.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {FooterNavigation} from "./footerNavigation/FooterNavigation.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {S} from "./Footer_ Styles.ts";
import * as React from "react";

export const Footer: React.FC = () => {

    const menuItems = [
        'Home',
        'About',
        'Technologies',
        'Projects',
        'Contact',
    ]

    return (
        <S.Footer>
            <Container>

                <FlexWrapper flexDirection={'column'} justifyContent={'space-between'} gap={'93px'}>

                    <S.UpBlock>
                        <FlexWrapper flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <Logo iconId={'logo-gray'}/>
                            <FlexWrapper justifyContent={'space-between'} alignItems={'center'} gap={'100px'}>
                                <S.NumberPhone href={'tel:+91 12345 09876'}>+91 12345 09876</S.NumberPhone>
                                <S.Email href={'mailto: info@example.com'}>info@example.com</S.Email>
                                <SocialLinks/>
                            </FlexWrapper>

                        </FlexWrapper>
                    </S.UpBlock>

                    <S.BottomBlock>
                        <FlexWrapper flexDirection={'row'} justifyContent={'space-between'} gap={'15px'}>
                            <FooterNavigation menuItems={menuItems}/>
                            <S.Text><span>Designed and built
                                by </span>Pavan MG <span>with</span> Love <span>& </span>Coffee</S.Text>
                        </FlexWrapper>
                    </S.BottomBlock>
                </FlexWrapper>

            </Container>
        </S.Footer>
    )
}