import './Profile.scss';

import { useEffect, useState, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
    GridColumnView,
    GridView,
    ListView,
    ViewSwitcher,
    BaseSelect,
    Loader,
    Tabs,
    InfoCard,
} from 'src/components';
import { dotsInText } from 'src/helpers';

import { useAppDispatch, useAppSelector } from 'src/hooks';
import { IconEth, IconOwner, Verified } from 'src/icons';
import { getCommingSoon, getUserAsync } from 'src/store';
import { tInfiniteScroll, tTab, tView } from 'src/types';
import { defaultTabs } from './data';
import defaultUser from 'src/assets/images/defaultUser.png';

export const Profile = () => {
    const dispatch = useAppDispatch();

    const scrollableDiv = useRef<HTMLDivElement>(null);

    const { user, estates } = useAppSelector(state => state.userReducer);

    const [sort, setSort] = useState<string>('featured');
    const [page, setPage] = useState<number>(1);
    const [view, setView] = useState<tView>('grid');
    const [mapPosition, setMapPosition] = useState<number>(0);
    const [mapClass, setMapClass] = useState<'fixed' | 'relative'>('relative');

    const selectData = [
        { id: 'featured', name: 'Featured' },
        { id: 'verified', name: 'Verified' },
        { id: 'recently_sold', name: 'Recently Sold' },
    ];

    const [activeTab, setActiveTab] = useState<string>('assets');
    const changeTab = (val: tTab) => {
        if (val.key === 'assets') {
            setActiveTab(val.key);
        } else dispatch(getCommingSoon(true));
    };
    const renderBody = () => {
        switch (view) {
            case 'grid':
                return <GridView items={estates.data} reNFT={true} />;
            case 'gridColumn':
                return (
                    <GridColumnView
                        className={mapClass}
                        items={estates.data}
                        reNFT={true}
                        onGetStartPosition={val => setMapPosition(val)}
                    />
                );
            case 'list':
                return <ListView items={estates.data} />;
        }
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

    const getUser = ({ sort, page }: tInfiniteScroll) => {
        dispatch(getUserAsync({ sort, page }));
        setPage(page);
    };

    useEffect(() => {
        getUser({ sort, page: 1 });
    }, [sort]);
    return (
        <div className="app__page bg-grey" ref={scrollableDiv} id="scrollableDiv">
            <InfiniteScroll
                dataLength={estates.data.length}
                next={() => getUser({ sort, page: page + 1 })}
                hasMore={estates.has_more}
                loader={''}
                scrollableTarget="scrollableDiv"
                style={{ overflow: 'hidden' }}
                onScroll={onScroll}
            >
                <div className="user">
                    <div className="user__body container">
                        <div className="user__body_block">
                            <div
                                className="user__body_block-picture"
                                style={{
                                    backgroundImage: `url(${
                                        user.profile_picture ? user.profile_picture : defaultUser
                                    })`,
                                }}
                            />
                            <div className="user__body_block-text">
                                <h1>
                                    {user.name} {user.last_name}
                                    {user.verified_kyc && <Verified />}
                                </h1>
                                <h5>Joined {user.joined}</h5>
                            </div>
                        </div>
                        <div className="user__body_block user__body_block-small">
                            <InfoCard
                                title="Wallet ID"
                                text={
                                    user.metamask_wallet_id &&
                                    dotsInText(user.metamask_wallet_id, 5)
                                }
                                icon={<IconEth />}
                            />
                        </div>
                        <div className="user__body_block user__body_block-small">
                            <InfoCard
                                title={user.business_type}
                                text={`${estates.count} ${
                                    estates.count === 1 ? 'Asset' : 'Assets'
                                }`}
                                icon={<IconOwner width={26} height={26} />}
                            />
                        </div>
                    </div>
                </div>
                <div className="profile">
                    <div className="container">
                        <div className="profile__header">
                            <div className="profile__header_part">
                                <Tabs
                                    tabs={defaultTabs}
                                    active={activeTab}
                                    onSelect={(val: tTab) => changeTab(val)}
                                />
                            </div>
                            <div className="profile__header_part">
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

                        <div className="profile__body">
                            {estates.count === 0 ? (
                                <h4>You don&#39;t have any assets</h4>
                            ) : (
                                renderBody()
                            )}
                        </div>
                        {estates.has_more && (
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
                </div>
            </InfiniteScroll>
        </div>
    );
};
