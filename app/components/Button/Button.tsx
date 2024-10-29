"use client";
import { ButtonHTMLAttributes, useState } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'filled' | 'outline';
    uppercase?: boolean;
}

const Button = ({ variant, children, uppercase = true, ...props }: ButtonProps) => {
    const [isPressed, setIsPressed] = useState(false);

    const buttonClass = variant === 'filled' ? styles.buttonFilled : styles.buttonOutline;
    const textClass = uppercase ? 'uppercase' : '';

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUpOrLeave = () => setIsPressed(false);

    return (
        <button
            className={`${buttonClass} ${textClass} ${isPressed ? styles.buttonPressed : ''}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            style={{
                transform: isPressed ? 'scale(0.9)' : 'scale(1)',
                transition: 'transform 0.2s ease'
            }}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
