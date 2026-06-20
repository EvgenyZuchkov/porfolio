import {Icon} from "../icon/Icon.tsx";

type LinkPropsType = {
    iconId: string,
    width?: string,
    height?: string,
}

export const Link = (props: LinkPropsType) => {
    return (
        <a href="#">
            <Icon iconId={props.iconId} width={props.width} height={props.height}/>
        </a>
    )
}
