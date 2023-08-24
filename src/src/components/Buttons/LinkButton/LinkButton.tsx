import './LinkButton.scss';

import { FC, ReactNode, MouseEvent } from 'react';
import { tButton } from 'src/interfaces';

interface IProps extends tButton {
    text: string;
    className?: string;
    children?: ReactNode;
    onClick: (e: MouseEvent) => void;
}

export const LinkButton: FC<IProps> = ({ text, className, children, onClick }) => {
    return (
        <button className={`link-button ${className}`} onClick={e => onClick(e)}>
            <h5>{text}</h5>
            {children}
        </button>
    );
};
