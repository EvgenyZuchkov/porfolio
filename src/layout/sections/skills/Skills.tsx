import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import {SectionTittleBlock} from "../../../components/SectionTittleBlock.tsx";
import {S} from "./Skills_Styles.ts";
import * as React from "react";
import { Fade } from "react-awesome-reveal";

export const Skills: React.FC = () => {

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
        <S.Skills id={'skills'}>
            <Container>
                <SectionTittleBlock tittle={'My Tech Stack'} text={'Technologies I’ve been working with recently'}/>
                <FlexWrapper flexDirection={'row'} justifyContent={'space-between'} gap={'95px'} wrap={'wrap'}>
                    <Fade cascade={true} damping={0.3}>
                        {idSkills.map((iconId, index) => (
                            <Skill key={index} iconId={iconId}/>
                        ))}
                    </Fade>

                </FlexWrapper>
            </Container>
        </S.Skills>

    )
}