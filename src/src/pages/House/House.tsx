import './House.scss';
import { useParams, useNavigate } from 'react-router-dom';

import moment from 'moment';

import {
    BackButton,
    BaseCard,
    InfoCard,
    InfoLine,
    LinkButton,
    MainButton,
    Map,
    Modal,
    MunicipalityLogo,
    Table,
} from 'src/components';
import { SALE_INFO_COLUMNS, TAX_HISTORY_COLUMNS, TAXES_COLUMNS } from './data';
import { taxesList } from 'src/mockData/data';
import { IconBlock, IconCalendar, IconLot, IconTax, IconView, IconOwner } from 'src/icons';
import {
    SaleInfoRow,
    SaleModal,
    TaxesBlock,
    TaxListHistoryRow,
    CalendarModal,
    Docs,
} from './components';
import { useEffect, useState } from 'react';
import { tDocs, tHistory, tSaleInfo } from 'src/types';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getHouseAsync, getCommingSoon, getMunicipalityAsync } from 'src/store';

import { Routes as R } from 'src/constants';
import { HistoryModal } from './components/SaleModal';
import { saveAs } from 'file-saver';

export const House = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { municipality_code, property_location_id } = useParams();
    const { municipality } = useAppSelector(state => state.municipalitiesReducer);

    const { house } = useAppSelector(state => state.houseReducer);
    console.log('house', house);
    const [isOpenCalendar, setIsOpenCalendar] = useState<boolean>(false);
    const [saleInfo, setSaleInfo] = useState<tSaleInfo | null>(null);
    const [showHistory, setShowHistory] = useState<boolean>(false);
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
        MUN_CODE_ID,
    } = house;

    const openCommingSoon = () => {
        dispatch(getCommingSoon(true));
    };

    // useEffect(() => {
    //     if (municipality_code) {
    //         dispatch(getMunicipalityAsync({ municipality_code, property_location_id }));
    //     }
    // }, [municipality_code]);

    useEffect(() => {
        if (
            !property_location_id ||
            property_location_id === null ||
            property_location_id === 'null'
        ) {
            navigate(R.MAIN);
        } else {
            dispatch(getHouseAsync({ municipality_code, property_location_id }));
        }
    }, [property_location_id]);

    return (
        <div className="app__page house">
            <MunicipalityLogo
                logo={municipality?.logo}
                text={`${municipality?.title} Asset Registry`}
            />
            <div className="container house__header">
                <BackButton text="Back" onClick={() => navigate(-1)} />
            </div>
            <div className="house__grid container">
                <div className="house__grid_item">
                    <BaseCard item={house} />
                </div>
                <div className="house__grid_item house__grid_item--map">
                    <Map
                        defaultZoom={15}
                        defaultCenter={{ lat: +house.lat, lng: +house.lng }}
                        items={[{ ...house, municipality_code: property_location_id }]}
                        // activePin={id}
                        clickable={false}
                        activePin={0}
                    />
                </div>
            </div>
            <div className="house__grid house__grid--five container">
                <div className="house__grid_item">
                    {/* <InfoCard title="Owner" text={owner} icon={<IconOwner />} /> */}
                </div>
                <div className="house__grid_item">
                    <InfoCard title="Block" text={PROPERTY_ID_BLK} icon={<IconBlock />} />
                </div>
                <div className="house__grid_item">
                    <InfoCard title="Lot" text={PROPERTY_ID_LOT} icon={<IconLot />} />
                </div>
                <div className="house__grid_item">
                    <InfoCard
                        title="Last Sale Price"
                        // text={last_tax_payment_amount ? `$${last_tax_payment_amount}` : 'N/A'}
                        icon={<IconTax />}
                        text={null}
                    />
                </div>
                <div className="house__grid_item">
                    <InfoCard
                        title="Last Sale Date"
                        // text={last_tax_payment_date ? last_tax_payment_date : 'N/A'}
                        icon={<IconCalendar />}
                        text={null}
                    />
                </div>
            </div>
            <div className="bg-violet">
                <div className="house__grid house__grid--nine container">
                    <div className="house__grid_item house__grid_item--small">
                        {/* <InfoCard title="Qual" text={qual} /> */}
                    </div>
                    <div className="house__grid_item house__grid_item--big">
                        {/* <InfoCard title="Prop Loc" text={prop_loc} /> */}
                    </div>
                    <div className="house__grid_item house__grid_item--small">
                        {/* <InfoCard title="Class" text={house_class} /> */}
                    </div>
                    <div className="house__grid_item">
                        {/* <InfoCard title="District" text={district} /> */}
                    </div>
                    {/* <div className="house__grid_item">
                        <InfoCard title="Street" text={street} />
                    </div> */}
                    <div className="house__grid_item house__grid_item--big">
                        {/* <InfoCard title="City State" text={city_state} /> */}
                    </div>
                    <div className="house__grid_item">
                        {/* <InfoCard title="Square Ft" text={square_ft} /> */}
                    </div>
                    <div className="house__grid_item">
                        {/* <InfoCard title="Year Built" text={year_built} /> */}
                    </div>
                    <div className="house__grid_item house__grid_item--small">
                        {/* <InfoCard title="Style" text={house_style} /> */}
                    </div>
                </div>
            </div>
            <div className="house__additional-details container">
                <h2>Additional Details</h2>
                <div className="house__grid house__grid--four">
                    <div className="house__grid_item">
                        {/* <InfoLine title="Prior Block" text={prior_block} /> */}
                        {/* <InfoLine title="Prior Lot" text={prior_lot} /> */}
                        {/* <InfoLine title="Prior Qual" text={prior_qual} /> */}
                        {/* <InfoLine title="Updated" text={updated} /> */}
                        {/* <InfoLine title="Zone" text={zone} /> */}
                        {/* <InfoLine title="Special Tax Districs" text={special_tax_districs} /> */}
                    </div>
                    <div className="house__grid_item">
                        {/* <InfoLine title="Acct Num" text={account_num} /> */}
                        {/* <InfoLine title="Mtg Acct" text={mtg_acct} /> */}
                        {/* <InfoLine title="Bank Code" text={bank_code} /> */}
                        {/* <InfoLine title="Tax Codes" text={tax_codes} /> */}
                        {/* <InfoLine title="Map Page" text={map_page} /> */}
                        {/* <InfoLine title="Building Description" text={building_description} /> */}
                    </div>
                    <div className="house__grid_item">
                        {/* <InfoLine title="Addl Lots" text={addl_lots} />
                        <InfoLine title="Land Decs" text={land_description} />
                        <InfoLine title="Bldg Desc" text={bldg_desc} />
                        <InfoLine title="Class Cd" text={class_cd} />
                        <InfoLine title="Acreage" text={acreage} />
                        <InfoLine title="Special Tax Districs" text={special_tax_districs} /> */}
                    </div>

                    <div className="house__grid_item">
                        {/* <InfoLine title="EPL Code" text={epl_code} />
                        <InfoLine title="Statute" text={epl_statute} />
                        <InfoLine title="Initial" text={epl_init} />
                        <InfoLine title="Further" text={epl_further} />
                        <InfoLine title="Desc" text={epl_desc} />
                        <InfoLine title="Taxes" text={taxes ? `$${taxes}` : null} /> */}
                    </div>
                </div>
            </div>
            <div className="house__all-info bg-grey">
                {/* {sale_information && sale_information.length > 0 && (
                    <div className="container">
                        <div className="bg-white">
                            <div className="house__all-info-block__header">
                                <h2>Sale Information</h2>
                            </div>
                            <Table collums={SALE_INFO_COLUMNS}>
                                {sale_information.map((el: tSaleInfo) => {
                                    return (
                                        <SaleInfoRow
                                            key={`sale-info-${id}`}
                                            {...el}
                                            onClick={() => {
                                                setSaleInfo(el);
                                            }}
                                        />
                                    );
                                })}
                            </Table>
                        </div>
                    </div>
                )} */}
                {history && history.length > 0 && (
                    <div className="container">
                        <div className="bg-white">
                            <div className="house__all-info-block__header">
                                <h2>Tax List History</h2>
                                <div className="house__all-info-block__header_part">
                                    <LinkButton
                                        text="Show Whole History"
                                        className="link-button--reverse link-button--simple"
                                        onClick={() => {
                                            setShowHistory(true);
                                        }}
                                    >
                                        <IconCalendar size={20} />
                                    </LinkButton>
                                </div>
                            </div>
                            <Table collums={TAX_HISTORY_COLUMNS}>
                                {/* {history?.map((row: tHistory) => {
                                    return (
                                        <TaxListHistoryRow
                                            key={`tax-row-${row.year}-${row.land_assmnt}`}
                                            {...row}
                                        />
                                    );
                                })} */}
                            </Table>
                        </div>
                    </div>
                )}
                <div className="container">
                    <div className="bg-white">
                        <div className="house__all-info-block__header">
                            <h2>Taxes</h2>
                            <div className="house__all-info-block__header_part">
                                {/* {tax_rate_attachment && (
                                    <LinkButton
                                        text="View Tax Rates"
                                        className="link-button--reverse link-button--simple"
                                        onClick={() => saveAs(tax_rate_attachment)}
                                    >
                                        <IconTax size={22} />
                                    </LinkButton>
                                )} */}
                                <LinkButton
                                    text="View Tax Rates"
                                    className="link-button--reverse link-button--simple"
                                    onClick={() => openCommingSoon()}
                                >
                                    <IconTax size={22} />
                                </LinkButton>
                                {/* {current_bill_attachment && (
                                    <LinkButton
                                        text="View Current Bill"
                                        className="link-button--reverse link-button--simple"
                                        onClick={() => saveAs(current_bill_attachment)}
                                    >
                                        <IconView />
                                    </LinkButton>
                                )} */}
                                <LinkButton
                                    text="View Current Bill"
                                    className="link-button--reverse link-button--simple"
                                    onClick={() => openCommingSoon()}
                                >
                                    <IconView />
                                </LinkButton>
                                <LinkButton
                                    text="View Project Interest"
                                    className="link-button--reverse link-button--simple"
                                    // onClick={() => setIsOpenCalendar(true)}
                                    onClick={() => openCommingSoon()}
                                >
                                    <IconCalendar size={20} />
                                </LinkButton>
                                {/* {make_payment_url && (
                                    <MainButton
                                        buttonType="primary"
                                        onClick={() => window.open(make_payment_url, '_blank')}
                                    >
                                        Make a Payment
                                    </MainButton>
                                )} */}
                            </div>
                        </div>
                        <Table collums={TAXES_COLUMNS} className="with-padding">
                            {taxesList?.map(row => {
                                return <TaxesBlock key={`taxes-row-${row.id}`} {...row} />;
                            })}
                        </Table>
                    </div>
                </div>
                {/* {attachments &&
                    attachments.length > 0 &&
                    attachments.map((el: tDocs) => {
                        return (
                            <div className="bg-transparent container" key={el.title}>
                                <h2>{el.title} Docs</h2>
                                <Docs list={el.list} />
                            </div>
                        );
                    })} */}
            </div>
            <Modal
                show={saleInfo !== null}
                onClose={() => {
                    setSaleInfo(null);
                }}
            >
                {saleInfo ? <SaleModal saleInfo={saleInfo} /> : <></>}
            </Modal>
            {/* <Modal
                show={showHistory}
                onClose={() => {
                    setShowHistory(false);
                }}
            >
                {showHistory ? <HistoryModal history={history} /> : <></>} 
            </Modal> */}
            <Modal
                width={500}
                show={isOpenCalendar}
                onClose={() => {
                    setIsOpenCalendar(false);
                }}
            >
                {isOpenCalendar ? <CalendarModal /> : <></>}
            </Modal>
        </div>
    );
};
