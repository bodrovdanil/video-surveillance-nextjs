import Button from '../Button/Button';
import styles from './HomeScreen.module.css';

const HomeScreen = () => {
    return (
        <div className={styles.container}>
            <div className={styles.buttonContainer}>
                <h1 className={styles.title}>Проектирование и установка систем видеонаблюдения</h1>
            </div>
            <div className={styles.buttonContainer}>
                <h4 className={styles.subtitle}>Защитите свой бизнес от неожиданных сбоев!</h4>
            </div>
            <div className={styles.buttonContainer}>
                <Button variant="filled">узнать больше</Button>
            </div>
        </div>
    );
};

export default HomeScreen;
