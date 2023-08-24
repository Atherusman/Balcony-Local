import { FC } from 'react';
import './Tabs.scss';
import { tTab } from 'src/types';

interface IProps {
    active: string;
    tabs: tTab[];
    onSelect: (val: tTab) => void;
}

export const Tabs: FC<IProps> = ({ active, tabs, onSelect }) => {
    return (
        <div className="tabs">
            {tabs.map(el => {
                return (
                    <div
                        key={el.key}
                        className={`tabs__item ${active === el.key && 'tabs__item--active'}`}
                        onClick={() => onSelect(el)}
                    >
                        <h4 className="tabs__item_content">{el.title}</h4>
                    </div>
                );
            })}
        </div>
    );
};
