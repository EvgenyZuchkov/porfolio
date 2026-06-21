import styled from "styled-components";

type FlexWrapperProps = {
    direction?: string
    justifyContent?: string
    alignItems?: string
    wrap?: string
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    align-items: ${props => props.alignItems || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
`