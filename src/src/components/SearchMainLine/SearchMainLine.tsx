import './SearchMainLine.scss';

import { FC, useState, useRef } from 'react';
import { Loader, MainInput } from 'src/components';
import { IconClose, IconPoint } from 'src/icons';

import { useOnClickOutside } from 'src/hooks';
interface IProps {
    loading?: boolean;
    value: string;
    items: string[];
    label?: string;
    onSelect: (val: string) => void;
}
export const SearchMainLine: FC<IProps> = ({
    loading = false,
    // value,
    items,
    label = 'Address',
    onSelect,
}) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const nodeRef = useRef<HTMLElement | any>();
    useOnClickOutside(nodeRef, () => setIsFocus(false));

    return (
        <div className="search-address" ref={nodeRef}>
            <MainInput
                // value={value}
                value={''}
                placeholder="Search an address"
                label={label}
                sufix={loading ? <Loader /> : ''}
                isFocus={isFocus}
                changeFocus={(focus: boolean) => setIsFocus(focus)}
                onChangeValue={(val: string) => onSelect(val)}
            />
            {isFocus && items.length > 0 && (
                <div className="search-address__select">
                    <div className="search-address__select_content">
                        {items.map((el, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className="search-address__select_content-item"
                                    onClick={() => {
                                        onSelect(el);
                                        setIsFocus(false);
                                    }}
                                >
                                    <h5>{el}</h5>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};
