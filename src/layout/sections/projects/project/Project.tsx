import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {theme} from "../../../../styles/Theme.ts";
import {Link} from "./link/Link.tsx";
import {font} from "../../../../styles/Common.ts";

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
                <Image srcSet={props.img} alt="Project Image"/>

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
    max-width: 373px;
    width: 100%;
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
    ${font({fontWeight: 500, lineHeight: 1, color: theme.colors.secondaryText, Fmax: 28, Fmin: 18})}
`

const Description = styled.p`
    ${font({fontWeight: 300, lineHeight: 1.5, color: theme.colors.secondaryText, Fmax: 18, Fmin: 13})}
    margin: 17px 0 12px;
    flex-grow: 1;
`

const Stack = styled.p`
    ${font({lineHeight: 1.63, color: theme.colors.secondaryText, Fmax: 16, Fmin: 14})}
    margin-bottom: 24px;

    span {
        ${font({fontWeight: 300, Fmax: 14, Fmin: 13})}
    }
`

