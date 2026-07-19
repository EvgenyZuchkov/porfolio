import {Icon} from "../icon/Icon.tsx";
import * as React from "react";

type LogoPropsType = {
    iconId: string,
}

export const Logo: React.FC<LogoPropsType> = (props: LogoPropsType) => {
    return (
        <a href={'#home'}>
            <Icon iconId={props.iconId} width={'97px'} height={'59px'} viewBox={'0 0 97 59'}/>
        </a>
    );
};
