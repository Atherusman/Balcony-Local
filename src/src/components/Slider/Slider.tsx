import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.scss';

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCreative } from 'swiper';

import { IconArrow } from 'src/icons';
import { WHITE } from 'src/constants';

interface IProps {
    id?: string;
    items: string[];
    className?: string;
}

export const Slider: FC<IProps> = ({ id = 'base', items, className }) => {
    return (
        <div className={`images-slider ${className}`}>
            <Swiper
                effect={'fade'}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: `#prev-${id}`,
                    nextEl: `#next-${id}`,
                }}
                modules={[EffectCreative, Pagination, Navigation]}
                className="images-slider__body"
            >
                {items.map((el, id) => {
                    return (
                        <SwiperSlide key={`slider-item-${id}`}>
                            <div
                                className="images-slider__image"
                                style={{ backgroundImage: `url(${el})` }}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div id={`prev-${id}`} className="swiper-button-prev">
                <IconArrow color={WHITE} />
            </div>
            <div id={`next-${id}`} className="swiper-button-next">
                <IconArrow color={WHITE} />
            </div>
        </div>
    );
};
