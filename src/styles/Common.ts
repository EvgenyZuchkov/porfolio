import {theme} from "./Theme.ts";

type FontPropsType = {
    family?: string,
    fontWeight?: number,
    lineHeight?: number,
    letterSpacing?: string,
    color?: string,
    Fmax: number,
    Fmin: number,
}

export const font = ({family, fontWeight, lineHeight, letterSpacing, color, Fmax, Fmin}: FontPropsType) => `
    font-family: ${family || '"Poppins", sans-serif'};
    font-weight: ${fontWeight || 400};
    line-height: ${lineHeight || 1.2};
    letter-spacing: ${letterSpacing || 0};
    color: ${color || theme.colors.primaryText};
    font-size: clamp(${Fmin}px, calc((100vw - 360px) / (1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px);
`