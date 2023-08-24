import { Navigate, Outlet } from 'react-router-dom';
import { Routes as R } from 'src/constants';
import { useAppSelector } from 'src/hooks';

export const PrivatePage = (): JSX.Element => {
    const { token } = useAppSelector(state => state.userReducer);

    return token ? <Outlet /> : <Navigate to={R.MAIN} />;
};
