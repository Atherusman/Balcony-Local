import { FC } from 'react';
import moment from 'moment';
import { LinkButton, Tag } from 'src/components';
import { GREEN, GREEN_LIGHT, YELLOW, YELLOW_LIGHT } from 'src/constants';

type tRow = {
    id: string;
    total_year?: string;
    due_date?: string;
    year: string;
    type?: string;
    billed: string;
    ballance: string;
    interest: string;
    total_due: string;
    status?: 'open' | 'paid';
    tx?: string;
};
interface IRow extends tRow {
    className?: string;
}
interface IProps {
    id: string;
    total?: string;
    year: string;
    billed: string;
    ballance: string;
    interest: string;
    total_due: string;
    data: tRow[];
}
const Row: FC<IRow> = ({
    id,
    year,
    total_year = '',
    due_date = '',
    type = '',
    billed,
    ballance,
    interest,
    total_due,
    tx = '',
    status = '',
    className,
}) => {
    return (
        <tr className={className}>
            <td key={`cell-${id}-year`} width="115px">
                {year && <span className="outline">{year}</span>}
            </td>
            <td key={`cell-${id}-due_date`}>
                <h3 className="light">
                    {due_date ? moment(due_date).format('MM/DD/YY') : total_year}
                </h3>
            </td>
            <td key={`cell-${id}-type`}>
                <h3 className="text">{type}</h3>
            </td>
            <td key={`cell-${id}-billed`}>
                <h3 className="title">{billed}</h3>
            </td>
            <td key={`cell-${id}-ballance`}>
                <h3 className="title">{ballance}</h3>
            </td>
            <td key={`cell-${id}-interest`}>
                <h3 className="title">{interest}</h3>
            </td>
            <td key={`cell-${id}-total_due`}>
                <h3 className="title">{total_due}</h3>
            </td>
            <td key={`cell-${id}-tx`}>
                <LinkButton text={tx} onClick={() => console.log('hello')} />
            </td>
            <td key={`cell-${id}-status`} width="115px">
                {status && (
                    <Tag
                        size="s"
                        text={status}
                        bgColor={status === 'open' ? YELLOW_LIGHT : GREEN_LIGHT}
                        textColor={status === 'open' ? YELLOW : GREEN}
                    ></Tag>
                )}
            </td>
        </tr>
    );
};
export const TaxesBlock: FC<IProps> = ({
    id,
    year,
    billed,
    ballance,
    interest,
    total_due,
    data,
}) => {
    return (
        <>
            <Row
                id={id}
                total_year="Total Year"
                year={year}
                billed={billed}
                ballance={ballance}
                interest={interest}
                total_due={total_due}
                className="violet"
            />
            {data.map((el, id) => {
                return <Row key={`${year}-taxes-${id}`} {...el} className="small" />;
            })}
        </>
    );
};
