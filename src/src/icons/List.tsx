import { FC } from 'react';

interface IProps {
    color?: string;
}

export const IconList: FC<IProps> = ({ color = '#BDBDBD' }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="2" y="3" width="20" height="3" rx="1" fill={color} />
            <rect x="2" y="8" width="20" height="3" rx="1" fill={color} />
            <rect x="2" y="13" width="20" height="3" rx="1" fill={color} />
            <rect x="2" y="18" width="20" height="3" rx="1" fill={color} />
        </svg>
    );
};
