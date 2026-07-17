import {FlexWrapper} from "../../../../components/FlexWrapper.ts";
import {Menu} from "../menu/Menu.tsx";
import * as React from "react";
import {S} from "../HeaderMenu_Styles.ts";
import {Icon} from "../../../../components/icon/Icon.tsx";


export const MobileMenu: React.FC<{ items: Array<string> }> = (props: { items: Array<string> }) => {

    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const onBurgerBtnClick = () => {setMobileMenuOpen(!mobileMenuOpen);};

    return (
        <S.NavMobile>

            <S.BurgerBtn isOpen={mobileMenuOpen} onClick={onBurgerBtnClick}>
                <Icon iconId={mobileMenuOpen ? 'close' : 'menu'} width={'24px'} height={'24px'} viewBox={'0 0 24 24'}/>
            </S.BurgerBtn>

            <S.MobileMenuPopup isOpen={mobileMenuOpen} onClick={ () => {setMobileMenuOpen(false)}}>
                <S.NavList>
                    <FlexWrapper flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={'54px'}>
                        <Menu items={props.items}/>
                    </FlexWrapper>
                </S.NavList>
            </S.MobileMenuPopup>

        </S.NavMobile>
    );
};