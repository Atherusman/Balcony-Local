import './SaleModal.scss';

import { FC } from 'react';
import { InfoCard, InfoLine } from 'src/components';
import { IconCalendar, IconDistrict, IconShape } from 'src/icons';
import { tSaleInfo } from 'src/types';
import moment from 'moment';

interface IProps {
    saleInfo: tSaleInfo;
}

export const SaleModal: FC<IProps> = ({ saleInfo }) => {
    const {
        date,
        county,
        district,
        book,
        deed_note,
        r_t_fee,
        grantor,
        r_t_f_exempt,
        page,
        deed_recorder,
        price,
        year_same_as_deed,
        buildings,
        property_location,
        year_built,
        remarks,
        land,
        total,
        floor_area,
        ratio,
        block,
        lot,
        qual,
        prop_class,
        cl_4_type,
        condo,
        nonusable_code,
        serial_Number,
    } = saleInfo;

    return (
        <div className="sale-info">
            <h2>Sale Information</h2>
            <div className="sale-info__blocks">
                <div className="bg-white sale-info__blocks_line">
                    <div className="line-grid">
                        <div className="line-grid__item">
                            <InfoCard
                                title="Date"
                                text={date && moment(date).format('MM/DD/YY')}
                                icon={<IconCalendar />}
                            />
                        </div>
                        <div className="line-grid__item">
                            <InfoCard title="County" text={county} icon={<IconShape />} />
                        </div>
                        <div className="line-grid__item">
                            <InfoCard title="District" text={district} icon={<IconDistrict />} />
                        </div>
                    </div>
                </div>
                <div className="sale-info__block">
                    <div className="sale-info__block_grid">
                        <div className="sale-info__block_grid-item">
                            <h2>Deed Registration</h2>
                            <div className="sale-block">
                                <div className="sale-block__item">
                                    <InfoLine title="Book" text={book} />
                                    <InfoLine title="Deed Note" text={deed_note} />
                                    <InfoLine title="R.T. Fee" text={r_t_fee} />
                                    <InfoLine title="Grantor" text={grantor} />
                                    <InfoLine title="R.T.F.Exempt" text={r_t_f_exempt} />
                                </div>
                                <div className="sale-block__item">
                                    <InfoLine title="Page" text={page} />
                                    <InfoLine
                                        title="Date Recorded"
                                        text={
                                            deed_recorder &&
                                            moment(deed_recorder).format('MM/DD/YY')
                                        }
                                    />
                                    <InfoLine title="Price" text={price} />
                                    <InfoLine title="Grantor" text={grantor} />
                                    <InfoLine title="" text="" empty />
                                </div>
                            </div>
                        </div>
                        <div className="sale-info__block_grid-item">
                            <h2>Assessed Value</h2>
                            <div className="sale-block">
                                <div className="sale-block__item">
                                    <InfoLine title="Year Same as Deed" text={year_same_as_deed} />
                                    <InfoLine title="Buildings" text={buildings} />
                                    <InfoLine title="Property Location" text={property_location} />
                                    <InfoLine title="Year Built" text={year_built} />
                                    <InfoLine title="Remarks" text={remarks} />
                                </div>
                                <div className="sale-block__item">
                                    <InfoLine title="Land" text={land} />
                                    <InfoLine title="Total" text={total} />
                                    <InfoLine title="Floor Area" text={floor_area} />
                                    <InfoLine title="Ratio" text={ratio} />
                                    <InfoLine title="" text="" empty />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sale-info__block_grid sale-info__block_grid--three">
                        <div className="sale-info__block_grid-item">
                            <h2>Tax Map & List Descriptions</h2>
                            <div>
                                <InfoLine title="Block" text={block} />
                                <InfoLine title="Lot" text={lot} />
                                <InfoLine title="Qual" text={qual} />
                            </div>
                        </div>
                        <div className="sale-info__block_grid-item">
                            <h2>Property Classification</h2>
                            <div>
                                <InfoLine title="Class" text={prop_class} />
                                <InfoLine title="CL.4 Type" text={cl_4_type} />
                                <InfoLine title="Condo" text={condo} />
                            </div>
                        </div>
                        <div className="sale-info__block_grid-item">
                            <h2>Additional Blocks</h2>
                            <div>
                                <InfoLine title="Nonusable Code" text={nonusable_code} />
                                <InfoLine title="Serial Number" text={serial_Number} />
                                <InfoLine title="" text="" empty />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
