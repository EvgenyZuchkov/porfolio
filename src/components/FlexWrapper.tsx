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
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    align-items: ${props => props.alignItems || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || '10px'};
    height: 100%    ;
`