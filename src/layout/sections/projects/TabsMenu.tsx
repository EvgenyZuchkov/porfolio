import * as React from "react";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import styled from "styled-components";

export const TabsMenu: React.FC<{tabs: Array<string> }> = (props: {tabs: Array<string> }) => {
    return (
        <FlexWrapper justifyContent={'center'} gap={'20px'}>
            {props.tabs.map((tab, index) => (
                <Link key={index}>{tab}</Link>
            ))}
        </FlexWrapper>
    )
}

const Link = styled.button`
`