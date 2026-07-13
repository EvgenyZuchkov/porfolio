import {Icon} from "../icon/Icon.tsx";
import * as React from "react";

type LinkPropsType = {
    iconId: string,
    width?: string,
    height?: string,
}

export const Link: React.FC<LinkPropsType> = (props: LinkPropsType) => {
    return (
        <a href="#">
            <Icon iconId={props.iconId} width={props.width} height={props.height}/>
        </a>
    )
}
