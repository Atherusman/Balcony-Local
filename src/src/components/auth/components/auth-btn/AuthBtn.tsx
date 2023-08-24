import React, { FC } from 'react';
import { tButton } from 'src/interfaces';
import './auth-btn.scss';

interface IProps extends tButton {
    children: React.ReactNode | string;
    icon?: string;
}

export const AuthBtn: FC<IProps> = ({ children, icon, ...props }) => {
    return (
        <button className="auth-btn" {...props}>
            <img src={icon} alt="" />
            <div>{children}</div>
        </button>
    );
};
