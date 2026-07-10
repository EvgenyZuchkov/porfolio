import styled from "styled-components";
import {Project} from "./project/Project.tsx";
import FirstImg from "../../../assets/images/projects-images/6.png"
import SecondImg from "../../../assets/images/projects-images/5.png"
import ThirtyImage from "../../../assets/images/projects-images/4.png"
import FourthImage from "../../../assets/images/projects-images/3.png"
import FivesImg from "../../../assets/images/projects-images/2.png"
import SixImg from "../../../assets/images/projects-images/1.png"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTittleBlock} from "../../../components/SectionTittleBlock.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Projects = () => {
    const projectItems = [
        {
            img: FirstImg,
            title: 'Project Tile goes here',
            description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
        },
        {
            img: SecondImg,
            title: 'Project Tile goes here',
            description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
        },
        {
            img: ThirtyImage,
            title: 'Project Tile goes here',
            description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
        },
        {
            img: FourthImage,
            title: 'Project Tile goes here',
            description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
        },
        {
            img: FivesImg,
            title: 'Project Tile goes here',
            description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
        },
        {
            img: SixImg,
            title: 'Project Tile goes here',
            description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
        }
    ]

    return (
        <StyledProjects>
            <SectionTittleBlock tittle={'Projects'} text={'Things I’ve built so far'}/>
                <FlexWrapper gap={'48px'} wrap={'wrap'} justifyContent={'center'}>

                    {projectItems.map((item, index) => (
                        <Project key={index} img={item.img} title={item.title} description={item.description}/>
                    ))}

                </FlexWrapper>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    @media ${theme.media.tablet} {
        padding: 0 15px;
        ${FlexWrapper} {
            gap: 20px;
        }
    }
`