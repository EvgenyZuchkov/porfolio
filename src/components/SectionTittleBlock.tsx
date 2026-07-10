import {FlexWrapper} from "./FlexWrapper.tsx";
import {Description} from "./Description.tsx";
import styled from "styled-components";
import {theme} from "../styles/Theme.ts";
import {font} from "../styles/Common.ts";

type SectionTitleBlockProps = {
    tittle: string;
    text?: string;
    marginBottom?: string
}

export const SectionTittleBlock = (props: SectionTitleBlockProps) => {
    return (
        <StyledSectionTitleBlock $marginBottom={props.marginBottom}>
            <FlexWrapper flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                <SectionTittle>{props.tittle}</SectionTittle>
                {props.text && <Description>{props.text}</Description>}
            </FlexWrapper>
        </StyledSectionTitleBlock>

    )
}

const StyledSectionTitleBlock = styled.div<{ $marginBottom?: string }>`
    margin-bottom: ${props => props.$marginBottom || '120px'};
    
    @media ${theme.media.tablet} {
        margin-bottom: 70px;
    }
    @media ${theme.media.mobile} {
        margin-bottom: 40px;
    }
    
`

const SectionTittle = styled.h2`
    ${font({fontWeight: 700, lineHeight: 0.8, color: theme.colors.secondaryText, Fmax: 48, Fmin: 30})}
    text-align: center;
    margin-bottom: 50px;
    
    @media ${theme.media.mobile} {
        margin-bottom: 20px;
    }
`