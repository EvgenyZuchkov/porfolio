import styled from "styled-components";
import {font} from "../../../styles/Common.ts";
import {theme} from "../../../styles/Theme.ts";

// About
const About = styled.section`
    overflow-x: clip;
`

const AboutWrap = styled.div`
    max-width: 710px;
    width: 100%;
    position: relative;

    &::before {
        content: '';
        display: block;
        position: absolute;
        width: 834px;
        height: 834px;
        background-image: url('/drawing.svg');
        background-size: contain;
        background-repeat: no-repeat;
        top: -62px;
        right: -133%;
        
    }
`

const Description = styled.p`
    ${font({lineHeight: 1.4, Fmax: 18, Fmin: 15})}
`

const AboutPart = styled.div`
`

// About Item
const AboutItem = styled.div`
    position: relative;
`

const Title = styled.h3`
    ${font({lineHeight: 1.4, letterSpacing: '0.05em', color: theme.colors.secondaryText, Fmax: 20, Fmin: 13})}
`

const WorkTime = styled.img`
`

const FirstBlock = styled.div`
    margin-bottom: 4px;
`

const SecondaryBlock = styled.div`
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background: ${theme.colors.formBorderColor};
        bottom: -25px;
    }
`

const RightBlock = styled.div`
    max-width: 450px;
    width: 100%`

const Text = styled.span`
    ${font({fontWeight: 500, lineHeight: 2.3, letterSpacing: '0.08em', Fmax: 12, Fmin: 10})}
`

const PeriodOfWork = styled.time`
    ${font({fontWeight: 500, lineHeight: 2.3, letterSpacing: '0.08em', Fmax: 12, Fmin: 10})}
`

export const S = {
    About,
    AboutWrap,
    Description,
    AboutPart,
    AboutItem,
    Title,
    WorkTime,
    FirstBlock,
    SecondaryBlock,
    RightBlock,
    Text,
    PeriodOfWork,
}