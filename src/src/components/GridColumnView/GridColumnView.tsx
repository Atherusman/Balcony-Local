import './GridColumnView.scss';
import { FC, useState, useRef, useEffect } from 'react';
import { Card, Map } from 'src/components';
import { tHouseSmall } from 'src/types';
import { useUpdateEffect } from 'src/hooks';

interface IProps {
    municipality?: string;
    items: tHouseSmall[] | [];
    reNFT?: boolean;
    className?: 'fixed' | 'relative';
    onGetStartPosition: (arg: number) => void;
}
export const GridColumnView: FC<IProps> = ({
    municipality,
    items,
    reNFT,
    className = 'relative',
    onGetStartPosition,
}) => {
    const [activePin, setActivePin] = useState<number>(0);
    const mapDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mapDiv.current != null) {
            onGetStartPosition(mapDiv?.current?.getBoundingClientRect().top);
        }
    }, []);

    return (
        <div className="grid-map">
            <div className="grid-map__grid">
                <div className="grid-map__grid_cards">
                    {items.length > 0 &&
                        items.map((el, id) => {
                            return (
                                <div
                                    key={`card-${el.MUNICIPALITY_CODE}-${id}`}
                                    className="grid-map__grid_cards-item"
                                >
                                    <Card
                                        item={el}
                                        reNFT={reNFT}
                                        changeHoverCard={(id: number) => setActivePin(id)}
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>
            <div className={`grid-map__map grid-map__map--${className}`} ref={mapDiv}>
                <Map items={items} activePin={activePin} municipality={municipality} />
            </div>
        </div>
    );
};
