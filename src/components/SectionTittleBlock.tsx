import {FlexWrapper} from "./FlexWrapper.tsx";
import {Description} from "./Description.tsx";
import styled from "styled-components";
import {Theme} from "../styles/Theme.ts";

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
`

const SectionTittle = styled.h2`
    font-weight: 700;
    font-size: 48px;
    line-height: 0.8;
    text-align: center;
    color: ${Theme.colors.secondaryText};
    margin-bottom: 50px;
`