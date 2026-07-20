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
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {SectionTittleBlock} from "../../../components/SectionTittleBlock.tsx";
import {S} from "./Projects_Styles.ts";
import * as React from "react";
import {Container} from "../../../components/Container.ts";
import {TabsMenu, type TabsStatusType} from "./TabsMenu.tsx";
import {useState} from "react";
import {motion} from "motion/react"
import {AnimatePresence} from "motion/react"


const TabsItems: Array<{ status: TabsStatusType, title: string }> = [
    {
        title: 'All',
        status: 'all',
    },
    {
        title: "HTML",
        status: "html"
    },
    {
        title: "SASS",
        status: "sass"
    },
    {
        title: "JavaScript",
        status: "js"
    },
    {
        title: "React",
        status: "react"
    },

]

const projectItems = [
    {
        img: `${FirstImg} 1x, ${FirstImgX2} 2x, ${FirstImgX3} 3x`,
        title: 'Project Tile goes here',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        type: 'react'
    },
    {
        img: `${SecondImg} 1x, ${SecondImgX2} 2x, ${SecondImgX3} 3x`,
        title: 'Project Tile goes here',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        type: 'js'
    },
    {
        img: `${ThirtyImage} 1x, ${ThirtyImageX2} 2x, ${ThirtyImageX3} 3x`,
        title: 'Project Tile goes here',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        type: 'sass'
    },
    {
        img: `${FourthImage} 1x, ${FourthImageX2} 2x, ${FourthImageX3} 3x`,
        title: 'Project Tile goes here',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        type: 'react'
    },
    {
        img: `${FivesImg} 1x, ${FivesImgX2} 2x, ${FivesImgX3} 3x`,
        title: 'Project Tile goes here',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        type: 'html'
    },
    {
        img: `${SixImg} 1x, ${SixImgX2} 2x, ${SixImgX3} 3x`,
        title: 'Project Tile goes here',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        type: 'js'
    }
]

export const Projects: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState('all')
    let filteredProjects = projectItems

    if (currentFilterStatus === 'html') {
        filteredProjects = projectItems.filter((project) => project.type === 'html')
    }

    if (currentFilterStatus === 'sass') {
        filteredProjects = projectItems.filter((project) => project.type === 'sass')
    }

    if (currentFilterStatus === 'js') {
        filteredProjects = projectItems.filter((project) => project.type === 'js')
    }

    if (currentFilterStatus === 'react') {
        filteredProjects = projectItems.filter((project) => project.type === 'react')
    }

    const changeFilterStatus = (value: TabsStatusType) => {
        setCurrentFilterStatus(value)
    }


    return (
        <S.Projects id={'projects'}>
            <Container>
                <FlexWrapper flexDirection={'column'} gap={'50px'}>
                    <SectionTittleBlock tittle={'Projects'} text={'Things I’ve built so far'} marginBottom={'15px'}/>
                    <TabsMenu currentFilterStatus={currentFilterStatus} tabsItems={TabsItems}
                              changeFilterStatus={changeFilterStatus}/>
                    <FlexWrapper gap={'48px'} wrap={'wrap'} justifyContent={'center'}>

                        <AnimatePresence>

                            {filteredProjects.map((item, index) => (
                                <motion.div layout initial="hidden" animate="visible" exit="hidden" key={index}
                                            style={{maxWidth: '369px', width: '100%' }}>
                                    <Project key={index} img={item.img} title={item.title}
                                             description={item.description}/>
                                </motion.div>
                            ))}

                        </AnimatePresence>


                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Projects>
    )
}