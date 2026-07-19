import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {SectionTittleBlock} from "../../../components/SectionTittleBlock.tsx";
import * as React from "react";
import {S} from "./Contacts_Styles.ts";

export const Contacts: React.FC = () => {
    return (
        <S.Contacts id={'contact'}>
            <Container>
                <FlexWrapper flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    <SectionTittleBlock tittle={'Contacts'} marginBottom={'50px'}/>
                    <S.Form>
                        <S.Field placeholder={'Enter your name...'}/>
                        <S.Field placeholder={'Enter your email...'}/>
                        <S.Field placeholder={'Enter your message...'} as={'textarea'}/>
                        <S.Button type={'submit'}>Send message</S.Button>
                    </S.Form>
                </FlexWrapper>

            </Container>

        </S.Contacts>
    )
}