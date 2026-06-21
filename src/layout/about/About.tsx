import styled from "styled-components";

export const About = () => {
    return (
        <StyledAbout>

            <StyledAboutPart>
                <StyledTitle>About Me</StyledTitle>
                <StyledAboutDescription>The Generator App is an online tool that helps you to export ready-made templates ready to work as your
                    future website. It helps you to combine slides, panels and other components and export it as a set of
                    static files: HTML/CSS/JS.</StyledAboutDescription>
            </StyledAboutPart>

            <StyledAboutPart>
                <StyledTitle>Work Experience</StyledTitle>
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
                <StyledTitle>Education</StyledTitle>
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

const StyledTitle = styled.h2`
`

const StyledAboutDescription = styled.p`
`

const StyledWork = styled.div`
`

