import {Theme} from "../../../../styles/Theme.ts";
import styled from "styled-components";

type AboutSectionTitleProps = {
    title: string;
}
export const AboutSectionTitle = (props: AboutSectionTitleProps) => (
    <StyledSectionTittle>
        {props.title}
    </StyledSectionTittle>
)

const StyledSectionTittle = styled.h2`
    font-weight: 700;
    font-size: 42px;
    line-height: 1.2381;
    letter-spacing: -0.01em;
    color: ${Theme.colors.secondaryText};
    margin: 38px 0;
`