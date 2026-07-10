import {theme} from "../../../../styles/Theme.ts";
import styled from "styled-components";
import {font} from "../../../../styles/Common.ts";

type AboutSectionTitleProps = {
    title: string;
}
export const AboutSectionTitle = (props: AboutSectionTitleProps) => (
    <StyledSectionTittle>
        {props.title}
    </StyledSectionTittle>
)

const StyledSectionTittle = styled.h2`
    ${font({fontWeight: 700, lineHeight: 1.23, letterSpacing: '-0.01em', color: theme.colors.secondaryText, Fmax: 42, Fmin: 27})}
    margin: 38px 0;
`