import styled from "styled-components";
import {Icon} from "./icon/Icon.tsx";

type AboutItemPropsType = {
    title: string
    src: string
    company: string
    location?: string
    periodOfWork: string
}

export const AboutItem = (props: AboutItemPropsType) => {
    return (
        <StyledAboutItem>
            <FirstBlock>
                <Title>{props.title}</Title>
                <WorkTime src={props.src} width={'84px'} height={'24px'}/>
            </FirstBlock>

            <SecondBlock>
                <Icon iconId="icon-grid" width="12px" height="12px"/>
                <Text>{props.company}</Text>

                <Icon iconId="icon-eye-small" width="12px" height="12px"/>
                <Text>{props.location}</Text>

                <Icon iconId="icon-table" width="16px" height="12px"/>
                <Text>{props.periodOfWork}</Text>
            </SecondBlock>
        </StyledAboutItem>
    )
}

const StyledAboutItem = styled.div`
`

const Title = styled.h3`
`

const WorkTime = styled.img`
`

const FirstBlock = styled.div`
    display: flex;
    justify-content: space-between;
`

const SecondBlock = styled.div`
    display: flex;
    justify-content: space-between;
`

const Text = styled.p``