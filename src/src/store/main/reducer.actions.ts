import { Dispatch } from 'redux';
import { GET_COMMING_SOON, GET_LOGIN, GET_LOGO, GET_REGISTER } from './action-types';
import { tMainAction } from './types';
import { apiClient } from 'src/api';

export const changeCommingSoon = (main: tMainAction) => {
    return {
        type: GET_COMMING_SOON,
        payload: {
            comming_soon: main.comming_soon,
        },
    };
};

export const changeLogo = (main: tMainAction) => {
    return {
        type: GET_LOGO,
        payload: {
            logo: main.logo,
            code: main.code,
        },
    };
};

export const setLoginModal = (visible: boolean) => {
    return {
        type: GET_LOGIN,
        payload: visible,
    };
};
export const setRegisterModal = (visible: boolean) => {
    return {
        type: GET_REGISTER,
        payload: visible,
    };
};

export const getCommingSoon = (comming_soon: boolean) => (dispatch: Dispatch) => {
    dispatch(changeCommingSoon({ comming_soon }));
};

export const getLogo = (code: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await apiClient.get(`/meta-data/${code}`);
        dispatch(changeLogo(data.response));
    } catch (e) {
        console.log(e);
    }
};
