import { Dispatch } from 'redux';
import { apiClient } from 'src/api';
import { GET_MUNICIPALITIES, GET_MUNICIPALITY } from './action-types';
import { tMunicipalitiesAction, tMunicipalityAction } from './types';

export const changeMunicipalitiesData = (data: tMunicipalitiesAction) => {
    return {
        type: GET_MUNICIPALITIES,
        payload: {
            data,
        },
    };
};

export const changeMunicipalityData = (data: tMunicipalityAction) => {
    return {
        type: GET_MUNICIPALITY,
        payload: {
            data,
        },
    };
};

export const getMunicipalitiesAsync = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await apiClient.get(`/municipalities`);
        dispatch(changeMunicipalitiesData(data));
    } catch (e) {
        console.log(e);
    }
};

export const getMunicipalityAsync =
    ({
        municipality_code,
        property_location_id,
    }: {
        municipality_code: string;
        property_location_id: string | undefined;
    }) =>
    async (dispatch: Dispatch) => {
        try {
            if (municipality_code && property_location_id) {
                const formData = new FormData();
                formData.append('MUN_CODE_ID', municipality_code);
                formData.append('PROPERTY_LOCATION_ID', property_location_id);
            }

            const { data } = await apiClient.get(`/get_asset`);
            console.log('single_house', data);
            dispatch(changeMunicipalityData(data.response));
        } catch (e) {
            console.log(e);
        }
    };
