import './GridView.scss';

import { FC } from 'react';
import { Card } from 'src/components';
import { tHouseSmall } from 'src/types';

interface IProps {
    reNFT?: boolean;
    items: tHouseSmall[] | [];
}
export const GridView: FC<IProps> = ({ items, reNFT }) => {
    return (
        <div className="grid">
            {items.length > 0 &&
                items.map((el, id) => {
                    return (
                        <div key={`card-${el.MUNICIPALITY_CODE}-${id}`} className="grid__item">
                            <Card item={el} reNFT={reNFT} />
                        </div>
                    );
                })}
        </div>
    );
};
