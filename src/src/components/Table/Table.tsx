import './Table.scss';

import { FC, ReactNode } from 'react';
import { TableHeader } from './TableHeader';

interface IProps {
    collums: { header: string; key: string; type: string }[];
    className?: string;
    children: ReactNode;
}

export const Table: FC<IProps> = ({ collums, className, children }) => {
    return (
        <div className={`table table--${className}`}>
            <table>
                <TableHeader collums={collums} />
                <tbody>{children}</tbody>
            </table>
        </div>
    );
};
