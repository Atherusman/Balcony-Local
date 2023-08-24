import { Dispatch } from 'redux';
import { apiClient } from 'src/api';
import { tHouseSmall, tSearchData } from 'src/types';
import { GET_ALL_HOUSES, CLEAR_QUERY } from './action-types';
import { tHousesAction } from './types';

export const changeHousesData = (data: tHouseSmall[]) => {
    return {
        type: GET_ALL_HOUSES,
        payload: data,
    };
};

export const getHousesAsync =
    ({ muncipality_code }: tSearchData) =>
    async (dispatch: Dispatch) => {
        // let queryString = '';
        // Object.keys(query).map(objKey => {
        //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //     // @ts-ignore
        //     queryString += query[objKey] ? `${objKey}=${query[objKey]}&` : '';
        // });
        try {
            // const { data } = await apiClient.get(`/search?${queryString}`);
            const formData = new FormData();
            formData.append('MUN_CODE_ID', muncipality_code);
            const { data } = await apiClient.post(`/get_asset_limit/`, formData);
            console.log(`houses_data`, data);
            dispatch(changeHousesData(data));
        } catch (e) {
            console.log(e);
        }
    };

export const clearQuery = () => {
    return {
        type: CLEAR_QUERY,
    };
};
