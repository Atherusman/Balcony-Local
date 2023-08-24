import { apiClient } from 'src/api';

type tData = {
    municipality_slug: string;
    text: string;
};

export const getAddresses = async ({ municipality_slug, text }: tData) => {
    return await apiClient.get(
        `/search-snippets?municipality_slug=${municipality_slug}&string=${text}`
    );
};
