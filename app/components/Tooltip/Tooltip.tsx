import React, { useState } from 'react';

interface TooltipProps {
    id: number;
    text: string;
    text2: string;
    isActive: boolean;
    onClick?: (id: number) => void; // Изменим тип onClick, чтобы передавать id
}

const Tooltip = ({ id, text, text2, isActive, onClick }: TooltipProps) => {
    const [scale, setScale] = useState(1);

    const colorMain = isActive ? '#00c5de' : '#b6eeec';
    const textColor = isActive ? '#414141' : '#e7e7e7';

    const handleMouseDown = () => {
        setScale(0.9);
        if (onClick) onClick(id);
    };

    const handleMouseUp = () => {
        setScale(1);
    };

    return (
        <button
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
            <svg
                width="261" height="145"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: `scale(${scale})`, transition: 'transform 0.2s' }}
            >
                <rect y="28" width="261" height="117" rx="20" ry="20" fill="#fff" />
                <rect x="7" y="35" width="247" height="103" rx="20" ry="20" fill="none" stroke={colorMain} strokeDasharray="5, 5" />
                <path fill="#fff" d="m130 0 20 28h-40z" />
                <text x="50%" y="75" fontSize="24" fontWeight="600" fill={colorMain} textAnchor="middle" dominantBaseline="middle">Разрешение</text>
                <text x="36%" y="110" fontSize="20" fontWeight="400" fill={textColor} textAnchor="middle" dominantBaseline="middle">{text}</text>
                <text x="77%" y="110" fontSize="20" fontWeight="400" fill={textColor} textAnchor="middle" dominantBaseline="middle">{text2}</text>
                <line x1="156" y1="101" x2="170" y2="115" stroke={colorMain} strokeWidth="4" />
                <line x1="156" y1="115" x2="170" y2="101" stroke={colorMain} strokeWidth="4" />
            </svg>
        </button>
    );
};

export default Tooltip;
