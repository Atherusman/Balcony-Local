export type tDoc = {
    name: string;
    path: string;
    size: string;
    mime: string;
};
export type tDocs = {
    title: string;
    list: tDoc[];
};

export type tHistory = {
    year: string;
    owner: string;
    street: string;
    city_state_zip: string;
    land_assmnt: string;
    building_assmnt: string;
    exempt: string;
    total_assmnt: string;
    assessed: string;
    additional_lots: string;
    deductions: string;
    imp: string;
    prop_class: string;
};

export type tSaleInfo = {
    block: string;
    book: string;
    buildings: string;
    cl_4_type: string;
    prop_class: string;
    condo: string;
    county: string;
    created_at: string;
    date: string;
    deed_note: string;
    deed_recorder: string;
    district: string;
    estate_id: number;
    floor_area: string;
    grantee: string;
    grantor: string;
    id: number;
    land: string;
    lot: string;
    nonusable_code: string;
    nu: number;
    page: string;
    price: number;
    property_location: string;
    qual: string;
    r_t_f_exempt: string;
    r_t_fee: string;
    ratio: string;
    remarks: string;
    serial_Number: string;
    total: string;
    updated_at: string;
    year_built: string;
    year_same_as_deed: string;
};
export type tHouseSmall = {
    ADDRESS1: string;
    ADDRESS2: string;
    TOWN: string;
    STATE_ABBR: string;
    ZIP5: string;
    ZIP4: string;
    COUNTY: string;
    PROPERTY_ID_BLK: string;
    PROPERTY_ID_LOT: string;
    MUNICIPALITY_CODE: string;
    PROPERTY_LOCATION_ID: number;
    pagination: number;

    // account_tax_id?: string;
    // address: string;
    // block: string;
    // estate_type: string;
    // id: number;
    // lat: number;
    // lng: number;
    // lot: string;
    // owner: string;
    // qualifier?: number | null;
    // is_verified?: boolean | null;
    // is_feature?: boolean;
    // company?: string;
    // zip?: string;
    // photos: string[] | null;
    // hash: string | null;
    // recent_activity: string | null;
    // slug: string;
    // smart_contract_address?: string;
    // reNFT?: boolean;
    // municipality: { slug: string };
};
export type tHouseFull = {
    ADDRESS1: string | null;
    ADDRESS2: string;
    TOWN: string;
    STATE_ABBR: string;
    ZIP5: string;
    ZIP4: string;
    COUNTY: string;
    PROPERTY_ID_BLK: string;
    PROPERTY_ID_LOT: string;
    MUN_CODE_ID: string;
};
