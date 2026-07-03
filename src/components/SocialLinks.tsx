import {Link} from "./link/Link.tsx";
import styled from "styled-components";
import {FlexWrapper} from "./FlexWrapper.tsx";

export const SocialLinks = () => {
    return (
        <StyledSocialLinks>
            <FlexWrapper flexDirection={'row'} gap={'20px'}>
                <Item>
                    <Link iconId={'icon-github-darkgray'} width={'30px'}/>
                </Item>
                <Item>
                    <Link iconId={'icon-twitter-darkgray'} width={'30px'}/>
                </Item>
                <Item>
                    <Link iconId={'icon-linkedin'} width={'30px'}/>
                </Item>
            </FlexWrapper>
        </StyledSocialLinks>
    )
}

const StyledSocialLinks = styled.ul`
`

const Item = styled.li`
`