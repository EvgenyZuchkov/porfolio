import styled from "styled-components";

type FlexWrapperProps = {
    flexDirection?: string
    justifyContent?: string
    alignItems?: string
    wrap?: string
    gap?: string
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'null'};
    justify-content: ${props => props.justifyContent || 'null'};
    align-items: ${props => props.alignItems || 'null'};
    flex-wrap: ${props => props.wrap || 'null'};
    gap: ${props => props.gap || 'null'};
    height: 100%    ;
`