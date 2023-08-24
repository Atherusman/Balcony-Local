import { FC } from 'react';

interface IProps {
    color?: string;
}

export const IconSearch: FC<IProps> = ({ color = '#ffffff' }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="11.4905"
                cy="11.4905"
                r="7.49047"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16.7002 17.0892L19.6369 20.0183"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
