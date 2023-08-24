import { FC } from 'react';

interface IProps {
    collums: { header: string; key: string; type: string; class?: string }[];
}
export const TableHeader: FC<IProps> = ({ collums }) => {
    return (
        <thead>
            <tr>
                {collums.map(column => (
                    <th key={`table-column-${column.header}`} className={column.class}>
                        {column.header}
                    </th>
                ))}
            </tr>
        </thead>
    );
};
