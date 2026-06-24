import {Icon} from "../icon/Icon.tsx";

type LogoPropsType = {
    iconId: string,
}

export const Logo = (props: LogoPropsType) => {
    return (
        <a href="">
            <Icon iconId={props.iconId} width={'97px'} height={'59px'}/>
        </a>
    );
};
