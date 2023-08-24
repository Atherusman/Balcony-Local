import './Map.scss';
import { FC, useState, useRef } from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { Card } from '../Cards/Card';
import { useOnClickOutside } from 'src/hooks';
import { tCoord, tHouseSmall } from 'src/types';
import pinViolet from 'src/assets/images/pinViolet.svg';
import pinBlack from 'src/assets/images/pinBlack.svg';
import pinMViolet from 'src/assets/images/pinMViolet.svg';
import pinMBlack from 'src/assets/images/pinMBlack.svg';

interface IProps {
    municipality?: string;
    position: tCoord;
    activePin: number;
    item: tHouseSmall;
    clusterer?: any;
    clickable?: boolean;
}
export const MarkerOnMap: FC<IProps> = ({
    municipality,
    activePin,
    position,
    item,
    clusterer,
    clickable = true,
}) => {
    const nodeRef = useRef<HTMLDivElement | null>(null);
    const [isHover, setIsHover] = useState<boolean>(false);
    useOnClickOutside(nodeRef, () => setIsHover(false));
    return (
        <Marker
            position={position}
            clusterer={clusterer}
            clickable={clickable}
            // icon={
            //     item.is_verified && activePin === item.id
            //         ? pinMViolet
            //         : item.is_verified
            //         ? pinViolet
            //         : !item.is_verified && activePin === item.id
            //         ? pinMBlack
            //         : pinBlack
            // }
            onMouseOver={() => {
                clickable && setIsHover(true);
            }}
        >
            {isHover ? (
                <InfoWindow position={position} onCloseClick={() => setIsHover(false)}>
                    <div className="marker__card">
                        <Card item={item} designType="small" />
                    </div>
                </InfoWindow>
            ) : null}
        </Marker>
    );
};
