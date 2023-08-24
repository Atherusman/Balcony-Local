import { tSearchData, tHouseSmall } from 'src/types';

export type tHousesAction = {
    query: tSearchData;
    data: tHouseSmall[];
    count: number;
    has_more: boolean;
    sort: string;
};
