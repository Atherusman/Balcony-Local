import moment from 'moment';
import { FC } from 'react';
import { LinkButton } from 'src/components';
import { VIOLET } from 'src/constants';
import { IconArrow } from 'src/icons';
import { tSaleInfo } from 'src/types';

interface IProps extends tSaleInfo {
    onClick: () => void;
}
export const SaleInfoRow: FC<IProps> = ({
    id,
    date,
    book,
    page,
    price,
    nu,
    ratio,
    grantee,
    onClick,
}) => {
    return (
        <tr className="small">
            <td key={`cell-${id}-date`}>
                <h3 className="light">{(date && moment(date).format('MM/DD/YY')) || '-'}</h3>
            </td>
            <td key={`cell-${id}-book`}>
                <h3 className="text">{book || '-'}</h3>
            </td>
            <td key={`cell-${id}-page`}>
                <h3 className="text">{page || '-'}</h3>
            </td>
            <td key={`cell-${id}-price`}>
                <h3 className="text">{price || '-'}</h3>
            </td>
            <td key={`cell-${id}-nu`}>
                <h3 className="text">{nu || '-'}</h3>
            </td>
            <td key={`cell-${id}-ratio`}>
                <h3 className="title">{ratio || '-'}</h3>
            </td>
            <td key={`cell-${id}-grantee`} width="300px">
                <h3 className="light">{grantee || '-'}</h3>
            </td>
            <td key={`cell-${id}-status`} width="108px">
                <LinkButton
                    text="More Info"
                    className="link-button--simple"
                    onClick={() => {
                        onClick();
                    }}
                >
                    <span style={{ transform: 'rotate(180deg)' }}>
                        <IconArrow color={VIOLET} />
                    </span>
                </LinkButton>
            </td>
        </tr>
    );
};
