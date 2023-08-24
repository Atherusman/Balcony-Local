import { FC } from 'react';

interface IProps {
    color?: string;
}

export const IconGridColumn: FC<IProps> = ({ color = '#6A5ECC' }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="13" y="3" width="9" height="18" rx="1" fill={color} />
            <rect x="2" y="3" width="9" height="8" rx="1" fill={color} />
            <rect x="2" y="13" width="9" height="8" rx="1" fill={color} />
        </svg>
    );
};
