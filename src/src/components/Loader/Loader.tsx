import { FC } from 'react';
import './Loader.scss';
interface IProps {
    color?: 'white' | 'violet';
}
export const Loader: FC<IProps> = ({ color = 'violet' }) => (
    <span className={`loader loader--${color}`} />
);
