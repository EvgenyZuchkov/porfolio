import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";

const Skills = styled.section`
    @media ${theme.media.mobile} {
        ${FlexWrapper} {
            gap: 50px;
        }
    }
`
export const S = {
    Skills,
}