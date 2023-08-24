import './InfoLine.scss';
import { FC } from 'react';

interface IProps {
    title: string;
    text: string | number | null;
    empty?: boolean;
}

export const InfoLine: FC<IProps> = ({ title, text = '-', empty = false }) => {
    return (
        <div className="info-line">
            <h5>{title}</h5>
            <h4>{empty ? '' : text || '-'}</h4>
        </div>
    );
};
