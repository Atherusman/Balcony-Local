import React, { useEffect } from 'react';
import { redirectByGoogle } from 'src/store/user/reducer.actions';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/hooks';
import { Routes as R } from 'src/constants';

export const GoogleCallback = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const successCallback = () => {
        navigate(R.PROFILE);
    };

    const errorCallback = () => {
        navigate(R.MAIN);
    };

    useEffect(() => {
        if (location.search) {
            dispatch(
                redirectByGoogle(location.search, {
                    success: successCallback,
                    error: errorCallback,
                })
            );
        }
    }, [location]);
    return <></>;
};
