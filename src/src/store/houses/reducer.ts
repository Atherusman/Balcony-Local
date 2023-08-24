import { IAction } from '../../interfaces';
import { initialState } from './initialState';
import { GET_ALL_HOUSES, CLEAR_QUERY } from './action-types';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tHousesAction } from './types';

const housesPersistConfig = {
    key: 'housesState',
    storage: storage,
    whitelist: [],
};

const houses = (state = initialState, action: IAction<tHousesAction>) => {
    switch (action.type) {
        case GET_ALL_HOUSES: {
            return {
                ...state,
                houses:action.payload
                // query: action.payload?.query,
                // houses:
                //     action.payload?.query.page === 1
                //         ? action.payload?.data
                //         : [...state.houses, ...(action.payload?.data || [])],
                // count: action.payload?.count,
                // has_more: action.payload?.has_more,
                // sort: action.payload?.sort,
            };
        }
        case CLEAR_QUERY: {
            return {
                ...state,
                query: { address: '', owner_name: '', block: '', lot: '', qualifier: '', tax: '' },
            };
        }

        default:
            return state;
    }
};

export const housesReducer = persistReducer<any>(housesPersistConfig, houses);
