import { FC } from 'react';
import './MunicipalityLogo.scss';

interface IProps {
    logo: string;
    text: string;
}

export const MunicipalityLogo: FC<IProps> = ({ logo, text }) => {
    return (
        <div className="municipality-logo container">
            <img src={logo} alt="logo" />
            <h2>{text}</h2>
        </div>
    );
};
