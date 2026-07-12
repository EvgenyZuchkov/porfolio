import {theme} from "../../../../styles/Theme.ts";
import styled from "styled-components";
import {font} from "../../../../styles/Common.ts";

type AboutSectionTitleProps = {
    title: string;
    margin?: string
}

type StyledSectionTittleProps = {
    margin?: string
}
export const AboutSectionTitle = (props: AboutSectionTitleProps) => (
    <StyledSectionTitle margin={props.margin}>
        {props.title}
    </StyledSectionTitle>
)

const StyledSectionTitle = styled.h2<StyledSectionTittleProps>`
    ${font({
        fontWeight: 700,
        lineHeight: 1.23,
        letterSpacing: '-0.01em',
        color: theme.colors.secondaryText,
        Fmax: 42,
        Fmin: 27
    })}
    margin: ${props => props.margin || '38px 0'};
`