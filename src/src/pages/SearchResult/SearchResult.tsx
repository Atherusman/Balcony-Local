import './SearchResult.scss';

import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import InfiniteScroll from 'react-infinite-scroll-component';
import {
    GridColumnView,
    GridView,
    ListView,
    SearchHeaderLine,
    ViewSwitcher,
    BaseSelect,
    Loader,
    MunicipalityLogo,
} from 'src/components';

import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getHousesAsync, getMunicipalityAsync, clearQuery } from 'src/store';

import { tSearchData, tView } from 'src/types';

export const SearchResult = () => {
    const { muncipality_code } = useParams();

    const { municipality } = useAppSelector(state => state.municipalitiesReducer);
    console.log('param', useParams());
    console.log('muncipality_code', muncipality_code);
    const dispatch = useAppDispatch();
    const scrollableDiv = useRef<HTMLDivElement>(null);

    const { query, houses, has_more, count, loading } = useAppSelector(
        state => state.housesReducer
    );

    const [sort, setSort] = useState<string>('featured');
    const [view, setView] = useState<tView>('grid');
    const [mapPosition, setMapPosition] = useState<number>(0);
    const [mapClass, setMapClass] = useState<'fixed' | 'relative'>('relative');

    const selectData = [
        { id: 'featured', name: 'Featured' },
        { id: 'verified', name: 'Verified' },
        { id: 'recently_sold', name: 'Recently Sold' },
    ];
    const renderBody = () => {
        switch (view) {
            case 'grid':
                return <GridView items={houses} />;
            case 'gridColumn':
                return (
                    <GridColumnView
                        municipality={muncipality_code}
                        className={mapClass}
                        items={houses}
                        onGetStartPosition={val => setMapPosition(val)}
                    />
                );
            case 'list':
                return <ListView items={houses} />;
        }
    };
    const getHouses = (queryData: tSearchData) => {
        dispatch(getHousesAsync(queryData));
    };

    const onScroll = () => {
        if (scrollableDiv.current != null && view === 'gridColumn') {
            mapPosition < scrollableDiv?.current?.scrollTop + 78
                ? setMapClass('fixed')
                : setMapClass('relative');
        }
    };

    const onScrollTop = () => {
        if (scrollableDiv.current != null) {
            scrollableDiv?.current?.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    };
    // useEffect(() => {
    //     if (muncipality_code) {
    //         dispatch(getMunicipalityAsync(muncipality_code));
    //         getHouses({ ...query, muncipality_code: muncipality_code, sort, page: 1 });
    //     }
    // }, [muncipality_code]);

    useEffect(() => {
        if (muncipality_code) {
            getHouses({ muncipality_code });
        }
    }, [sort]);

    useEffect(() => {
        return () => {
            dispatch(clearQuery());
        };
    }, []);
    // console.log("houses", houses);
    return (
        <div className="app__page bg-grey" ref={scrollableDiv} id="scrollableDiv">
            <InfiniteScroll
                dataLength={houses.length}
                next={() =>
                    // getHouses({ ...query, muncipality_code: muncipality_code, sort, page: query.page + 1 })
                    muncipality_code && getHouses({ muncipality_code })
                }
                hasMore={has_more}
                loader={''}
                scrollableTarget="scrollableDiv"
                style={{ overflow: 'hidden' }}
                onScroll={onScroll}
            >
                <div className="search-result">
                    <MunicipalityLogo
                        logo={municipality?.logo}
                        text={`${municipality?.title} Asset Registry`}
                    />
                    <SearchHeaderLine muncipality_code={muncipality_code} />
                    <div className="container">
                        <div className="search-result__header">
                            <div className="search-result__header_part">
                                <h5>
                                    {count} {count > 1 ? 'results' : 'result'}
                                </h5>
                            </div>
                            <div className="search-result__header_part">
                                <BaseSelect
                                    additionText="Sorted by"
                                    items={selectData}
                                    selectedValue={sort}
                                    onClick={val => setSort(val)}
                                />
                                <ViewSwitcher
                                    view={view}
                                    onChangeView={(view: tView) => {
                                        onScrollTop();
                                        setView(view);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="search-result__body container">
                        {houses?.length === 0 ? (
                            <h4>
                                There is no record for this property. Please check the address or
                                email us <a href="mailto:records@balconydao.com">here</a>
                            </h4>
                        ) : (
                            renderBody()
                        )}
                    </div>
                    {has_more && (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                zIndex: 1,
                                padding: '10px 0',
                            }}
                        >
                            <Loader />
                        </div>
                    )}
                </div>
            </InfiniteScroll>
        </div>
    );
};
