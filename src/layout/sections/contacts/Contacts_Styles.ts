import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

const Contacts = styled.section`
    textarea {
        resize: none;
        height: 155px;
    }
`

const Form = styled.form`
    max-width: 540px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Field = styled.input`
    width: 100%;
    background: ${theme.colors.backgroundInput};
    border: 1px solid ${theme.colors.formBorderColor};
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: ${theme.colors.formFontColor};
    padding: 7px 15px;

    &::placeholder {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 12px;
        letter-spacing: 0.05em;
        color: ${theme.colors.formFontColor};
        text-transform: capitalize;
    }

    &:focus-visible {
        outline: 1px solid ${theme.colors.formBorderColor};;
    }
`

const Button = styled.button`
    width: 150px;
    padding: 5px 10px;
    margin: 0 auto;
    color: ${theme.colors.secondaryText};
    background-color: ${theme.colors.backgroundInput};
    border: 1px solid ${theme.colors.formBorderColor};
    border-radius: 3px;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
`

export const S = {
    Contacts,
    Form,
    Field,
    Button,
}