import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {Theme} from "../../../../styles/Theme.ts";
import {Link} from "./link/Link.tsx";

type ProjectPropsType = {
    img: string
    title: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    const links = [
        {
            text: 'Live Preview',
            iconId: 'icon-chain-white'
        },
        {
            text: 'View Code',
            iconId: 'icon-github-white-20'
        },

    ]

    return (
        <StyledProject>
            <FlexWrapper flexDirection={'column'} height={'100%'}>
                <Image src={props.img} alt="Project Image"/>

                <StyledProjectText>
                    <FlexWrapper flexDirection="column" gap={'0px'} height={'100%'}>
                        <Title>{props.title}</Title>
                        <Description>{props.description}</Description>
                        <Stack>Tech stack : <span>HTML , JavaScript, SASS, React</span></Stack>
                        <FlexWrapper gap={'48px'}>

                            {links.map((link, index) => (
                                <Link key={index } text={link.text} iconId={link.iconId}/>
                            ))}

                        </FlexWrapper>
                    </FlexWrapper>
                </StyledProjectText>
            </FlexWrapper>


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
    padding: 27px;
    flex-grow: 1;
`

const Title = styled.h3`
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
    flex-grow: 1;
`

const Stack = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    color: ${Theme.colors.secondaryText};
    margin-bottom: 24px;

    span {
        font-weight: 300;
        font-size: 14px;
    }
`

