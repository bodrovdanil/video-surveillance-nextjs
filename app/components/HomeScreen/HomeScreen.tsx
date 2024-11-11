"use client"
import Button from '../Button/Button';
import styles from './HomeScreen.module.css';

const HomeScreen = () => {
    const scrollToComponent = () => {
        const element = document.getElementById('Possibilities');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h1 className={styles.title}>Проектирование и установка систем видеонаблюдения</h1>
            </div>
            <div className={styles.container}>
                <p className={styles.subtitle}>Защитите свой бизнес от неожиданных сбоев!</p>
            </div>
            <div className={styles.container}>
                <Button variant="filled" onClick={scrollToComponent}>узнать больше</Button>
            </div>
        </div>
    );
};

export default HomeScreen;

