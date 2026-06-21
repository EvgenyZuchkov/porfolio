import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";

type SkillPropsType = {
    iconId: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
        </StyledSkill>
    )
}

const StyledSkill = styled.div``