import './BackButton.scss';

import { FC } from 'react';
import { IconArrow } from 'src/icons';
import { tButton } from 'src/interfaces';

interface IProps extends tButton {
    text: string;
    onClick: () => void;
}

export const BackButton: FC<IProps> = ({ text, onClick }) => {
    return (
        <button className="back-button" onClick={() => onClick()}>
            <IconArrow width={32} height={32} /> <h4>{text}</h4>
        </button>
    );
};
