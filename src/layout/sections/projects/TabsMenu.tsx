import * as React from "react";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import styled, {css} from "styled-components";

export type TabsStatusType = 'html' | 'sass' | 'js' | 'react' | 'all'

type TabsMenuPropsType = {
    tabsItems: Array<{ status: TabsStatusType, title: string }>
    changeFilterStatus: (value: TabsStatusType) => void
    currentFilterStatus: string
}

export const TabsMenu: React.FC<TabsMenuPropsType> = (props: TabsMenuPropsType) => {
    return (
        <FlexWrapper justifyContent={'center'} gap={'20px'}>
            {props.tabsItems.map((tab, index) => (
                <Link active={props.currentFilterStatus === tab.status} key={index} onClick={() => {
                    props.changeFilterStatus(tab.status)
                }}>{tab.title}</Link>
            ))}
        </FlexWrapper>
    )
}

const Link = styled.button<{ active?: boolean }>`
    ${props => props.active && css`
        transition: all 0.35s ease;
        position: relative;
        z-index: 1;
        color: #fff;
        box-shadow: 0 8px 30px rgba(19, 176, 245, 0.3);
        border-color: #13b0f5;

        &::before {
            background: #13b0f5;
        }
    `}
`;