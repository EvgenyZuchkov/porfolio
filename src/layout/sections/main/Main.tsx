import styled from "styled-components";
import photo from "../../../assets/images/photo.png";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";
import {Theme} from "../../../styles/Theme.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justifyContent={'center'} alignItems={'center'} gap={'198px'} height={'100%'}>
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
    font-weight: 700;
    font-size: 58px;
    line-height: 1.2069;
    letter-spacing: -0.02em;
    color: ${Theme.colors.secondaryText};

    span {
        background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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
`;