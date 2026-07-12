import styled from "styled-components";
import {AboutItem} from "../../../components/AboutItem.tsx";
import fullTime from '../../../assets/images/full-time.png'
import intership from '../../../assets/images/intership.png'
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {AboutSectionTitle} from "./aboutTitle/AboutSectionTitle.tsx";
import {font} from "../../../styles/Common.ts";

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
                        <FlexWrapper flexDirection="column">
                            <AboutSectionTitle title={'Work Experience'}/>
                            <FlexWrapper flexDirection={'column'} gap={'55px'}>
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

                    </StyledAboutPart>

                    <StyledAboutPart>
                        <AboutSectionTitle title={'Education'} margin={'64px 0 38px'}/>
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
    ${font({lineHeight: 1.4, Fmax: 18, Fmin: 15})}
`

const StyledAboutPart = styled.div`
`

