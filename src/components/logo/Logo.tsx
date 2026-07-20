import {Icon} from "../icon/Icon.tsx";
import * as React from "react";
import styled from "styled-components";

type LogoPropsType = {
    iconId: string,
}

export const Logo: React.FC<LogoPropsType> = (props) => {
    return (
        <LinkItem href={'#home'}>
            <Icon iconId={props.iconId} width={'97px'} height={'59px'} viewBox={'0 0 97 59'}/>
        </LinkItem>
    );
};

const LinkItem = styled.a`
    display: inline-block;
    transition: all 0.5s ease;
    position: relative;
    
    &::after {
        display: none;
    }

    &:hover {
        transform: translateY(-5px);
    }
`;
