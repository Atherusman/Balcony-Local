import { IAction } from '../../interfaces';
import { initialState } from './initialState';
import { GET_HOUSE } from './action-types';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tHouseAction } from './types';

const housesPersistConfig = {
    key: 'housesState',
    storage: storage,
    whitelist: [],
};

const house = (state = initialState, action: IAction<tHouseAction>) => {
    // const attachments = action.payload?.data?.attachments
    //     ? Object.values(action.payload?.data?.attachments)
    //     : [];
    switch (action.type) {
        case GET_HOUSE: {
            return {
                ...state,
                house: { ...action.payload },
            };
        }

        default:
            return state;
    }
};

export const houseReducer = persistReducer<any>(housesPersistConfig, house);
