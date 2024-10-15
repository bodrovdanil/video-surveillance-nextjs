import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'filled' | 'outline';
    uppercase?: boolean;
}


const Button = ({ variant, children, uppercase = true, ...props }: ButtonProps) => {
    const buttonClass = variant === 'filled' ? styles.buttonFilled : styles.buttonOutline;
    const textClass = uppercase ? 'uppercase' : '';

    return (
        <button className={`${buttonClass} ${textClass}`} {...props}>
            {children}
        </button>
    );
};


export default Button;
