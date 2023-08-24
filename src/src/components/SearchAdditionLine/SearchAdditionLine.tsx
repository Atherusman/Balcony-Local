import './SearchAdditionLine.scss';
import { FC, ChangeEvent } from 'react';
import { MainInput } from 'src/components';
import { tSearchData, tInfo } from 'src/types';

interface IProps extends tSearchData {
    onChangeInfo: ({ key, val }: tInfo) => void;
}
export const SearchAdditionLine: FC<IProps> = ({
    // owner_name,
    // block,
    // lot,
    // qualifier,
    // tax,
    onChangeInfo,
}) => {
    // const inputs = [
    //     { placeholder: 'Start type name', label: 'Owner Name', key: 'owner_name' },
    //     { placeholder: 'Enter block number', label: 'Block', key: 'block' },
    //     { placeholder: 'Enter lot number', label: 'Lot', key: 'lot' },
    //     { placeholder: 'Enter a qualifier', label: 'Qualifier', key: 'qualifier' },
    //     { placeholder: 'Enter an ID', label: 'Tax Account ID', key: 'tax' },
    // ];
    return (
        <div className="search-line">
            {/* <MainInput
                placeholder="Start type name"
                label="Owner Name"
                value={owner_name}
                onChangeValue={(val: string) => onChangeInfo({ key: 'owner_name', val })}
            />
            <MainInput
                placeholder="Enter block number"
                label="Block"
                value={block}
                onChangeValue={(val: string) => onChangeInfo({ key: 'block', val })}
            />
            <MainInput
                placeholder="Enter lot number"
                label="Lot"
                value={lot}
                onChangeValue={(val: string) => onChangeInfo({ key: 'lot', val })}
            />
            <MainInput
                placeholder="Enter a qualifier"
                label="Qualifier"
                value={qualifier}
                onChangeValue={(val: string) => onChangeInfo({ key: 'qualifier', val })}
            />
            <MainInput
                placeholder="Enter an ID"
                label="Tax Account ID"
                value={tax}
                onChangeValue={(val: string) => onChangeInfo({ key: 'tax', val })}
            /> */}
        </div>
    );
};
