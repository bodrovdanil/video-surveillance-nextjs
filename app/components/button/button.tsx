import React from 'react';
import styles from './button.module.css';

interface ButtonProps {
    variant?: 'outline' | 'filled';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'outline', children }) => {
    const buttonClass = variant === 'filled' ? styles.button_filled : styles.button_outline;

    return (
        <button className={buttonClass}>
            {children}
        </button>
    );
};

export default Button;


