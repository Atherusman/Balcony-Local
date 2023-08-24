import { IAction } from '../../interfaces';
import { initialState } from './initialState';
import { LOGIN_USER, SET_LOGIN_ERR, GET_USER } from './action-types';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userPersistConfig = {
    key: 'userState',
    storage: storage,
    whitelist: [],
};

const user = (state = initialState, { payload, type }: IAction<any>) => {
    switch (type) {
        case LOGIN_USER: {
            return { ...state, user: payload.user, token: payload.token };
        }
        case SET_LOGIN_ERR: {
            return { ...state, errors: { ...state.errors, ...payload } };
        }

        case GET_USER: {
            return {
                ...state,
                user: payload.data.profile,
                estates: {
                    ...payload.data.estates,
                    data:
                        payload?.data.page === 1
                            ? payload?.data.estates.data
                            : [...state.estates.data, ...(payload?.data.estates.data || [])],
                },
            };
        }

        default:
            return state;
    }
};

export const userReducer = persistReducer<any>(userPersistConfig, user);
