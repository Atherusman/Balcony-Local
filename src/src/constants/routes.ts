export enum Routes {
    MAIN = '/',
    CITY_RESULT = '/municipality/:muncipality_code',
    HOME_RESULT = '/municipality/:municipality_code/:property_location_id',
    PROFILE = '/profile',
    GOOGLE_REDIRECT = '/google-redirect',
    NOT_FOUND = '*',
}
