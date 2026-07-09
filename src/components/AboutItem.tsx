import styled from "styled-components";
import {Icon} from "./icon/Icon.tsx";
import {FlexWrapper} from "./FlexWrapper.tsx";
import {Theme} from "../styles/Theme.ts";

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
                <FlexWrapper flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Title>{props.title}</Title>
                    <WorkTime src={props.src} width={'84px'} height={'24px'}/>
                </FlexWrapper>
            </FirstBlock>
            <SecondaryBlock>
                <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
                    <FlexWrapper flexDirection={'row'} justifyContent={'space-between'} alignItems={"center"}
                                 gap={'5px'}>
                        <Icon iconId="icon-grid" width="12px" height="12px"/>
                        <Text>{props.company}</Text>
                    </FlexWrapper>
                    <RightBlock>
                        <FlexWrapper gap={'20px'} justifyContent={props.location ? 'space-between' : 'flex-end'}
                                     alignItems={"center"}>
                            {props.location && (
                                <FlexWrapper flexDirection={'row'} justifyContent={'space-between'}
                                             alignItems={"center"}
                                             gap={'5px'}>
                                    <Icon iconId="icon-eye-small" width="12px" height="12px"/>
                                    <Text>{props.location}</Text>
                                </FlexWrapper>
                            )}

                            <FlexWrapper gap={'5px'} alignItems={"center"}>
                                <FlexWrapper flexDirection={'row'} justifyContent={'space-between'}
                                             alignItems={"center"}>
                                    <Icon iconId="icon-table" width="16px" height="12px"/>
                                </FlexWrapper>

                                <PeriodOfWork dateTime={props.periodOfWork.replace(' - ', '/')}>
                                    {props.periodOfWork}
                                </PeriodOfWork>
                            </FlexWrapper>
                        </FlexWrapper>
                    </RightBlock>

                </FlexWrapper>
            </SecondaryBlock>
        </StyledAboutItem>
    )
}

const StyledAboutItem = styled.div`
    position: relative;
`

const Title = styled.h3`
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
        background: ${Theme.colors.gradient};
        bottom: -25px;
    }
`

const RightBlock = styled.div`
    max-width: 450px;
    width: 100%`

const Text = styled.span`
    font-weight: 500;
    font-size: 12px;
    line-height: 2.33333;
    letter-spacing: 0.08em;
`

const PeriodOfWork = styled.time`
`