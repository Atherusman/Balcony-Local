import { FC, useState } from 'react';
import { Tag, LinkButton, MainButton } from 'src/components';
import { IconFeature } from 'src/icons';

import { GREY700, VIOLET, WHITE } from 'src/constants';
import { dotsInText, copyText } from 'src/helpers';
import { tHouseSmall } from 'src/types';
import { useAppDispatch } from 'src/hooks';

import { getCommingSoon } from 'src/store';

interface IRow extends tHouseSmall {
    className?: string;
    onClick: () => void;
}

export const TableRow: FC<IRow> = ({
    ADDRESS1,
    ADDRESS2,
    TOWN,
    STATE_ABBR,
    ZIP5,
    ZIP4,
    COUNTY,
    PROPERTY_ID_BLK,
    PROPERTY_ID_LOT,
    MUNICIPALITY_CODE,
    PROPERTY_LOCATION_ID,
    pagination,
    onClick,
}) => {
    const dispatch = useAppDispatch();
    const [isHover, setIsHover] = useState(false);

    return (
        <tr
            // className={className}
            onClick={() => onClick()}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <td key={`cell-${MUNICIPALITY_CODE}-image`} width="108px">
                <div
                    className="image"
                    // style={{
                    //     backgroundImage: photos && photos.length > 0 ? `url(${photos[0]})` : '',
                    // }}
                />
            </td>
            <td key={`cell-${MUNICIPALITY_CODE}-address`}>
                <h3 className="title">{ADDRESS1 + ', ' + ADDRESS2}</h3>
            </td>
            <td key={`cell-${MUNICIPALITY_CODE}-owner`}>
                {/* <h3 className="text">{owner}</h3> */}
            </td>
            <td key={`cell-${MUNICIPALITY_CODE}-block`}>
                <h3 className="text">{PROPERTY_ID_BLK}</h3>
            </td>
            <td key={`cell-${MUNICIPALITY_CODE}-lot`}>
                <h3 className="text">{PROPERTY_ID_LOT}</h3>
            </td>
            <td key={`cell-${MUNICIPALITY_CODE}-class`}>
                {/* <h3 className="light">{estate_type || '-'}</h3> */}
            </td>
            <td key={`cell-${MUNICIPALITY_CODE}-recent_activity`}>
                {/* <h3 className="text">{recent_activity || '-'}</h3> */}
            </td>
            {/* <td key={`cell-${MUNICIPALITY_CODE}-hash`}>
                {hash ? (
                    <LinkButton
                        text={dotsInText(hash, 5)}
                        onClick={e => {
                            e.stopPropagation();
                            smart_contract_address
                                ? window.open(smart_contract_address, '_blank')
                                : copyText(hash);
                        }}
                    />
                ) : (
                    '-'
                )}
            </td>
            <td key={`cell-${id}-status`}>
                {isHover && !is_verified ? (
                    <MainButton
                        buttonType="primary"
                        buttonSize="s"
                        onClick={e => {
                            e.stopPropagation();
                            dispatch(getCommingSoon(true));
                        }}
                    >
                        Claim to Verify
                    </MainButton>
                ) : (
                    <Tag
                        bgColor={is_verified ? VIOLET : GREY700}
                        size="max"
                        textColor={WHITE}
                        text={is_verified ? 'Verified' : 'UNVerified'}
                        onClick={e => {
                            !is_verified && e.stopPropagation();
                            setIsHover(!isHover);
                        }}
                    ></Tag>
                )}
            </td>
            <td key={`cell-${id}-feature`} className="xs">
                {is_feature && <IconFeature />}
            </td> */}
        </tr>
    );
};
