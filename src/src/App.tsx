import { Routes, Route, useLocation } from 'react-router-dom';

import { Home, House, NotFound, SearchResult, Profile, PrivatePage, GoogleCallback } from './pages';
import { Header, CommingSoon } from './components';
import { Routes as R } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getCommingSoon, getUserAsync } from 'src/store';
import { Login } from './components/auth';
import { useEffect } from 'react';
import { Register } from './components/auth/Register';

const App = () => {
    const { pathname } = useLocation();
    const { comming_soon } = useAppSelector(state => state.mainReducer);
    const token = localStorage.getItem('jwtToken');

    const dispatch = useAppDispatch();
    const onClose = (val: boolean) => {
        dispatch(getCommingSoon(val));
    };

    useEffect(() => {
        if (token) {
            dispatch(getUserAsync({ page: 1 }));
        }
    }, [token]);

    return (
        <>
            <div className={`app ${pathname !== '/' && 'app--with-padding'}`}>
                <Header />
                <Routes>
                    <Route path={R.MAIN} element={<Home />} />
                    <Route path={R.CITY_RESULT} element={<SearchResult />} />
                    <Route path={R.HOME_RESULT} element={<House />} />
                    <Route element={<PrivatePage />}>
                        <Route path={R.PROFILE} element={<Profile />} />
                    </Route>
                    <Route path={R.GOOGLE_REDIRECT} element={<GoogleCallback />} />
                    <Route path={R.NOT_FOUND} element={<NotFound />} />
                </Routes>
                <Login />
                <Register />
                <CommingSoon isShow={comming_soon} onClose={() => onClose(false)} />
            </div>
        </>
    );
};

export default App;
