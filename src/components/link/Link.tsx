import {Icon} from "../icon/Icon.tsx";
import * as React from "react";
import styled from "styled-components";

type LinkPropsType = {
    iconId: string,
    width?: string,
    height?: string,
}

export const Link: React.FC<LinkPropsType> = (props) => {
    return (
        <LinkItem href="#">
            <Icon iconId={props.iconId} width={props.width} height={props.height}/>
        </LinkItem>
    )
}

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
