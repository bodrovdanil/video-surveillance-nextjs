import React, { useState } from 'react';
import styles from './CircleIcon.module.css';

interface CircleIconProps {
    id: number;
    isActive?: boolean;
    onClick?: () => void;
}

const CircleIcon = ({ id, isActive = true, onClick }: CircleIconProps) => {
    const [scale, setScale] = useState(1);

    const handleMouseDown = () => {
        setScale(0.9);
        if (onClick) onClick();
    };

    const handleMouseUp = () => {
        setScale(1);
    };

    return (
        <button
            className={styles.button}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <svg width="54" height="54" xmlns="http://www.w3.org/2000/svg" className={styles.svg} style={{ transform: `scale(${scale})` }}>
                <circle cx="27" cy="27" r="27" fill="none" stroke="#00c5de" strokeWidth="1" strokeDasharray="5 5" />
                <circle cx="27" cy="27" r="22" className={isActive ? styles.active : styles.inactive} />
                <text x="26" y="35" fontWeight="800" fontSize="24" textAnchor="middle" fill={isActive ? '#00C5DE' : '#FDFDFD'} stroke={isActive ? '#FDFDFD' : '#00C5DE'} strokeWidth="0.7" >
                    {id}
                </text>
            </svg>
        </button>
    );
};

export default CircleIcon;
