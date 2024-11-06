"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <Image src="/images/logo.png" alt="Logo" width={163} height={48} className={styles.logo} />
            <button className={styles.burgerButton} onClick={toggleMenu}>
                <span className={`${styles.burgerIcon} ${isMenuOpen ? styles.open : ''}`}></span>
            </button>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                <Link href="/services">наши услуги</Link>
                <Link href="/articles">статьи</Link>
                <Link href="/info">информация</Link>
                <Link href="/about">о нас</Link>
                <Link href="/contacts">контакты</Link>
            </nav>
            <div className='hidden xs:flex'><Button variant="outline">отправить заявку</Button></div>
            
        </header>
    );
};

export default Header;

