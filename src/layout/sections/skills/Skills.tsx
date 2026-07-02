import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import {SectionTittleBlock} from "../../../components/SectionTittleBlock.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTittleBlock tittle={'My Tech Stack'} text={'Technologies I’ve been working with recently'}/>
                <StyledSkillsWrap>
                    <FlexWrapper flexDirection={'row'} justifyContent={'space-between'} gap={'95px'} wrap={'wrap'}>
                        <Skill iconId={'icon-html5'}/>
                        <Skill iconId={'icon-css3'}/>
                        <Skill iconId={'icon-js'}/>
                        <Skill iconId={'icon-react'}/>
                        <Skill iconId={'icon-redux'}/>
                        <Skill iconId={'icon-babel'}/>
                        <Skill iconId={'icon-tailwind'}/>
                        <Skill iconId={'icon-sass'}/>
                        <Skill iconId={'icon-git'}/>
                        <Skill iconId={'icon-greensock'}/>
                        <Skill iconId={'icon-vsCode'}/>
                        <Skill iconId={'icon-github'}/>
                    </FlexWrapper>
                </StyledSkillsWrap>
            </Container>
        </StyledSkills>

    )
}

const StyledSkills = styled.section`
`
const StyledSkillsWrap = styled.div`
    margin-top: 140px
`