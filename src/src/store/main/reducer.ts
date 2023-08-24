import { IAction } from '../../interfaces';
import { initialState } from './initialState';
import { GET_COMMING_SOON, GET_LOGIN, GET_LOGO, GET_REGISTER } from './action-types';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tMainAction } from './types';

const mainPersistConfig = {
    key: 'mainState',
    storage: storage,
    whitelist: [],
};

const main = (state = initialState, action: IAction<tMainAction>) => {
    switch (action.type) {
        case GET_COMMING_SOON: {
            return { ...state, comming_soon: action.payload?.comming_soon };
        }
        case GET_LOGO: {
            return { ...state, logo: action.payload?.logo };
        }
        case GET_LOGIN: {
            return { ...state, login: action.payload };
        }
        case GET_REGISTER: {
            return { ...state, register: action.payload };
        }
        default:
            return state;
    }
};

export const mainReducer = persistReducer<any>(mainPersistConfig, main);
