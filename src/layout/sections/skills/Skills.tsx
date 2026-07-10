import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import {SectionTittleBlock} from "../../../components/SectionTittleBlock.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Skills = () => {

    const idSkills = [
        'icon-html5',
        'icon-css3',
        'icon-js',
        'icon-react',
        'icon-redux',
        'icon-babel',
        'icon-tailwind',
        'icon-sass',
        'icon-git',
        'icon-greensock',
        'icon-vsCode',
        'icon-github-white-88'
    ]

    return (
        <StyledSkills>
            <Container>
                <SectionTittleBlock tittle={'My Tech Stack'} text={'Technologies I’ve been working with recently'}/>
                    <FlexWrapper flexDirection={'row'} justifyContent={'space-between'} gap={'95px'} wrap={'wrap'}>
                        {idSkills.map((iconId) => (
                            <Skill key={iconId} iconId={iconId}/>
                        ))}
                    </FlexWrapper>
            </Container>
        </StyledSkills>

    )
}

const StyledSkills = styled.section`
    @media ${theme.media.mobile} {
        ${FlexWrapper} {
            gap: 50px;
        }
    }
    
    
`