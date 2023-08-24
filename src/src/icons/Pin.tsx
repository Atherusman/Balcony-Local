import { FC } from 'react';

interface IProps {
    color?: string;
    width?: number;
    height?: number;
}

export const IconPin: FC<IProps> = ({ color = '#6A5ECC', width = 24, height = 24 }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="10" cy="10" r="10" transform="matrix(1 0 0 -1 2 20)" fill={color} />
            <path d="M12 23L8 16H16L12 23Z" fill={color} />
            <circle cx="4" cy="4" r="4" transform="matrix(1 0 0 -1 8 14)" fill="white" />
        </svg>
    );
};
