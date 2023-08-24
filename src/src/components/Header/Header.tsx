import './Header.scss';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { setLoginModal } from 'src/store';

import { MainButton, ProfileMenu } from 'src/components';

import logo from 'src/assets/images/balcony.svg';

export const Header = () => {
    const { token } = useAppSelector(state => state.userReducer);

    const [scroll, setScroll] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { pathname } = useLocation();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 10);
        });
    }, []);

    const handleLogin = () => {
        dispatch(setLoginModal(true));
    };

    return (
        <header className={`header ${(pathname !== '/' || scroll) && 'header--white'}`}>
            <div className="header__content container">
                <div className="header__content_part">
                    <img src={logo} alt="logo" onClick={() => navigate('/')} />
                </div>
                <div className="header__content_part header__content_part-buttons">
                    {token ? (
                        <ProfileMenu />
                    ) : (
                        <>
                            <MainButton
                                buttonType="primary"
                                buttonColor="black"
                                onClick={() => {
                                    handleLogin();
                                }}
                            >
                                Log In
                            </MainButton>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};
