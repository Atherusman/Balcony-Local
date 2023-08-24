import { FC, useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'src/hooks';
import { IconArrow } from 'src/icons';
import './BaseSelect.scss';

type tSelect = {
    id: string;
    name: string;
}[];

interface IProps {
    selectedValue: string;
    items: tSelect;
    onClick: (arg: string) => void;
    additionText?: string;
    size?: string;
}

export const BaseSelect: FC<IProps> = ({
    items,
    selectedValue,
    onClick,
    additionText,
    size = 'm',
}) => {
    const [openSelect, setOpenSelect] = useState<boolean>(false);
    const selectClickHandler = () => setOpenSelect(prevState => !prevState);
    const nodeRef = useRef<HTMLDivElement | null>(null);

    const [value, setValue] = useState<string>('');

    useEffect(() => {
        items.forEach(el => {
            el.id === selectedValue && setValue(el.name);
        });
    }, [selectedValue]);

    useOnClickOutside(nodeRef, () => setOpenSelect(false));

    return (
        <div className="base-select">
            {additionText && <h4 className="base-select__addition">{additionText}</h4>}
            <div ref={nodeRef} className="base-select__content">
                <div
                    onClick={selectClickHandler}
                    className={`base-select__select base-select__select--${size}`}
                >
                    <h4 className="base-select__select-input">{value}</h4>
                    <span
                        className={`base-select__select-icon ${
                            openSelect && 'base-select__select-icon--open'
                        }`}
                    >
                        <IconArrow />
                    </span>
                </div>
                <div className={`dropdown dropdown--${openSelect ? 'open' : 'close'}`}>
                    <ul className="dropdown__list">
                        {items.map((el, index) => {
                            return (
                                <li key={`select-item-${el.name + index}`}>
                                    <button
                                        className={`dropdown__list_item ${
                                            selectedValue === el.id && 'dropdown__list_item--active'
                                        }`}
                                        onClick={() => {
                                            onClick(el.id);
                                            setOpenSelect(false);
                                        }}
                                    >
                                        {el.name}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};
