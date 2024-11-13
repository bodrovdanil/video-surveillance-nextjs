import Image from "next/image";
import styles from "./Footer.module.css";

type IconTextProps = {
    src: string;
    alt: string;
    children: React.ReactNode;
    href?: string;
};

const IconText = ({ src, alt, children, href }: IconTextProps) => (
    <div className={styles.iconTextContainer}>
        <Image src={src} alt={alt} width={14} height={14} className={styles.icon} />
        {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {children}
            </a>
        ) : (
            <span>{children}</span>
        )}
    </div>
);

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerInnerContainer}>
                <Image
                    src="/images/icon/logo-white.png"
                    alt="logo-white"
                    width={190}
                    height={56}
                    className={styles.logo}
                />
                <p className={styles.slogan}>
                    Лидер в сфере решения IT-Задач
                </p>
            </div>
            <div className={styles.footerContent}>
                <IconText
                    src="/images/icon/footer-address-icon.svg"
                    alt="footer-address-icon"
                    href="https://www.google.com/maps/search/?api=1&query=Нижний+Тагил,ул.+Коммуны,+дом+98"
                >
                    обл. Свердловская, г. Нижний Тагил, ул. Коммуны, дом 98
                </IconText>
                <IconText src="/images/icon/footer-worktime-icon.svg" alt="footer-worktime-icon">
                    пн-пт 8:00-20:00<br />сб-вс 8:00-17:00
                </IconText>
                <div className={styles.contactInfo}>
                    <IconText src="/images/icon/footer-phone-icon.svg" alt="footer-phone-icon" href="tel:+79222267707">
                        +7 (922) 226-77-07
                    </IconText>
                    <IconText src="/images/icon/footer-mail-icon.svg" alt="footer-mail-icon" href="mailto:cctvsecurity@mail.ru">
                        cctvsecurity@mail.ru
                    </IconText>
                </div>
            </div>
        </div>
    );
};

export default Footer;
