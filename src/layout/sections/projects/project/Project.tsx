import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {Icon} from "../../../../components/icon/Icon.tsx";

type ProjectPropsType = {
    img: string
    title: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <FlexWrapper flexDirection="column">
                <Image src={props.img} alt="Project Image"/>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
                <Stack>Tech stack : HTML , JavaScript, SASS, React</Stack>
                <LinkWrapper>
                    <Link>
                        <Icon iconId={'icon-chain-white'} width={'20px'} height={'20px'}/>
                        <LinkText>Live Preview</LinkText>
                    </Link>
                    <Link>
                        <Icon iconId={'icon-github-white-20'} width={'20px'} height={'20px'}/>
                        <LinkText>View Code</LinkText>
                    </Link>
                </LinkWrapper>
            </FlexWrapper>
        </StyledProject>
    )
}

const StyledProject = styled.div`
    width: 373px;
    background-color: rgba(96, 96, 96, 0.97);
`


const Image = styled.img`
    width: 100%;
    object-fit: cover;
`

const Title = styled.h2`
`

const Description = styled.p`
`

const Stack = styled.span`
`

const LinkWrapper = styled.div`
    display: flex;
    gap: 48px;
`

const Link = styled.div`
`

const LinkText = styled.a`
`