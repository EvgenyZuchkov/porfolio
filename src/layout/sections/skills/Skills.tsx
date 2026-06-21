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
            <FlexWrapper flexDirection={'row'} wrap={'wrap'}>

                <Skill iconId={'icon-html5'}/>
                <Skill iconId={'icon-css3'}/>
                <Skill iconId={'icon-js'}/>
                <Skill iconId={'icon-react'}/>
                <Skill iconId={'icon-redux'}/>
                <Skill iconId={'icon-babel'}/>
                <Skill iconId={'icon-tailwind'}/>
            </FlexWrapper>
        </StyledSkills>

    )
}

const StyledSkills = styled.section`
    min-height: 100vh;
`

const SectionTittleBlock = styled.div`
`