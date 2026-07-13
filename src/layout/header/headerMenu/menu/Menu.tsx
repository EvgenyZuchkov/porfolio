import * as React from "react";
import {S} from "../HeaderMenu_Styles";

export const Menu: React.FC<{ items: Array<string> }> = (props: { items: Array<string> }) => {
    return (
        <>
            {props.items.map(link => (
                <S.Item key={link}><S.Link href="#">{link}</S.Link></S.Item>
            ))}
        </>

    )
}