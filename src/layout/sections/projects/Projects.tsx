import styled from "styled-components";
import {Project} from "./project/Project.tsx";
import FirstImg from "../../../assets/images/projects-images/6/6.png"
import FirstImgX2 from "../../../assets/images/projects-images/6/6@2.png"
import FirstImgX3 from "../../../assets/images/projects-images/6/6@3.png"
import SecondImg from "../../../assets/images/projects-images/5/5.png"
import SecondImgX2 from "../../../assets/images/projects-images/5/5@2.png"
import SecondImgX3 from "../../../assets/images/projects-images/5/5@3.png"
import ThirtyImage from "../../../assets/images/projects-images/4/4.png"
import ThirtyImageX2 from "../../../assets/images/projects-images/4/4@2.png"
import ThirtyImageX3 from "../../../assets/images/projects-images/4/4@3.png"
import FourthImage from "../../../assets/images/projects-images/3/3.png"
import FourthImageX2 from "../../../assets/images/projects-images/3/3@2.png"
import FourthImageX3 from "../../../assets/images/projects-images/3/3@3.png"
import FivesImg from "../../../assets/images/projects-images/2/2.png"
import FivesImgX2 from "../../../assets/images/projects-images/2/2@2.png"
import FivesImgX3 from "../../../assets/images/projects-images/2/2@3.png"
import SixImg from "../../../assets/images/projects-images/1/1.png"
import SixImgX2 from "../../../assets/images/projects-images/1/1@2.png"
import SixImgX3 from "../../../assets/images/projects-images/1/1@3.png"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTittleBlock} from "../../../components/SectionTittleBlock.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Projects = () => {
    const projectItems = [
        {
            img: `${FirstImg} 1x, ${FirstImgX2} 2x, ${FirstImgX3} 3x`,
            title: 'Project Tile goes here',
            description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
        },
        {
            img: `${SecondImg} 1x, ${SecondImgX2} 2x, ${SecondImgX3} 3x`,
            title: 'Project Tile goes here',
            description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
        },
        {
            img: `${ThirtyImage} 1x, ${ThirtyImageX2} 2x, ${ThirtyImageX3} 3x`,
            title: 'Project Tile goes here',
            description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
        },
        {
            img: `${FourthImage} 1x, ${FourthImageX2} 2x, ${FourthImageX3} 3x`,
            title: 'Project Tile goes here',
            description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
        },
        {
            img: `${FivesImg} 1x, ${FivesImgX2} 2x, ${FivesImgX3} 3x`,
            title: 'Project Tile goes here',
            description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
        },
        {
            img: `${SixImg} 1x, ${SixImgX2} 2x, ${SixImgX3} 3x`,
            title: 'Project Tile goes here',
            description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
        }
    ]

    return (
        <StyledProjects>
            <SectionTittleBlock tittle={'Projects'} text={'Things I’ve built so far'} marginBottom={'95px'}/>
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