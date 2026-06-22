import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTittle} from "../../../components/SectionTittle.tsx";
import {Description} from "../../../components/Description.tsx";
import styled from "styled-components";
import {Skill} from "./skill/Skill.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTittleBlock>
                <SectionTittle>My Tech Stack</SectionTittle>
                <Description> Technologies I’ve been working with recently</Description>
            </SectionTittleBlock>
            <FlexWrapper flexDirection={'row'} justifyContent={'center'} gap={'105px'} wrap={'wrap'}>
                <Skill iconId={'icon-html5'}/>
                <Skill iconId={'icon-css3'}/>
                <Skill iconId={'icon-js'}/>
                <Skill iconId={'icon-react'}/>
                <Skill iconId={'icon-redux'}/>
                <Skill iconId={'icon-babel'}/>
                <Skill iconId={'icon-tailwind'}/>
                <Skill iconId={'icon-sass'}/>
                <Skill iconId={'icon-git'}/>
                <Skill iconId={'icon-gsap-black'}/>
                <Skill iconId={'icon-vsCode'}/>
                <Skill iconId={'icon-github'}/>
            </FlexWrapper>
        </StyledSkills>

    )
}

const StyledSkills = styled.section`
    min-height: 100vh;
`

const SectionTittleBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 124px;
`