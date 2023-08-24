import './Tag.scss';
import { FC, MouseEvent } from 'react';

interface IProps {
    text: string;
    bgColor: string;
    textColor: string;
    size?: 's' | 'm' | 'max';
    onClick?: (e: MouseEvent) => void;
}
export const Tag: FC<IProps> = ({ text, bgColor, textColor, size = 'm', onClick }) => {
    return onClick ? (
        <button
            className={`tag tag--${size}`}
            style={{ backgroundColor: bgColor, color: textColor }}
            onClick={e => onClick(e)}
        >
            {text}
        </button>
    ) : (
        <span className={`tag tag--${size}`} style={{ backgroundColor: bgColor, color: textColor }}>
            {text}
        </span>
    );
};
