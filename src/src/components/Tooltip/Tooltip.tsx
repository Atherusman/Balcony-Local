import { FC, ReactNode } from 'react';
import './Tooltip.scss';

interface IProps {
    text: string;
    children?: ReactNode;
}

export const Tooltip: FC<IProps> = ({ children, text }) => {
    return (
        <div className="tooltip">
            {children}
            <div className={`tooltip__text tooltip--top`}>
                {text}
                <span className="tooltip__arrow"></span>
            </div>
        </div>
    );
};
