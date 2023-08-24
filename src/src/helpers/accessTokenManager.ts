type Listener = (token: string) => void;

const INITIAL_TOKEN_VALUE = '';
const jwtToken = 'jwtToken';

export const accessTokenManager = (() => {
    let token = localStorage.getItem(jwtToken) ?? INITIAL_TOKEN_VALUE;
    let listener: Listener | null = null;

    function removeToken(): void {
        localStorage.removeItem(jwtToken);
        token = INITIAL_TOKEN_VALUE;
        listener?.(INITIAL_TOKEN_VALUE);
    }

    // Log off if was logged off from another tab
    window.addEventListener('storage', event => {
        if (event.key === jwtToken && event.newValue === null) removeToken();
    });

    return {
        removeToken,
        setToken(newToken: string): void {
            token = newToken;
            localStorage.setItem(jwtToken, newToken);
            listener?.(newToken);
        },
        getToken(): string {
            return token;
        },
        setListener(newListener: Listener): void {
            listener = newListener;
        },
        removeListener(): void {
            listener = null;
        },
    };
})();
