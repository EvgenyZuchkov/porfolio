import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";


export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 300 ? setShowBtn(true) : setShowBtn(false)
        })
    })

    return (
        <>
            {showBtn && (
                <Link href={'#home'}>
                    <StyledGoTopBtn>
                        <Icon iconId={'icon-go-to-top'} width={'30px'} height={'30px'} viewBox={'0 0 30 30'}/>
                    </StyledGoTopBtn>
                </Link>
            )}
        </>


    )
}

const Link = styled.a``

const StyledGoTopBtn = styled.button`
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 60px;
    border-radius: 10px;
`