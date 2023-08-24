import { TAX_HISTORY_COLUMNS } from '../../data';
import { Table } from 'src/components';
import { TaxListHistoryRow } from '../TableRow';

import { FC } from 'react';
import { tHistory } from 'src/types';

interface IProps {
    history: tHistory[];
}

export const HistoryModal: FC<IProps> = ({ history }) => {
    return (
        <div className="sale-info">
            <h2>Tax List History</h2>
            <div className="sale-info__block">
                <div className="sale-info__block_grid">
                    <Table collums={TAX_HISTORY_COLUMNS}>
                        {history?.map((row: tHistory) => {
                            return (
                                <TaxListHistoryRow
                                    key={`tax-row-${row.year}-${row.land_assmnt}`}
                                    {...row}
                                />
                            );
                        })}
                    </Table>
                </div>
            </div>
        </div>
    );
};
