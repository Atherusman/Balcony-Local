import { FC } from 'react';
import './Loading.scss';
import { Loader } from '../Loader';

export const Loading: FC = () => {
    return (
        <div className="loading">
            <Loader />
        </div>
    );
};
