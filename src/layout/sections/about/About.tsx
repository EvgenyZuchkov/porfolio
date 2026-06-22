import styled from "styled-components";
import {SectionTittle} from "../../../components/SectionTittle.tsx";
import {Description} from "../../../components/Description.tsx";
import {AboutItem} from "../../../components/AboutItem.tsx";

export const About = () => {
    return (
        <StyledAbout>

            <StyledAboutPart>
                <SectionTittle>About Me</SectionTittle>
                <Description>The Generator App is an online tool that helps you to export ready-made templates ready to
                    work as your
                    future website. It helps you to combine slides, panels and other components and export it as a set
                    of
                    static files: HTML/CSS/JS.</Description>
            </StyledAboutPart>

            <StyledAboutPart>
                <SectionTittle>Work Experience</SectionTittle>
                <AboutItem title={'Junior Web Developer'}
                           fullWorkTime={true}
                           company={'Dr. Rajkumar’s Learning App'}
                           location={'Bengaluru'}
                           periodOfWork={'Sep 2021 - Dec 2021'}/>
                <AboutItem title={'Web Development Intern'}
                           fullWorkTime={false}
                           company={'IonPixelz Web Solutions'}
                           location={'Bengaluru'}
                           periodOfWork={'Sep 2021 - Dec 2021'}/>
                <AboutItem title={'SEO / SEM Specialist'}
                           fullWorkTime={false}
                           company={'HAAPS'}
                           location={'Bengaluru'}
                           periodOfWork={'Sep 2021 - Dec 2021'}/>
            </StyledAboutPart>

            <StyledAboutPart>
                <SectionTittle>Education</SectionTittle>
                <AboutItem title={'Bachelor in Electronics & Communication'}
                           fullWorkTime={true}
                           company={'Bangalore Instutute of Technology'}
                           periodOfWork={'Aug 2015 - Dec 2020'}/>
            </StyledAboutPart>
        </StyledAbout>

    )
}

const StyledAbout = styled.section`
    max-width: 710px;
`

const StyledAboutPart = styled.div`
`

