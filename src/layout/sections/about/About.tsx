import styled from "styled-components";
import {AboutItem} from "../../../components/AboutItem.tsx";
import fullTime from '../../../assets/images/full-time.png'
import intership from '../../../assets/images/intership.png'
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {AboutSectionTitle} from "./aboutTitle/AboutSectionTitle.tsx";

export const About = () => {

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
        <StyledAbout>
            <Container>
                <StyledAboutWrap>
                    <StyledAboutPart>
                        <AboutSectionTitle title={'About Me'}/>
                        <StyledDescription>
                            The Generator App is an online tool that helps you to export ready-made
                            templates ready to work as your future website. It helps you to combine slides, panels and
                            other components and export it as a set of static files: HTML/CSS/JS.
                        </StyledDescription>
                    </StyledAboutPart>

                    <StyledAboutPart>
                        <FlexWrapper flexDirection="column" gap={'55px'}>
                            <AboutSectionTitle title={'Work Experience'}/>
                            {aboutWorkItems.map((item, index) => (
                                <AboutItem key={index}
                                           title={item.title}
                                           src={item.src}
                                           company={item.company}
                                           location={item.location}
                                           periodOfWork={item.periodOfWork}/>
                            ))}
                        </FlexWrapper>

                    </StyledAboutPart>

                    <StyledAboutPart>
                        <AboutSectionTitle title={'Education'}/>
                        {aboutEducationItems.map((item, index) => (
                            <AboutItem key={index}
                                       title={item.title}
                                       src={item.src}
                                       company={item.company}
                                       periodOfWork={item.periodOfWork}/>
                        ))}
                    </StyledAboutPart>
                </StyledAboutWrap>
            </Container>
        </StyledAbout>

    )
}

const StyledAbout = styled.section`
`

const StyledAboutWrap = styled.div`
    max-width: 710px;
    width: 100%;
`

const StyledDescription = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
`

const StyledAboutPart = styled.div`
`

