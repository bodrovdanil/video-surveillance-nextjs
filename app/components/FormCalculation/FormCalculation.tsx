import Image from 'next/image';
import InputPhone from '../InputPhone/InputPhone';
import Button from '../Button/Button';
import styles from './FormCalculation.module.css';

const FormCalculation = () => {
    return (
        <div className={styles.container}>
            <Image src="/images/HighlightingForm.png" alt='lightingForm' width={1505} height={406} className={styles.lighting} />
            <div className={styles.formWrapper}>
                <Image src="/images/Form.png" alt='form' width={1140} height={141} className={styles.image} />
                <div className={styles.content}>
                    <div className={styles.dot}></div>
                    <div className={styles.textWrapper}>
                        <p className={styles.text}>
                            Проект и просчет системы Видеонаблюдения для Вашего Бизнеса <span className='font-extrabold text-[24px] uppercase'>бесплатно!</span>
                        </p>
                    </div>
                    <div className={styles.phoneInput}>
                        <InputPhone />
                    </div>
                    <div className={styles.buttonWrapper}>
                        <Button variant='filled' uppercase={false}>Получить расчет</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormCalculation;

