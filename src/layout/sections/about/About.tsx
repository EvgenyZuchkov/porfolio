import {AboutItem} from "./AboutItem.tsx";
import fullTime from '../../../assets/images/full-time.png'
import intership from '../../../assets/images/intership.png'
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {AboutSectionTitle} from "./aboutTitle/AboutSectionTitle.tsx";
import * as React from "react";
import {S} from "./About_Styles.ts";

export const About: React.FC = () => {

    const aboutWorkItems = [
        {
            title: 'Junior Web Developer',
            src: fullTime,
            company: 'Dr. Rajkumar’s Learning App',
            location: 'Bengaluru',
            periodOfWork: 'Sep 2021 - Dec 2021'
        },
        {
            title: 'Web Development Intern',
            src: intership,
            company: 'IonPixelz Web Solutions',
            location: 'Bengaluru',
            periodOfWork: 'Sep 2021 - Dec 2021'
        },
        {
            title: 'SEO / SEM Specialist',
            src: intership,
            company: 'HAAPS',
            location: 'Bengaluru',
            periodOfWork: 'Sep 2021 - Dec 2021'
        },
    ]

    const aboutEducationItems = [
        {
            title: 'Bachelor in Electronics & Communication',
            src: fullTime,
            company: 'Bangalore Instutute of Technology',
            periodOfWork: 'Aug 2015 - Dec 2020'
        },
    ]

    return (
        <S.About>
            <Container>
                <S.AboutWrap>
                    <S.AboutPart>
                        <AboutSectionTitle title={'About Me'}/>
                        <S.Description>
                            The Generator App is an online tool that helps you to export ready-made
                            templates ready to work as your future website. It helps you to combine slides, panels and
                            other components and export it as a set of static files: HTML/CSS/JS.
                        </S.Description>
                    </S.AboutPart>

                    <S.AboutPart>
                        <FlexWrapper flexDirection="column">
                            <AboutSectionTitle title={'Work Experience'}/>
                            <FlexWrapper flexDirection={'column'} gap={'46px'}>
                                {aboutWorkItems.map((item, index) => (
                                    <AboutItem key={index}
                                               title={item.title}
                                               src={item.src}
                                               company={item.company}
                                               location={item.location}
                                               periodOfWork={item.periodOfWork}/>
                                ))}
                            </FlexWrapper>
                        </FlexWrapper>

                    </S.AboutPart>

                    <S.AboutPart>
                        <AboutSectionTitle title={'Education'} margin={'60px 0 38px'}/>
                        {aboutEducationItems.map((item, index) => (
                            <AboutItem key={index}
                                       title={item.title}
                                       src={item.src}
                                       company={item.company}
                                       periodOfWork={item.periodOfWork}/>
                        ))}
                    </S.AboutPart>
                </S.AboutWrap>
            </Container>
        </S.About>

    )
}