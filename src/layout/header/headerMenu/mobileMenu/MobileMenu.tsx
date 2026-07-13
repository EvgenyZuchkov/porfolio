import {FlexWrapper} from "../../../../components/FlexWrapper.ts";
import {Menu} from "../menu/Menu.tsx";
import * as React from "react";
import {S} from "../HeaderMenu_Styles.ts";


export const MobileMenu: React.FC<{ items: Array<string> }> = (props: { items: Array<string> }) => {

    return (
        <S.NavMobile>

            <S.BurgerBtn isOpen={true}>
                {/*<Icon iconId={props.isOpen ? 'close' : 'desktopMenu'}/>*/}
            </S.BurgerBtn>

            <S.MobileMenuPopup isOpen={true}>
                <S.NavList>
                    <FlexWrapper flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={'54px'}>
                        <Menu items={props.items}/>
                    </FlexWrapper>
                </S.NavList>
            </S.MobileMenuPopup>

        </S.NavMobile>
    );
};