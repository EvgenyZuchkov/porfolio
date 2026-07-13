import * as React from "react";
import {S} from "../Footer_ Styles";

export const FooterNavigation: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.FooterNavigation>
            <S.NavList>

                {props.menuItems.map((item, index) => (
                    <S.Item key={index}><S.Link href={'#'}>{item}</S.Link></S.Item>
                ))}

            </S.NavList>
        </S.FooterNavigation>
    )
}