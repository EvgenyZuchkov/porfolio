import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {SectionTittleBlock} from "../../../components/SectionTittleBlock.tsx";
import * as React from "react";
import {S} from "./Contacts_Styles.ts";
import {type ElementRef, useRef} from 'react';
import emailjs from '@emailjs/browser';

export const Contacts: React.FC = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_yv3681d', 'template_3fd2a2a', form.current, {
                publicKey: 'TDb-gOzSUgB_pTuVN',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    };

    return (
        <S.Contacts id={'contact'}>
            <Container>
                <FlexWrapper flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    <SectionTittleBlock tittle={'Contacts'} marginBottom={'50px'}/>
                    <S.Form ref={form} onSubmit={sendEmail}>
                        <S.Field required placeholder={'Enter your name...'} name={'name'}/>
                        <S.Field required placeholder={'Enter your subject...'} name={'subject'}/>
                        <S.Field required placeholder={'Enter your message...'} as={'textarea'} name={'message'}/>
                        <S.Button type={'submit'}>Send message</S.Button>
                    </S.Form>
                </FlexWrapper>

            </Container>

        </S.Contacts>
    )
}