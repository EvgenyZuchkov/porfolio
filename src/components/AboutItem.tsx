import styled from "styled-components";
import {Icon} from "./icon/Icon.tsx";
import {FlexWrapper} from "./FlexWrapper.tsx";

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

            <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
                <FlexWrapper flexDirection={'row'} justifyContent={'space-between'} alignItems={"center"} gap={'5px'}>
                    <Icon iconId="icon-grid" width="12px" height="12px"/>
                    <Text>{props.company}</Text>
                </FlexWrapper>

                <FlexWrapper gap={'200px'}>
                    {props.location && (
                        <FlexWrapper flexDirection={'row'} justifyContent={'space-between'} alignItems={"center"}
                                     gap={'5px'}>
                            <Icon iconId="icon-eye-small" width="12px" height="12px"/>
                            <Text>{props.location}</Text>
                        </FlexWrapper>
                    )}

                    <FlexWrapper gap={'5px'} alignItems={"center"}>
                        <FlexWrapper flexDirection={'row'} justifyContent={'space-between'} alignItems={"center"}>
                            <Icon iconId="icon-table" width="16px" height="12px"/>
                        </FlexWrapper>

                        <Text>{props.periodOfWork}</Text>
                    </FlexWrapper>
                </FlexWrapper>


            </FlexWrapper>

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
    align-items: center;
    margin-bottom: 4px;
`

const Text = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 2.33333;
    letter-spacing: 0.08em;
`