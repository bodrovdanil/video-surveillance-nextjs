import React, { useState } from 'react';

interface CircleIconProps {
    id: number;
    isActive?: boolean;
    onClick?: () => void;
}

const CircleIcon = ({ id, isActive = true, onClick }: CircleIconProps) => {
    const [scale, setScale] = useState(1);

    const colors = isActive
        ? { fill: '#00C5DE', stroke: '#FDFDFD' }
        : { fill: '#FDFDFD', stroke: '#00C5DE' };

    const handleMouseDown = () => {
        setScale(0.9);
        if (onClick) onClick();
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
            <svg width="54" height="54" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `scale(${scale})`, transition: 'transform 0.2s' }}
            >
                <circle cx="27" cy="27" r="27" fill="none" stroke="#00c5de" strokeWidth="1" strokeDasharray="5 5" />
                <circle cx="27" cy="27" r="22" fill={colors.fill} />
                <text x="26" y="35" fontWeight="800" fontSize="24" textAnchor="middle" fill={colors.fill} stroke={colors.stroke} strokeWidth="0.7">
                    {id}
                </text>
            </svg>
        </button>
    );
};

export default CircleIcon;
