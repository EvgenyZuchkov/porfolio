import styled from "styled-components";
import photo from "../../../assets/images/avatar/avatar.png";
import photo2x from "../../../assets/images/avatar/avatar@2.png";
import photo3x from "../../../assets/images/avatar/avatar@3.png";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justifyContent={'center'} alignItems={'center'} height={'100%'}
                             wrap={'wrap'}>
                    <Title>
                        <span>Hi 👋,</span>
                        <span>My name is</span>
                        <span><span>Pavan MG</span></span>
                        I build things for web
                    </Title>

                    <PhotoWrapper>
                        <Photo srcSet={`${photo} 1x, ${photo2x} 2x, ${photo3x} 3x`} alt="avatar"/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    //min-height: 100vh;
    display: flex;
    overflow-x: clip;
    padding: 330px 0 50px;
`

const Title = styled.h1`
    flex-grow: 1;
    ${font({
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
        color: '${theme.colors.gradient}',
        Fmax: 58,
        Fmin: 35
    })}
    
    span {
        display: block;
    }
    
    span > span {
        background: ${theme.colors.gradient};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    @media ${theme.media.tablet} {
        flex-grow: unset;
    }

`

const PhotoWrapper = styled.div`
    position: relative;

    &::before {
        content: '';
        display: block;
        width: 628px;
        height: 628px;
        background-image: url('/Abstract.svg');
        background-size: contain;
        background-repeat: no-repeat;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
    }
`;

const Photo = styled.img`
    border-radius: 230px;
    width: 349px;
    height: 349px;
    position: relative;
    z-index: 1;
    
    @media ${theme.media.mobile} {
        width: calc(349px * 0.9);
        height: calc(349px * 0.9);
    }
`;