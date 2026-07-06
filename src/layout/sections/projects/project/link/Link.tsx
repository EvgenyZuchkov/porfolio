import {Icon} from "../../../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../../../components/FlexWrapper.tsx";
import styled from "styled-components";

type LinkPropsType = {
    text: string;
    iconId: string
}

export const Link = (props: LinkPropsType) => {
    return (
        <FlexWrapper gap={'10px'}>
            <Icon iconId={'icon-chain-white'} width={'20px'} height={'20px'}/>
            <LinkText>{props.text}</LinkText>
        </FlexWrapper>
    )
}

const LinkText = styled.a`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #fff;
`