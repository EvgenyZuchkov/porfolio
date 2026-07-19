import * as React from "react";
import {S} from "../HeaderMenu_Styles";
import type {HeaderMenuPropsType} from "../desktopMenu/DesktopMenu.tsx";

export const Menu: React.FC<HeaderMenuPropsType> = (props) => {
    return (
        <>
            {props.items.map((item) => (
                <S.Item key={item.href}>
                    <S.Link href={`#${item.href}`}>{item.title}</S.Link>
                </S.Item>
            ))}
        </>

    )
}