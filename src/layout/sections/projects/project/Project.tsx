import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {Theme} from "../../../../styles/Theme.ts";

type ProjectPropsType = {
    img: string
    title: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.img} alt="Project Image"/>

            <StyledProjectText>
                <FlexWrapper flexDirection="column" gap={'0px'}>
                    <Title>{props.title}</Title>
                    <Description>{props.description}</Description>
                    <Stack>Tech stack : <span>HTML , JavaScript, SASS, React</span></Stack>
                    <FlexWrapper gap={'48px'}>
                        <FlexWrapper gap={'10px'}>
                            <Icon iconId={'icon-chain-white'} width={'20px'} height={'20px'}/>
                            <LinkText>Live Preview</LinkText>
                        </FlexWrapper>
                        <FlexWrapper>
                            <Icon iconId={'icon-github-white-20'} width={'20px'} height={'20px'}/>
                            <LinkText>View Code</LinkText>
                        </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper>
            </StyledProjectText>

        </StyledProject>
    )
}

const StyledProject = styled.div`
    border-radius: 20px;
    width: 373px;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    background: #363636;
`


const Image = styled.img`
    width: 100%;
    object-fit: cover;
`

const StyledProjectText = styled.div`
    padding: 27px`

const Title = styled.h2`
    font-weight: 500;
    font-size: 28px;
    line-height: 0.92857;
    color: ${Theme.colors.secondaryText};
`

const Description = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 1.44444;
    color: ${Theme.colors.secondaryText};
    margin: 17px 0 12px;
`

const Stack = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    color: ${Theme.colors.secondaryText};

    span {
        font-weight: 300;
        font-size: 14px;
    }

    margin-bottom: 24px;
`

const LinkText = styled.a`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #fff;
`