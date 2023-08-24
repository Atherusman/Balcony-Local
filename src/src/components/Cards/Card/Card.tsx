import './Card.scss';

import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LinkButton, MainButton, Slider, Tag, Tooltip } from 'src/components';
import { IconCheck, IconDownload, IconDownloadTop, IconFeature, IconUsers } from 'src/icons';

import { tHouseSmall } from 'src/types';
import { Routes as R, GREY700, VIOLET } from 'src/constants';
import { useWindowSize, useAppDispatch } from 'src/hooks';
import { dotsInText, copyText } from 'src/helpers';
import { getCommingSoon } from 'src/store';

interface IProps {
    item: tHouseSmall;
    reNFT?: boolean;
    designType?: 'default' | 'small';
    changeHoverCard?: (id: number) => void;
}
export const Card: FC<IProps> = ({ item, reNFT, designType = 'default', changeHoverCard }) => {
    const {
        ADDRESS1,
        ADDRESS2,
        TOWN,
        STATE_ABBR,
        ZIP5,
        ZIP4,
        COUNTY,
        PROPERTY_ID_BLK,
        PROPERTY_ID_LOT,
        MUNICIPALITY_CODE,
        PROPERTY_LOCATION_ID,
        pagination,
    } = item;

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [isHover, setIsHover] = useState<boolean>(false);
    const { width } = useWindowSize();

    const changeHover = (hover: boolean) => {
        setIsHover(hover);
        changeHoverCard && changeHoverCard(hover ? Number(MUNICIPALITY_CODE) : 0);
    };

    return (
        <div
            className={`card card--${designType}`}
            onMouseEnter={
                width < 1024 || designType === 'small' ? () => '' : () => changeHover(true)
            }
            onMouseLeave={
                width < 1024 || designType === 'small' ? () => '' : () => changeHover(false)
            }
            style={
                isHover
                    ? {
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                      }
                    : { maxHeight: 'none' }
            }
            onClick={e => {
                e.stopPropagation();
                navigate(`/municipality/${MUNICIPALITY_CODE}/${PROPERTY_LOCATION_ID}`);
            }}
        >
            <div className="card__top">
                {/* <div className="card__top_images">
                    {photos && photos?.length > 1 && designType === 'default' ? (
                        <Slider
                            items={photos}
                            className={`images-slider--${designType}`}
                            id={`${id}-${crypto.randomUUID()}`}
                        />
                    ) : (
                        <div
                            className="card__top_images-img"
                            style={{
                                backgroundImage: photos && photos[0] ? `url(${photos[0]})` : '',
                            }}
                        />
                    )}
                    <div className="card__top_images-header">
                        <div>
                            <Tag
                                bgColor={is_verified ? VIOLET : GREY700}
                                textColor="#FFF"
                                text={is_verified ? 'Verified' : 'UNVerified'}
                            />
                        </div>
                        <div>

                            {is_feature && (
                                <Tooltip text="Featured">
                                    <div className="card__top_images-header-featured">
                                        <IconFeature />
                                    </div>
                                </Tooltip>
                            )}
                        </div>
                    </div>
                </div> */}
                <div className="card__top_content">
                    <div className="card__top_content-type">
                        <h6>
                            <IconUsers width={16} height={16} />
                            {/* {estate_type} */}
                        </h6>
                        {reNFT && <h5>reNFT</h5>}
                    </div>
                    <h4>{ADDRESS1 + ',' + ADDRESS2}</h4>
                    <h5>{ZIP5}</h5>
                </div>
            </div>
            {designType === 'default' && (
                <>
                    <div className="card__bottom card__bottom--three">
                        <div className="card__bottom_item">
                            <h6>Owner</h6>
                            {/* <Tooltip text={owner}>
                                <h5>{owner}</h5>
                            </Tooltip> */}
                        </div>
                        <div className="card__bottom_item">
                            <h6>Block</h6>
                            <h5>{PROPERTY_ID_BLK}</h5>
                        </div>
                        <div className="card__bottom_item">
                            <h6>Lot</h6>
                            <h5>{PROPERTY_ID_LOT}</h5>
                        </div>
                    </div>
                    {/* {width > 1024 && isHover && (
                        <div
                            className={`card__bottom card__bottom--last ${
                                // is_verified ? 'card__bottom--two' : 'card__bottom--one'
                                 ? 'card__bottom--two' : 'card__bottom--one'
                            }`}
                        >
                            {is_verified ? (
                                <>
                                    <div className="card__bottom_item">
                                        <h6>Recent Activity</h6>
                                        <h5>{recent_activity || '-'}</h5>
                                    </div>
                                    <div className="card__bottom_item">
                                        <h6>Token ID</h6>
                                        {hash ? (
                                            <LinkButton
                                                text={dotsInText(hash, 5)}
                                                onClick={e => {
                                                    e.stopPropagation();
                                                    smart_contract_address
                                                        ? window.open(
                                                              smart_contract_address,
                                                              '_blank'
                                                          )
                                                        : copyText(hash);
                                                }}
                                            />
                                        ) : (
                                            '-'
                                        )}
                                    </div>
                                </>
                            ) : (
                                <div className="card__bottom_item">
                                    <MainButton
                                        buttonType="primary"
                                        buttonSize="maxi"
                                        onClick={e => {
                                            e.stopPropagation();
                                            dispatch(getCommingSoon(true));
                                        }}
                                    >
                                        Claim to Verify
                                    </MainButton>
                                </div>
                            )}
                        </div>
                    )} */}
                    {/* {width < 1024 && (
                        <div
                            className={`card__bottom card__bottom--last ${
                                is_verified ? 'card__bottom--two' : 'card__bottom--one'
                            }`}
                        >
                            {is_verified ? (
                                <>
                                    <div className="card__bottom_item">
                                        <h6>
                                            Recent Activity
                                           
                                        </h6>
                                        <h5>{recent_activity || '-'}</h5>
                                    </div>
                                    <div className="card__bottom_item">
                                        <h6>Token ID</h6>
                                        {hash ? (
                                            <LinkButton
                                                text={dotsInText(hash, 5)}
                                                onClick={e => {
                                                    e.stopPropagation();
                                                    smart_contract_address
                                                        ? window.open(
                                                              smart_contract_address,
                                                              '_blank'
                                                          )
                                                        : copyText(hash);
                                                }}
                                            />
                                        ) : (
                                            '-'
                                        )}
                                    </div>
                                </>
                            ) : (
                                <div className="card__bottom_item">
                                    <MainButton
                                        buttonType="primary"
                                        buttonSize="maxi"
                                        onClick={e => {
                                            e.stopPropagation();
                                            dispatch(getCommingSoon(true));
                                        }}
                                    >
                                        Claim to Verify
                                    </MainButton>
                                </div>
                            )}
                        </div>
                    )} */}
                </>
            )}
        </div>
    );
};
