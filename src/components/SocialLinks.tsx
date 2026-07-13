import {Link} from "./link/Link.tsx";
import styled from "styled-components";
import * as React from "react";

export const SocialLinks: React.FC = () => {
    return (
        <SocialLinksNav>
            <StyledSocialLinks>
                    <Item>
                        <Link iconId={'icon-github-darkgray'} width={'30px'}/>
                    </Item>
                    <Item>
                        <Link iconId={'icon-twitter-darkgray'} width={'30px'}/>
                    </Item>
                    <Item>
                        <Link iconId={'icon-linkedin'} width={'30px'}/>
                    </Item>
            </StyledSocialLinks>
        </SocialLinksNav>

    )
}

const SocialLinksNav = styled.nav``

const StyledSocialLinks = styled.ul`
    display: flex;
    gap: 20px;
    
`

const Item = styled.li`
`