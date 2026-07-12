import styled from "styled-components";
import {Icon} from "./icon/Icon.tsx";
import {FlexWrapper} from "./FlexWrapper.tsx";
import {theme} from "../styles/Theme.ts";
import {font} from "../styles/Common.ts";

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