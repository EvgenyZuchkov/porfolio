import styled from "styled-components";
import {SectionTittle} from "../../../components/SectionTittle.tsx";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTittle>Contacts</SectionTittle>
            <StyledForm>
                <Field placeholder={'Enter your name...'}/>
                <Field placeholder={'Enter your email...'}/>
                <Field placeholder={'Enter your message...'} as={'textarea'}/>
                <Button type={'submit'}>Send message</Button>
            </StyledForm>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
`

const StyledForm = styled.form`
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;


`

const Field = styled.input`
`

const Button = styled.button`
    max-width: 150px;
    margin: 0 auto;
`