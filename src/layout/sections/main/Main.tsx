import photo from "../../../assets/images/avatar/avatar.png";
import photo2x from "../../../assets/images/avatar/avatar@2.png";
import photo3x from "../../../assets/images/avatar/avatar@3.png";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import {S} from "./Main_Styles.ts";
import * as React from "react";

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper justifyContent={'center'} alignItems={'center'} height={'100%'}
                             wrap={'wrap'}>
                    <S.Title>
                        <span>Hi 👋,</span>
                        <span>My name is</span>
                        <span><span>Pavan MG</span></span>
                        I build things for web
                    </S.Title>

                    <S.PhotoWrapper>
                        <S.Photo srcSet={`${photo} 1x, ${photo2x} 2x, ${photo3x} 3x`} alt="avatar"/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};