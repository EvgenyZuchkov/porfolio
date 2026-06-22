import styled from "styled-components";
import fullTime from '../../src/assets/images/full-time.png'
import intership from '../../src/assets/images/intership.png'
import {Icon} from "./icon/Icon.tsx";

type AboutItemPropsType = {
    title: string
    fullWorkTime: boolean
    company: string
    location?: string
    periodOfWork: string
}

export const AboutItem = (props: AboutItemPropsType) => {
    return (
        <div>
            <StyledFirstBlock>
                <StyledAboutTitle>{props.title}</StyledAboutTitle>
                <StyledWorkTime src={props.fullWorkTime ? fullTime : intership} width={'84px'} height={'24px'}/>
            </StyledFirstBlock>

            <StyledSecondBlock>
                <Icon iconId="icon-grid" width="12px" height="12px"/>
                <StyledText>{props.company}</StyledText>

                <Icon iconId="icon-eye-small" width="12px" height="12px"/>
                <StyledText>{props.location}</StyledText>

                <Icon iconId="icon-table" width="16px" height="12px"/>
                <StyledText>{props.periodOfWork}</StyledText>
            </StyledSecondBlock>
        </div>
    )
}

const StyledAboutTitle = styled.h3`
`

const StyledWorkTime = styled.img`
`

const StyledFirstBlock = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledSecondBlock = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledText = styled.p``