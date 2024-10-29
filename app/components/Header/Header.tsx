import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Image
                src="/images/logo.png"
                alt="Logo"
                width={163}
                height={48}
                className={styles.logo}
            />
            <nav className={styles.nav}>
                <Link href="/services">наши услуги</Link>
                <Link href="/articles">статьи</Link>
                <Link href="/info">информация</Link>
                <Link href="/about">о нас</Link>
                <Link href="/contacts">контакты</Link>
            </nav>
            <Button variant="outline">отправить заявку</Button>
        </header>
    );
};

export default Header;
