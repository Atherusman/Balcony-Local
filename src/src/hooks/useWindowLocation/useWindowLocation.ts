import { useEffect, useState } from 'react';

type tWindowLocation = {
    url: string;
    origin: string;
};

const initialLocationState = {
    url: '',
    origin: '',
};

export const useWindowLocation = () => {
    const [link, setLink] = useState<tWindowLocation>(initialLocationState);

    useEffect(() => {
        if (window !== undefined) {
            const changedState = {
                url: window.location.href,
                origin: window.location.origin,
                href: window.location.href,
            };
            setLink(changedState);
        }
    }, [link.url, link.origin]);

    return {
        url: link.url,
        origin: link.origin,
    };
};
