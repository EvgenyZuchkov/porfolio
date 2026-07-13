import {FlexWrapper} from "../../../../components/FlexWrapper.ts";
import {Link} from "./link/Link.tsx";
import {S} from "../Projects_Styles.ts";
import * as React from "react";

type ProjectPropsType = {
    img: string
    title: string
    description: string
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    const links = [
        {
            text: 'Live Preview',
            iconId: 'icon-chain-white'
        },
        {
            text: 'View Code',
            iconId: 'icon-github-white-20'
        },

    ]

    return (
        <S.Project>
            <FlexWrapper flexDirection={'column'} height={'100%'}>
                <S.Image srcSet={props.img} alt="Project Image"/>

                <S.ProjectText>
                    <FlexWrapper flexDirection="column" gap={'0px'} height={'100%'}>
                        <S.Title>{props.title}</S.Title>
                        <S.Description>{props.description}</S.Description>
                        <S.Stack>Tech stack : <span>HTML , JavaScript, SASS, React</span></S.Stack>
                        <FlexWrapper gap={'48px'}>

                            {links.map((link, index) => (
                                <Link key={index} text={link.text} iconId={link.iconId}/>
                            ))}

                        </FlexWrapper>
                    </FlexWrapper>
                </S.ProjectText>
            </FlexWrapper>
        </S.Project>
    )
}