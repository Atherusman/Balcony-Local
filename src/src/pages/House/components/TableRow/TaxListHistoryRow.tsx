import { FC } from 'react';
import { tHistory } from 'src/types';

export const TaxListHistoryRow: FC<tHistory> = ({
    year,
    city_state_zip,
    land_assmnt,
    imp,
    total_assmnt,
    exempt,
    assessed,
    prop_class,
    additional_lots,
    deductions,
}) => {
    return (
        <tr className="small">
            <td key={`cell-${year}-${land_assmnt}-year`}>
                <h3 className="light">{year || '-'}</h3>
            </td>
            <td key={`cell-${year}-${land_assmnt}-city_state_zip`}>
                <h3 className="text">{city_state_zip || '-'}</h3>
            </td>
            <td key={`cell-${year}-${land_assmnt}-land_assmnt`}>
                <h3 className="title">{land_assmnt || '-'}</h3>
            </td>
            <td key={`cell-${year}-${land_assmnt}-imp`}>
                <h3 className="title">{imp || '-'}</h3>
            </td>
            <td key={`cell-${year}-${land_assmnt}-total_assmnt`}>
                <h3 className="title">{total_assmnt || '-'}</h3>
            </td>
            <td key={`cell-${year}-${land_assmnt}-exempt`}>
                <h3 className="text">{exempt || '-'}</h3>
            </td>
            <td key={`cell-${year}-${land_assmnt}-assessed`}>
                <h3 className="title">{assessed || '-'}</h3>
            </td>
            <td key={`cell-${year}-${land_assmnt}-prop_class`}>
                <h3 className="text">{prop_class || '-'}</h3>
            </td>
            <td key={`cell-${year}-${land_assmnt}-additional_lots`}>
                <h3 className="text">{additional_lots || '-'}</h3>
            </td>
            <td key={`cell-${year}-${land_assmnt}-deductions`}>
                <h3 className="text">{deductions || '-'}</h3>
            </td>
        </tr>
    );
};
