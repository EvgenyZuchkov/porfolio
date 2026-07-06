import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Theme} from "../../../styles/Theme.ts";
import {SectionTittleBlock} from "../../../components/SectionTittleBlock.tsx";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    <SectionTittleBlock tittle={'Contacts'} marginBottom={'50px'}/>
                    <StyledForm>
                        <Field placeholder={'Enter your name...'}/>
                        <Field placeholder={'Enter your email...'}/>
                        <Field placeholder={'Enter your message...'} as={'textarea'}/>
                        <Button type={'submit'}>Send message</Button>
                    </StyledForm>
                </FlexWrapper>

            </Container>

        </StyledContacts>
    )
}

const StyledContacts = styled.section`
    textarea {
        resize: none;
        height: 155px;
    }
`

const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Field = styled.input`
    width: 100%;
    background: ${Theme.colors.backgroundInput};
    border: 1px solid ${Theme.colors.formBorderColor};
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: ${Theme.colors.formFontColor};
    padding: 7px 15px;

    &::placeholder {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 12px;
        letter-spacing: 0.05em;
        color: ${Theme.colors.formFontColor};
        text-transform: capitalize;
    }

    &:focus-visible {
        outline: 1px solid ${Theme.colors.formBorderColor};;
    }
`

const Button = styled.button`
    width: 150px;
    padding: 5px 10px;
    margin: 0 auto;
    color: ${Theme.colors.secondaryText};
    background-color: ${Theme.colors.backgroundInput};
    border: 1px solid ${Theme.colors.formBorderColor};
    border-radius: 3px;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
`