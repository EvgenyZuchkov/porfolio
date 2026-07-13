import {Logo} from "../../components/logo/Logo.tsx";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu.tsx";
import {Link} from "../../components/link/Link.tsx";
import * as React from "react";
import {S} from "./Header_Styles.ts";

const items = [
    'Home',
    'About',
    'Tech Stack',
    'Projects',
    'Contact',
]

export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, [])

    return (
        <S.Header>
            <Container>
                <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
                    <Logo iconId={'logo'}/>
                    <FlexWrapper justifyContent={"space-between"} alignItems={"center"} gap={'51px'}>

                        {width < breakpoint ? <MobileMenu items={items}/> : <DesktopMenu items={items}/>}

                        <S.BurgerBtn>
                            <Link iconId={'menu'}/>
                        </S.BurgerBtn>

                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Header>

    );
};