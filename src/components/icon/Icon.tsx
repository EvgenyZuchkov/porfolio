import IconSprite from '../../assets/images/sprite.svg';

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || '50px'} height={props.height || '50px'} viewBox={props.viewBox || '0 0 50 50'}
             fill="black" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconSprite}#${props.iconId}`}/>
        </svg>
    );
};
