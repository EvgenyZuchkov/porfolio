import styled from "styled-components";
import photo from "../../../assets/images/photo.png";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justifyContent={'center'} alignItems={'space-around'}>
                <Title>
                    Hi 👋,
                    My name is
                    Pavan MG
                    I build things for web
                </Title>

                <Photo src={photo} alt=""/>
            </FlexWrapper>

        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #dfbb6a;
`

const Title = styled.span`

`

const Photo = styled.img`
    width: 349px;
    border-radius: 50%;
    object-fit: cover;
`