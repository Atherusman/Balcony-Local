import React from 'react';
import { AuthBtn } from '../auth-btn';
import googleIcon from 'src/assets/icons/google.svg';
import { useAppDispatch } from 'src/hooks';
import { redirectToGoogle } from 'src/store/user/reducer.actions';

export const GoogleBtn = () => {
    const dispatch = useAppDispatch();
    const handleLogin = () => {
        dispatch(redirectToGoogle());
    };

    return (
        <AuthBtn icon={googleIcon} onClick={handleLogin}>
            Google
        </AuthBtn>
    );
};
