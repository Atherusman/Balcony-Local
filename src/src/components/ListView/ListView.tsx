import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Table } from 'src/components';
import { tHouseSmall } from 'src/types';
import { Routes as R } from 'src/constants';

import { HOUSES_COLUMNS } from 'src/mockData/tables';
import { TableRow } from './TableRow';

interface IProps {
    muncipality_code?: string;
    items: tHouseSmall[];
}

export const ListView: FC<IProps> = ({ items }) => {
    const navigate = useNavigate();
    return (
        <div>
            <Table collums={HOUSES_COLUMNS}>
                {items?.map(row => {
                    return (
                        <TableRow
                            {...row}
                            key={`row-${row.MUNICIPALITY_CODE}`}
                            className="pointer"
                            onClick={() =>
                                navigate(
                                    `/municipality/${row.MUNICIPALITY_CODE}/${row.PROPERTY_LOCATION_ID}`
                                )
                            }
                        />
                    );
                })}
            </Table>
        </div>
    );
};
