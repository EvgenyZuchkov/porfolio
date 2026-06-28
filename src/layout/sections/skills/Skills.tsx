import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTittle} from "../../../components/SectionTittle.tsx";
import {Description} from "../../../components/Description.tsx";
import styled from "styled-components";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTittleBlock>
                    <SectionTittle>My Tech Stack</SectionTittle>
                    <Description> Technologies I’ve been working with recently</Description>
                </SectionTittleBlock>
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
                    <Skill iconId={'icon-gsap-black'}/>
                    <Skill iconId={'icon-vsCode'}/>
                    <Skill iconId={'icon-github'}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>

    )
}

const StyledSkills = styled.section`
`

const SectionTittleBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 124px;
`