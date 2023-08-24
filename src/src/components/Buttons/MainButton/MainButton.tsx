import { FC } from 'react';
import { tButton } from 'src/interfaces';
import './MainButton.scss';

type tButtonTypes = 'primary' | 'outline' | 'link' | 'icon';
type tButtonSize = 's' | 'm' | 'l' | 'maxi';

interface IProps extends tButton {
    buttonType: tButtonTypes;
    buttonSize?: tButtonSize;
    buttonColor?: string;
}

export const MainButton: FC<IProps> = ({
    children,
    buttonType,
    buttonSize = 'm',
    buttonColor = 'violet',
    className,
    ...props
}) => {
    const disabledClassName = props.disabled ? 'main-button__disable' : '';
    const styles = [
        'main-button',
        `main-button__${buttonType}`,
        `main-button__${buttonType}--${buttonSize}`,
        `main-button__${buttonType}--${buttonColor}`,
        disabledClassName,
        className ?? '',
    ].join(' ');
    return (
        <button className={styles} {...props}>
            {children}
        </button>
    );
};
