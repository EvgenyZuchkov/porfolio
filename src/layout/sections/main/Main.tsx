import styled from "styled-components";
import photo from "../../../assets/images/photo.png";
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
                        <div>Hi 👋,</div>
                        <div>My name is</div>
                        <div><span>Pavan MG</span></div>
                        I build things for web
                    </Title>

                    <PhotoWrapper>
                        <Photo src={photo} alt="avatar"/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
    overflow-x: clip;
`

const Title = styled.span`
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