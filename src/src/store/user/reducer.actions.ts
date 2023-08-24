import { Dispatch } from 'redux';
import { LOGIN_USER, SET_LOGIN_ERR, GET_USER } from './action-types';
import { tUserValues, tUserAction, tRegisterUserValues } from './types';
import { apiClient } from '../../api';
import { setLoginModal } from '../main';
import { ethers } from 'ethers';
import { tInfiniteScroll } from 'src/types';
import { Routes as R } from '../../../src/constants';
export const loginUser = (payload: any) => {
    return {
        type: LOGIN_USER,
        payload: payload,
    };
};

export const setLoginError = (payload: any) => {
    return {
        type: SET_LOGIN_ERR,
        payload: payload,
    };
};

export const changeUserData = (data: tUserAction) => {
    return {
        type: GET_USER,
        payload: {
            data,
        },
    };
};

const dispatchUserData = (response: any) => async (dispatch: Dispatch) => {
    dispatch(loginUser({ user: response.user, token: response.access_token }));
    dispatch(setLoginModal(false));
    localStorage.setItem('jwtToken', response.access_token);
};

export const RegisterByEmail =
    (values: tRegisterUserValues, callback: () => void, handleClose: () => void) =>
    async (dispatch: Dispatch) => {
        try {
            const formData = new FormData();

            await apiClient.post(`/register/`, values);

            formData.append('email', values.email);
            const user = await apiClient.post(`/get_user_info/`, formData);

            formData.delete('email');
            formData.append('user_id', values.user_id);
            formData.append('org_code', values.org_code);
            const { data } = await apiClient.post(`/authenticate/`, formData);
            console.log('register_data', data);
            const response = {
                user,
                access_token: data.access_token,
            };
            dispatch(dispatchUserData(response));
            handleClose();
            callback && callback();
        } catch (err: any) {
            console.log(err);
            if (err.status === 422) {
                const errors = err.data.errors || {};

                const toState = {
                    email: errors.email?.[0] || null,
                    password: errors.password?.[0] || null,
                };

                dispatch(setLoginError(toState));
            }
        }
    };

export const loginByEmail =
    (values: tUserValues, callback: () => void) => async (dispatch: Dispatch) => {
        try {
            const formData = new FormData();
            formData.append('email', values.email);
            formData.append('password', values.password);
            console.log('form_data', formData);
            await apiClient.post(`/login/`, formData);

            formData.delete('password');
            const user = await apiClient.post(`/get_user_info/`, formData);

            formData.delete('email');
            formData.append('user_id', user?.data.user_id);
            formData.append('org_code', user?.data.org_code);
            const { data } = await apiClient.post(`/authenticate/`, formData);

            console.log('data_from_response', data);
            const response = {
                user,
                access_token: data.access_token,
            };
            dispatch(dispatchUserData(response));
            callback && callback();
        } catch (err: any) {
            console.log(err);
            if (err.status === 422) {
                const errors = err.data.errors || {};

                const toState = {
                    email: errors.email?.[0] || null,
                    password: errors.password?.[0] || null,
                };

                dispatch(setLoginError(toState));
            }
        }
    };

export const logOut = (navigate: (path: string) => void) => async (dispatch: Dispatch) => {
    try {
        await apiClient.post('/user_logout/');
        dispatch(loginUser({ user: null, token: null }));
        localStorage.removeItem('jwtToken');
        navigate(R.MAIN);
    } catch (err) {
        console.log(err);
    }
};

export const getUserAsync = (query: tInfiniteScroll) => async (dispatch: Dispatch) => {
    let queryString = '';
    Object.keys(query).map(objKey => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        queryString += query[objKey] ? `${objKey}=${query[objKey]}&` : '';
    });

    try {
        const { data } = await apiClient.get(`/profile?${queryString}`);
        dispatch(changeUserData({ ...data.response, page: query.page }));
        dispatch(
            loginUser({ user: data.response.profile, token: localStorage.getItem('jwtToken') })
        );
    } catch (e) {
        console.log(e);
    }
};

export const redirectToGoogle = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await apiClient.get(`/login/google`);
        const { response } = data;
        window.location.href = response;
    } catch (err: any) {
        console.log(err);
    }
};

export const redirectByGoogle =
    (
        search: string,
        callbacks: {
            success: () => void;
            error: () => void;
        }
    ) =>
    async (dispatch: Dispatch) => {
        try {
            const { data } = await apiClient.get(`/login/google/callback${search}`);
            const { response } = data;
            dispatch(dispatchUserData(response));
            callbacks.success();
        } catch (err: any) {
            console.log(err);

            if (err.status === 422) {
                const messages = err.data?.errors?.email || [];

                const toState = {
                    socials: messages[0] || null,
                };
                dispatch(setLoginModal(true));
                dispatch(setLoginError(toState));
            }
            callbacks.error();
        }
    };

export const loginMetamask = (callback: () => void) => async (dispatch: Dispatch) => {
    interface CustomWindow extends Window {
        ethereum?: any;
    }

    const windowWithEth = window as CustomWindow;

    if (!windowWithEth.ethereum) {
        dispatch(
            setLoginError({ socials: 'MetaMask not detected. Please install MetaMask first.' })
        );
    } else {
        try {
            const provider = new ethers.BrowserProvider(windowWithEth.ethereum);
            const signer = await provider.getSigner();

            const { data } = await apiClient.get(`login/metamask/message/${signer.address}`);

            const signature = await signer.signMessage(data.response);

            const result = await apiClient.post(`login/metamask/verify`, {
                address: signer.address,
                signature: signature,
            });

            const { response } = result.data;

            dispatch(dispatchUserData(response));
            callback();
        } catch (err: any) {
            if (err.status === 422) {
                const messages = err.data?.errors?.metamask_wallet_id || [];

                const toState = {
                    socials: `${messages[0] || ''} Please switch account and try again`,
                };
                dispatch(setLoginError(toState));
            }
        }
    }
};
