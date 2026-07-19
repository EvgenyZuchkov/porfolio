import {FlexWrapper} from "../../../../components/FlexWrapper.ts";
import {Menu} from "../menu/Menu.tsx";
import {SocialLinks} from "../../../../components/SocialLinks.tsx";
import * as React from "react";
import { S } from "../HeaderMenu_Styles.ts";

export type HeaderMenuPropsType = {items: Array<{title: string, href: string}>}


export const DesktopMenu: React.FC<HeaderMenuPropsType> = (props) => {
    return (
        <S.DesktopMenu>
            <S.Nav>
                <S.NavList>
                    <FlexWrapper gap={'82px'}>
                        <Menu items={props.items}/>
                    </FlexWrapper>
                </S.NavList>
            </S.Nav>
            <SocialLinks/>
        </S.DesktopMenu>

    );
};