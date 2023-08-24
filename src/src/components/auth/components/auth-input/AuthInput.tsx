import React, { FC, useState } from 'react';
import { MainInput } from '../../../Inputs';
import { IMainInput } from 'src/interfaces';
import passVisible from 'src/assets/icons/pass-vis.svg';
import passHidden from 'src/assets/icons/pass-hid.svg';

export const AuthInput: FC<IMainInput> = ({ label, type, onBlur, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [focused, setFocused] = useState(false);
    const isPassword = type === 'password';

    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setFocused(false);
        onBlur && onBlur(event);
    };

    return (
        <div className={`auth-input-wrap  ${focused ? 'focused_auth_input' : ''}`}>
            <span>{label}</span>
            <MainInput
                addClass={`auth-input`}
                {...props}
                type={inputType}
                changeFocus={handleFocus}
                onBlur={handleBlur}
            />
            {isPassword && (
                <div
                    className="auth-password_icon"
                    onClick={() => {
                        setShowPassword(prevState => !prevState);
                    }}
                >
                    <img src={showPassword ? passVisible : passHidden} alt="" />
                </div>
            )}
        </div>
    );
};
