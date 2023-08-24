import axios from 'axios';
import { logOut, store } from '../store';
import { loginUser } from '../store/user/reducer.actions';

export const apiClient = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

apiClient.interceptors.request.use(
    config => {
        const token = localStorage.getItem('jwtToken');
        if (token && config.url) {
            if (!config.headers) config.headers = {};
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    undefined,
    {
        synchronous: true,
    }
);

apiClient.interceptors.response.use(
    response => {
        return response;
    },
    function (error) {
        if (error.response.status === 401) {
            store.dispatch(loginUser({ user: null, token: null }));
            localStorage.removeItem('jwtToken');
        }

        return Promise.reject(error.response);
    }
);
