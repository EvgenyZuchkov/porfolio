import {FlexWrapper} from "./FlexWrapper.tsx";
import {SectionTittle} from "./SectionTittle.tsx";
import {Description} from "./Description.tsx";

type SectionTitleBlockProps = {
    tittle: string;
    text: string;
}

export const SectionTittleBlock = (props: SectionTitleBlockProps) => {
    return (
        <FlexWrapper flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <SectionTittle>{props.tittle}</SectionTittle>
            <Description>{props.text}</Description>
        </FlexWrapper>
    )
}