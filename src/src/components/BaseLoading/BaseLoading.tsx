import { FC } from 'react';
import './BaseLoading.scss';
import { Loader } from '../Loader';

export const BaseLoading: FC = () => {
    return (
        <div className="base-loading">
            <Loader />
        </div>
    );
};
