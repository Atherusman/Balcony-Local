import { FC } from 'react';

interface IProps {
    color?: string;
    width?: number;
    height?: number;
}

export const IconArrow: FC<IProps> = ({ color = '#1E1231', width = 24, height = 24 }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14.7335 17.1189C15.0888 16.7201 15.0888 16.0758 14.7335 15.677L11.1982 11.709L14.7335 7.74109C15.0888 7.34225 15.0888 6.69797 14.7335 6.29913C14.3781 5.90029 13.8041 5.90029 13.4487 6.29913L9.26651 10.9932C8.91116 11.392 8.91116 12.0363 9.26651 12.4351L13.4487 17.1292C13.795 17.5178 14.3781 17.5178 14.7335 17.1189Z"
                fill={color}
            />
        </svg>
    );
};
