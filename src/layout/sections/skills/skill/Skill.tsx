import {Icon} from "../../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.ts";
import * as React from "react";

export const Skill: React.FC<{ iconId: string }> = (props: { iconId: string }) => {
    return (

        <FlexWrapper justifyContent={'center'} alignItems={'center'} grow={1}>
            <Icon iconId={props.iconId} width={'120px'} height={'120px'} viewBox={'0 0 120 120'}/>
        </FlexWrapper>
    )
}