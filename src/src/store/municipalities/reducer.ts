import { IAction } from '../../interfaces';
import { initialState } from './initialState';
import { GET_MUNICIPALITIES, GET_MUNICIPALITY } from './action-types';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tMunicipalitiesAction } from './types';

const municipalitiesPersistConfig = {
    key: 'manicipalitiesState',
    storage: storage,
    whitelist: [],
};

const municipalities = (state = initialState, action: IAction<tMunicipalitiesAction>) => {
    switch (action.type) {
        case GET_MUNICIPALITIES: {
            return {
                ...state,
                municipalities: action.payload?.data,
            };
        }
        case GET_MUNICIPALITY: {
            return {
                ...state,
                municipality: action.payload?.data,
            };
        }

        default:
            return state;
    }
};

export const municipalitiesReducer = persistReducer<any>(
    municipalitiesPersistConfig,
    municipalities
);
