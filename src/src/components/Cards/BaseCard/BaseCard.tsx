import './BaseCard.scss';

import { FC } from 'react';

import { LinkButton, Slider, Tag } from 'src/components';
import { IconCopy, IconUsers } from 'src/icons';

import { GREY700, VIOLET } from 'src/constants';
import { tHouseFull } from 'src/types/tCard/tCard';
import { dotsInText, copyText } from 'src/helpers';

interface IProps {
    item: tHouseFull;
}
export const BaseCard: FC<IProps> = ({ item }) => {
    // const {
    //     id,
    //     photos,
    //     estate_type,
    //     is_verified,
    //     company,
    //     address,
    //     state,
    //     hash,
    //     smart_contract_address,
    // } = item;

    return (
        <div className="base-card">
            {/* <div className="base-card__images">
                {photos && photos.length > 1 ? (
                    <Slider
                        className="images-slider--big"
                        items={photos}
                        id={`${id}-${crypto.randomUUID()}`}
                    />
                ) : (
                    <div
                        className="base-card__images_img"
                        style={{ backgroundImage: photos && photos[0] ? `url(${photos[0]})` : '' }}
                    />
                )}
                <div className="base-card__images_header">
                    <div>
                        <Tag
                            bgColor={is_verified ? VIOLET : GREY700}
                            textColor="#FFF"
                            text={is_verified ? 'Verified' : 'UNVerified'}
                        />
                    </div>
                    <div>
                        <div
                            className="base-card__images_header-company"
                            style={{ backgroundImage: `url(${company})` }}
                        />
                    </div>
                </div>
            </div>
            <div className="base-card__content">
                <div className="base-card__content_header">
                    <div className="base-card__content_header-type">
                        <IconUsers />
                        <h5>{estate_type}</h5>
                    </div>
                    {hash && (
                        <LinkButton
                            text={dotsInText(hash, 8)}
                            onClick={() => {
                                smart_contract_address
                                    ? window.open(smart_contract_address, '_blank')
                                    : copyText(hash);
                            }}
                        >
                            <span
                                onClick={e => {
                                    e.stopPropagation();
                                    copyText(hash);
                                }}
                            >
                                <IconCopy />
                            </span>
                        </LinkButton>
                    )}
                </div>
                <h1>{address}</h1>
                <h2>{state}</h2>
            </div> */}
        </div>
    );
};
