import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {font} from "../../../styles/Common.ts";

const Projects = styled.section`
    @media ${theme.media.tablet} {
        padding: 0 15px;

        ${FlexWrapper} {
            gap: 20px;
        }
    }
`

const Project = styled.div`
    border-radius: 20px;
    //max-width: 369px;
    //width: 100%;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    background: #363636;
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
`

const ProjectText = styled.div`
    padding: 27px;
    flex-grow: 1;
`

const Title = styled.h3`
    ${font({fontWeight: 500, lineHeight: 1, color: theme.colors.secondaryText, Fmax: 28, Fmin: 18})}
`

const Description = styled.p`
    ${font({fontWeight: 300, lineHeight: 1.5, color: theme.colors.secondaryText, Fmax: 18, Fmin: 13})}
    margin: 17px 0 12px;
    flex-grow: 1;
`

const Stack = styled.p`
    ${font({lineHeight: 1.63, color: theme.colors.secondaryText, Fmax: 16, Fmin: 14})}
    margin-bottom: 24px;

    span {
        ${font({fontWeight: 300, Fmax: 14, Fmin: 13})}
    }
`

const ToggleBtn = styled.button`
    
    //@media screen and (min-width: 1280px){
    //    display: none;
    //}
`

export const S = {
    Projects,
    Project,
    Image,
    ProjectText,
    Title,
    Description,
    Stack,
    ToggleBtn,
}

