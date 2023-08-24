import React from 'react';
import { AuthBtn } from '../auth-btn';
import metamask from 'src/assets/icons/metamask.svg';
import { useAppDispatch } from 'src/hooks';
import { loginMetamask } from 'src/store/user/reducer.actions';
import { useNavigate } from 'react-router-dom';
import { Routes as R } from 'src/constants';

export const MetamaskBtn = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onPressConnect = async () => {
        dispatch(
            loginMetamask(() => {
                navigate(R.PROFILE);
            })
        );
    };

    return (
        <AuthBtn icon={metamask} onClick={onPressConnect}>
            MetaMask
        </AuthBtn>
    );
};
