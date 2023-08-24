import './InfoCard.scss';
import { FC, ReactNode } from 'react';

interface IProps {
    icon?: ReactNode;
    title: string;
    text: string | null;
}

export const InfoCard: FC<IProps> = ({ title, text, icon }) => {
    return (
        <div className="info-card">
            {icon && <div className="info-card__icon">{icon}</div>}
            <div className="info-card__content">
                <h4>{title}</h4>
                <h3>{text || '-'}</h3>
            </div>
        </div>
    );
};
