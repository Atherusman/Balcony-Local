import { useEffect, useState } from 'react';
import { accessTokenManager } from 'src/helpers';

export function useAccessToken(): string {
    const [token, setToken] = useState(accessTokenManager.getToken);
    useEffect(() => {
        accessTokenManager.setListener(setToken);
        return accessTokenManager.removeListener;
    }, []);

    return token;
}
