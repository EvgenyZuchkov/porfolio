import styled from "styled-components";
import {SectionTittle} from "../../../components/SectionTittle.tsx";
import {Description} from "../../../components/Description.tsx";
import {Project} from "./project/Project.tsx";
import FirstImg from "../../../assets/images/projects-images/6.png"
import SecondImg from "../../../assets/images/projects-images/5.png"
import ThirtyImage from "../../../assets/images/projects-images/4.png"
import FourthImage from "../../../assets/images/projects-images/3.png"
import FivesImg from "../../../assets/images/projects-images/2.png"
import SixImg from "../../../assets/images/projects-images/1.png"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Projects = () => {
    return (
        <StyledProjects>
            <StyledTitle>
                <SectionTittle>Projects</SectionTittle>
                <Description>Things I’ve built so far</Description>
            </StyledTitle>
            <FlexWrapper gap={'50px'} wrap={'wrap'} justifyContent={'center'}>
                <Project img={FirstImg} title={'Project Tile goes here'}
                         description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}/>
                <Project img={SecondImg} title={'Project Tile goes here'}
                         description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}/>
                <Project img={ThirtyImage} title={'Project Tile goes here'}
                         description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}/>
                <Project img={FourthImage} title={'Project Tile goes here'}
                         description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}/>
                <Project img={FivesImg} title={'Project Tile goes here'}
                         description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}/>
                <Project img={SixImg} title={'Project Tile goes here'}
                         description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}/>
            </FlexWrapper>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
`

const StyledTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`