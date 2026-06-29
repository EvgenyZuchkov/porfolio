import styled from "styled-components";
import {AboutItem} from "../../../components/AboutItem.tsx";
import fullTime from '../../../assets/images/full-time.png'
import intership from '../../../assets/images/intership.png'
import {Container} from "../../../components/Container.ts";
import {Theme} from "../../../styles/Theme.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <StyledAboutWrap>
                    <StyledAboutPart>
                        <StyledSectionTittle>About Me</StyledSectionTittle>
                        <StyledDescription>The Generator App is an online tool that helps you to export ready-made
                            templates ready
                            to
                            work as your
                            future website. It helps you to combine slides, panels and other components and export it as
                            a
                            set
                            of
                            static files: HTML/CSS/JS.</StyledDescription>
                    </StyledAboutPart>

                    <StyledAboutPart>
                        <FlexWrapper flexDirection="column" gap={'30px'}>
                            <StyledSectionTittle>Work Experience</StyledSectionTittle>
                            <AboutItem title={'Junior Web Developer'}
                                       src={fullTime}
                                       company={'Dr. Rajkumar’s Learning App'}
                                       location={'Bengaluru'}
                                       periodOfWork={'Sep 2021 - Dec 2021'}/>
                            <AboutItem title={'Web Development Intern'}
                                       src={intership}
                                       company={'IonPixelz Web Solutions'}
                                       location={'Bengaluru'}
                                       periodOfWork={'Sep 2021 - Dec 2021'}/>
                            <AboutItem title={'SEO / SEM Specialist'}
                                       src={intership}
                                       company={'HAAPS'}
                                       location={'Bengaluru'}
                                       periodOfWork={'Sep 2021 - Dec 2021'}/>
                        </FlexWrapper>

                    </StyledAboutPart>

                    <StyledAboutPart>
                        <StyledSectionTittle>Education</StyledSectionTittle>
                        <AboutItem title={'Bachelor in Electronics & Communication'}
                                   src={fullTime}
                                   company={'Bangalore Instutute of Technology'}
                                   periodOfWork={'Aug 2015 - Dec 2020'}/>
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

const StyledSectionTittle = styled.h2`
    font-weight: 700;
    font-size: 42px;
    line-height: 1.2381;
    letter-spacing: -0.01em;
    color: ${Theme.colors.secondaryText};
    margin: 38px 0;
`

const StyledDescription = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
`

const StyledAboutPart = styled.div`
`

