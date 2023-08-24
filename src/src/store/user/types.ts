import { tUser } from 'src/types';

export type tUserValues = {
    email: string;
    password: string;
};

export type tRegisterUserValues = {
    first_name: string;
    last_name: string;
    business_name: string;
    business_type_id: number;
    wallet_address: string;
    user_id: string;
    org_code: string;
    profile_picture: string;
    email: string;
    password: string;
    verified_kyc: number;
};

export type tUserAction = {
    data: tUser;
    page: string;
};
