import './SearchHeaderLine.scss';

import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { tInfo, tSearchData } from 'src/types';
import { MainButton } from '../Buttons';
import { SearchAdditionLine } from '../SearchAdditionLine';
import { SearchMainLine } from '../SearchMainLine';
import { IconSearch } from 'src/icons';
import { getAddresses } from 'src/api';
import { useAppDispatch } from 'src/hooks';
import { getHousesAsync } from 'src/store';
import { Routes as R } from 'src/constants';
import { Loader } from 'src/components';

interface IProps {
    muncipality_code?: string | null;
}

export const SearchHeaderLine: FC<IProps> = ({ muncipality_code }) => {
    const dispatch = useAppDispatch();

    const [isHide, setIsHide] = useState<boolean>(true);
    const [isNewData, setIsNewData] = useState<boolean>(false);
    // const [data, setData] = useState<tSearchData>(query);
    const [loading, setLoading] = useState<boolean>(false);
    const [addresses, setAddresses] = useState<string[] | []>([]);
    const [fullLoading, setFullLoading] = useState<boolean>(false);

    const updateAddresses = async (val: string) => {
        if (muncipality_code) {
            setLoading(true);
            await getAddresses({ municipality_slug: muncipality_code, text: val })
                .then(({ data }) => {
                    setAddresses(data.response);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    const findAddresses = async (val: string) => {
        const timeoutID = setTimeout(() => {
            if (val.length > 2) {
                updateAddresses(val);
            }
        }, 500);

        return () => {
            clearTimeout(timeoutID);
        };
    };

    // const checkData = () => {
    //     setIsNewData(
    //         query.address !== data.address ||
    //             query.block !== data.block ||
    //             query.lot !== data.lot ||
    //             query.owner_name !== data.owner_name ||
    //             query.qualifier !== data.qualifier ||
    //             query.tax !== data.tax
    //     );
    // };
    const getHouses = async () => {
        if (isNewData && muncipality_code) {
            setFullLoading(true);
            await dispatch(
                getHousesAsync({
                    muncipality_code,
                })
            );
            setFullLoading(false);
        }
    };
    // useEffect(() => {
    //     setData({ ...query, page: 1 });
    // }, [query]);

    // useEffect(() => {
    //     // checkData();
    // }, [data]);

    return (
        <div className="search-header">
            <div className="search-header__content container">
                <div className="search-header__content_small">
                    <SearchMainLine
                        items={addresses}
                        loading={loading}
                        // value={data.address}
                        onSelect={(val: string) => {
                            // setData(prev => ({ ...prev, address: val }));
                            findAddresses(val);
                        }}
                        value={''}
                    />
                </div>
                <div
                    className={`search-header__content_big search-header__content_big--${
                        isHide ? 'hide' : 'show'
                    }`}
                >
                    {/* <SearchAdditionLine
                        {...data}
                        onChangeInfo={(val: tInfo) =>
                            setData(prev => ({ ...prev, [val.key]: val.val }))
                        }
                    /> */}
                </div>
                <div className="search-header__content_buttons">
                    <MainButton
                        buttonType="icon"
                        onClick={() => getHouses()}
                        disabled={loading || fullLoading || !isNewData}
                    >
                        {fullLoading ? (
                            <Loader color="white" />
                        ) : (
                            <>
                                <span className="text">Search</span>
                                <IconSearch />
                            </>
                        )}
                    </MainButton>
                    <MainButton
                        buttonType="primary"
                        buttonColor="white"
                        onClick={() => setIsHide(!isHide)}
                    >
                        {isHide ? 'Show More' : 'Hide'}
                    </MainButton>
                </div>
            </div>
        </div>
    );
};
