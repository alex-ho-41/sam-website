import React from 'react';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8" }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M20 20H80V80H20V20Z"
                stroke="currentColor"
                strokeWidth="8"
            />
            <path
                d="M35 35H65M35 50H65M35 65H65"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="square"
            />
        </svg>
    );
};

export default Logo;
