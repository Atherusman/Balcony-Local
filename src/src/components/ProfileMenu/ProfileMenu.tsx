import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { Routes as R } from 'src/constants';
import { dotsInText } from 'src/helpers';
import { useOnClickOutside, useAppSelector } from 'src/hooks';

import { Logout } from 'src/icons';
import { getCommingSoon, logOut } from 'src/store';

import defaultUser from 'src/assets/images/defaultUser.png';

import './ProfileMenu.scss';

export const ProfileMenu = () => {
    const { user } = useAppSelector(state => state.userReducer);

    const [openSelect, setOpenSelect] = useState<boolean>(false);
    const selectClickHandler = () => setOpenSelect(prevState => !prevState);
    const nodeRef = useRef<HTMLDivElement | null>(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useOnClickOutside(nodeRef, () => setOpenSelect(false));

    return (
        <div className="profile-menu">
            <div ref={nodeRef} className="profile-menu__content">
                <div onClick={selectClickHandler} className="profile-menu__content_user">
                    <div
                        className="profile-menu__content_user-picture"
                        style={{
                            backgroundImage: `url(${
                                user.profile_picture ? user.profile_picture : defaultUser
                            })`,
                        }}
                    />
                    <div className="profile-menu__content_user-text">
                        <h4>
                            {user.name} {user.last_name}
                        </h4>
                        <h5>{user.metamask_wallet_id && dotsInText(user.metamask_wallet_id, 5)}</h5>
                    </div>
                </div>
                <div
                    className={`profile-menu__content_dropdown profile-menu__content_dropdown--${
                        openSelect ? 'open' : 'close'
                    }`}
                >
                    <ul className="profile-menu__content_dropdown-list">
                        <NavLink
                            to={R.PROFILE}
                            className={({ isActive }) =>
                                isActive
                                    ? 'profile-menu__content_dropdown-list-item profile-menu__content_dropdown-list-item--active'
                                    : 'profile-menu__content_dropdown-list-item'
                            }
                        >
                            Profile Dashboard
                        </NavLink>
                        <li onClick={() => dispatch(getCommingSoon(true))}>Claim reNFT</li>
                        <li onClick={() => dispatch(getCommingSoon(true))}>Settings</li>
                        <li onClick={() => dispatch(logOut(navigate))}>
                            <Logout /> Log Out
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
