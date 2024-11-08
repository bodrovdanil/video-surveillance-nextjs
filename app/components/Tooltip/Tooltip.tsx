import React, { useState } from 'react';
import styles from './Tooltip.module.css';

interface TooltipProps {
    id: number;
    text: string;
    text2: string;
    isActive: boolean;
    onClick?: (id: number) => void;
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
            className={styles.tooltipButton}
        >
            <svg
                width="261" height="145"
                className={styles.tooltipSvg}
                style={{ transform: `scale(${scale})` }}
            >
                <rect y="28" width="261" height="117" rx="20" ry="20" className={styles.tooltipRect} />
                <rect x="7" y="35" width="247" height="103" rx="20" ry="20" fill='none' className={styles.tooltipStroke} style={{ stroke: colorMain }} />
                <path fill="#fff" d="m130 0 20 28h-40z" />
                <text x="50%" y="75" className={styles.tooltipTextMain} style={{ fill: colorMain }}>Разрешение</text>
                <text x="34%" y="110" className={styles.tooltipTextSecondary} style={{ fill: textColor }}>{text}</text>
                <text x="77%" y="110" className={styles.tooltipTextSecondary} style={{ fill: textColor }}>{text2}</text>
                <line x1="152" y1="101" x2="166" y2="115" className={styles.tooltipLine} style={{ stroke: colorMain }} />
                <line x1="152" y1="115" x2="166" y2="101" className={styles.tooltipLine} style={{ stroke: colorMain }} />
            </svg>
        </button>
    );
};

export default Tooltip;
