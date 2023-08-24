export const initialState = {
    user: {
        name: '',
        last_name: '',
        email: '',
        created_at: '',
        metamask_wallet_id: '',
        business_name: '',
        business_type_id: null,
        email_verified_at: null,
        id: 0,
        is_admin: false,
        profile_picture: null,
        verified_kyc: true,
    },
    estates: {
        count: 0,
        has_more: false,
        data: [],
    },
    token: null,
    errors: {
        email: null,
        password: null,
        socials: null,
    },
};
