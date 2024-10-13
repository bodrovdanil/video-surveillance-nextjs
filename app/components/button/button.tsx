import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'filled' | 'outline';
}

const Button = ({ variant, children, ...props }: ButtonProps) => {
    const buttonClass = variant === 'filled' ? styles.buttonFilled : styles.buttonOutline;
    return (
        <button className={buttonClass} {...props}>
            {children}
        </button>
    );
};

export default Button;
