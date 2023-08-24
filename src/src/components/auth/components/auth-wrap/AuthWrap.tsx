import React, { FC } from 'react';
import { GoogleBtn } from '../google-btn';
import { MetamaskBtn } from '../metamask-btn';
import { useAppSelector } from 'src/hooks';
import './auth-wrap.scss';

type tProps = {
    children: React.ReactNode;
    header: React.ReactNode;
};

export const AuthWrap: FC<tProps> = ({ children, header }) => {
    const errors = useAppSelector(state => state.userReducer.errors.socials);
    return (
        <div className="auth-content">
            <div className="auth-header">{header}</div>
            <div className="auth-header"></div>
            <div className="auth-buttons">
                <GoogleBtn />
                <MetamaskBtn />
            </div>
            <p className="auth-social-error">{errors}</p>
            <div className={'auth-or'}>
                <span>or</span>
            </div>
            {children}
        </div>
    );
};
