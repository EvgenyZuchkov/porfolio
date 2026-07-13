import {Icon} from "../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import * as React from "react";
import {S} from "./About_Styles.ts";

type AboutItemPropsType = {
    title: string
    src: string
    company: string
    location?: string
    periodOfWork: string
}

export const AboutItem: React.FC<AboutItemPropsType> = (props: AboutItemPropsType) => {
    return (
        <S.AboutItem>

            <S.FirstBlock>
                <FlexWrapper flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <S.Title>{props.title}</S.Title>
                    <S.WorkTime src={props.src} width={'84px'} height={'24px'}/>
                </FlexWrapper>
            </S.FirstBlock>
            <S.SecondaryBlock>
                <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
                    <FlexWrapper flexDirection={'row'} justifyContent={'space-between'} alignItems={"center"}
                                 gap={'5px'}>
                        <Icon iconId="icon-grid" width="12px" height="12px"/>
                        <S.Text>{props.company}</S.Text>
                    </FlexWrapper>
                    <S.RightBlock>
                        <FlexWrapper gap={'20px'} justifyContent={props.location ? 'space-between' : 'flex-end'}
                                     alignItems={"center"}>
                            {props.location && (
                                <FlexWrapper flexDirection={'row'} justifyContent={'space-between'}
                                             alignItems={"center"}
                                             gap={'5px'}>
                                    <Icon iconId="icon-eye-small" width="12px" height="12px"/>
                                    <S.Text>{props.location}</S.Text>
                                </FlexWrapper>
                            )}

                            <FlexWrapper gap={'5px'} alignItems={"center"}>
                                <FlexWrapper flexDirection={'row'} justifyContent={'space-between'}
                                             alignItems={"center"}>
                                    <Icon iconId="icon-table" width="16px" height="12px"/>
                                </FlexWrapper>

                                <S.PeriodOfWork dateTime={props.periodOfWork.replace(' - ', '/')}>
                                    {props.periodOfWork}
                                </S.PeriodOfWork>
                            </FlexWrapper>
                        </FlexWrapper>
                    </S.RightBlock>

                </FlexWrapper>
            </S.SecondaryBlock>
        </S.AboutItem>
    )
}