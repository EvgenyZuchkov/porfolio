import styled from "styled-components";
import {SectionTittle} from "../../../components/SectionTittle.tsx";
import {Description} from "../../../components/Description.tsx";

export const About = () => {
    return (
        <StyledAbout>

            <StyledAboutPart>
                <SectionTittle>About Me</SectionTittle>
                <Description>The Generator App is an online tool that helps you to export ready-made templates ready to work as your
                    future website. It helps you to combine slides, panels and other components and export it as a set of
                    static files: HTML/CSS/JS.</Description>
            </StyledAboutPart>

            <StyledAboutPart>
                <SectionTittle>Work Experience</SectionTittle>
                <StyledWork>
                    <div>
                        <h3>Junior Web Developer</h3>
                        <img src="" alt=""/>
                    </div>

                    <div>
                        <img src="" alt=""/>
                        <p>Dr. Rajkumar’s Learning App</p>
                        <img src="" alt=""/>
                        <p>Bengaluru</p>
                        <img src="" alt=""/>
                        <p>Sep 2021 - Dec 2021</p>
                    </div>
                </StyledWork>
            </StyledAboutPart>

            <StyledAboutPart>
                <SectionTittle>Education</SectionTittle>
                <StyledWork>
                    <div>
                        <h3>Bachelor in Electronics & Communication</h3>
                        <img src="" alt=""/>
                    </div>

                    <div>
                        <img src="" alt=""/>
                        <p>Bangalore Instutute of Technology</p>
                        <img src="" alt=""/>
                        <p>Bengaluru</p>
                        <img src="" alt=""/>
                        <p>Aug 2015 - Dec 2020</p>
                    </div>
                </StyledWork>
            </StyledAboutPart>
        </StyledAbout>

    )
}

const StyledAbout = styled.section`
    max-width: 710px;
`

const StyledAboutPart = styled.div`
`

const StyledWork = styled.div`
`

