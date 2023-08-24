import './SearchMainSelect.scss';

import { FC, useState, useRef } from 'react';
import { IconArrow } from 'src/icons';

import { useOnClickOutside } from 'src/hooks';
import { tMunicipality } from 'src/types';
interface IProps {
    value: string;
    items: tMunicipality[];
    onSelect: (val: tMunicipality) => void;
}
export const SearchMainSelect: FC<IProps> = ({ value, items, onSelect }) => {
    const [openSelect, setOpenSelect] = useState<boolean>(false);
    const nodeRef = useRef<HTMLDivElement | null>(null);
    useOnClickOutside(nodeRef, () => setOpenSelect(false));

    return (
        <div className="search-city" ref={nodeRef} onClick={() => setOpenSelect(!openSelect)}>
            <div className="search-city__content">
                <p className="search-city__content_text">
                    {value ? value : 'Select a Municipality'}
                </p>
                <span
                    className={`search-city__content_icon ${
                        openSelect && 'search-city__content_icon--open'
                    }`}
                >
                    <IconArrow />
                </span>
            </div>
            {openSelect && items?.length > 0 && (
                <div className="search-city__select">
                    <div className="search-city__select_content">
                        {items.map((el, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className="search-city__select_content-item"
                                    onClick={() => {
                                        onSelect(el);
                                    }}
                                >
                                    <h5>{el.MUNICIPALITY_NAME}</h5>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};
