
import {Icon} from "../../../../components/icon/Icon.tsx";

type SkillPropsType = {
    iconId: string
}

export const Skill = (props: SkillPropsType) => <Icon iconId={props.iconId} width={'120px'} height={'120px'} viewBox={'0 0 120 120'}/>

