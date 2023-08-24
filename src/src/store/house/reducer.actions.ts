import { Dispatch } from 'redux';
import { apiClient } from 'src/api';
import { GET_HOUSE } from './action-types';
import { tHouseAction } from './types';

export const changeHouseData = (data: tHouseAction) => {
    return {
        type: GET_HOUSE,
        payload: data,
    };
};

export const getHouseAsync =
    ({
        municipality_code,
        property_location_id,
    }: {
        municipality_code: string | undefined;
        property_location_id: string | undefined;
    }) =>
    async (dispatch: Dispatch) => {
        console.log(
            'municipality_code',
            municipality_code,
            'property_location_id',
            property_location_id
        );
        try {
            const formData = new FormData();
            if (municipality_code && property_location_id) {
                formData.append('MUN_CODE_ID', municipality_code);
                formData.append('PROPERTY_LOCATION_ID', property_location_id);
            }

            const { data } = await apiClient.post(`/get_asset/`, formData);
            console.log('single_house', data);
            dispatch(changeHouseData(data[0]));
        } catch (e) {
            console.log(e);
        }
    };
