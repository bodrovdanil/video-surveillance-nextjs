"use client";
import { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import InputPhone from '../InputPhone/InputPhone';
import Button from '../Button/Button';
import styles from './FormCalculation.module.css';

const FormCalculation = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/sendNumberToTelegram', {
                phoneNumber,
            });

            if (res.data.success) {
                alert('Ваш запрос отправлен!');
            } else {
                alert('Ошибка при отправке данных.');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Что-то пошло не так.');
        }
    };

    return (
        <div className={styles.container}>
            <Image src="/images/HighlightingForm.png" alt="lightingForm" width={1505} height={406} className={styles.lighting} />
            <div className={styles.formWrapper}>
                <Image src="/images/Form.png" alt="form" width={1140} height={141} className={styles.image} />
                <div className={styles.content}>
                    <div className={styles.dot}></div>
                    <div className={styles.textWrapper}>
                        <p className={styles.text}>
                            Проект и просчет системы Видеонаблюдения для Вашего Бизнеса <span className="font-extrabold text-[24px] uppercase">бесплатно!</span>
                        </p>
                    </div>
                    <div className={styles.phoneInput}>
                        <InputPhone value={phoneNumber} onChange={handlePhoneChange} />
                    </div>
                    <div className={styles.buttonWrapper}>
                        <Button variant="filled" uppercase={false} onClick={handleSubmit}>
                            Получить расчет
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormCalculation;
