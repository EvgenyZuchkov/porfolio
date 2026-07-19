import {theme} from "../../../styles/Theme.ts";
import styled from "styled-components";
import {font} from "../../../styles/Common.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";

const Main = styled.section`
    //min-height: 100vh;
    display: flex;
    overflow-x: clip;
    padding: 330px 0 50px;
    
    @media ${theme.media.tablet} {
        padding: 150px 0 50px;
    }
    
    ${FlexWrapper} {
        @media ${theme.media.desktop} {
            gap: 100px;
        }
    }
`

const Title = styled.div`
    flex-grow: 1;
    ${font({
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    color: '${theme.colors.gradient}',
    Fmax: 58,
    Fmin: 35
})}
    
    h1 {
        ${font({
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: '${theme.colors.gradient}',
            Fmax: 58,
            Fmin: 35
        })}
    }
    
    h1:first-of-type {
        display: none;
    }
    
    span {
        display: block;
    }
    
    span > span {
        background: ${theme.colors.gradient};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    
    @media ${theme.media.desktop} {
        flex-grow: unset;
    }

`

const PhotoWrapper = styled.div`
    position: relative;

    &::before {
        content: '';
        display: block;
        width: 628px;
        height: 628px;
        background-image: url('/Abstract.svg');
        background-size: contain;
        background-repeat: no-repeat;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
    }
`;

const Photo = styled.img`
    border-radius: 230px;
    width: 349px;
    height: 349px;
    position: relative;
    z-index: 1;
    
    @media ${theme.media.mobile} {
        width: calc(349px * 0.9);
        height: calc(349px * 0.9);
    }
`;

export const S = {
    Main,
    Title,
    PhotoWrapper,
    Photo,
}