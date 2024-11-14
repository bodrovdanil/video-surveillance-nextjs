"use client";
import { useState } from 'react';
import Image from 'next/image';
import InputForm from '../InputForm/InputForm';
import Button from '../Button/Button';
import styles from './FormCalculation.module.css';

const FormCalculation = () => {
    const [phone, setPhone] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (phone.includes('_')) {
            alert('Пожалуйста, введите полный номер телефона.');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('/api/sendToTelegram', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, phone }),
            });

            const data = await response.json();
            if (response.ok) {
                alert('Ваш запрос отправлен!');
                setPhone('');
            } else {
                alert(`Ошибка: ${data.error}`);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                alert(`Произошла ошибка при отправке: ${error.message}`);
            } else {
                alert('Произошла ошибка при отправке.');
            }
        } finally {
            setIsLoading(false);
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
                    <form onSubmit={handleSubmit} className='flex'>
                        <div className={styles.phoneInput}>
                            <InputForm
                                inputType="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                styleType="alternate"
                            />
                        </div>
                        <div className={styles.buttonWrapper}>
                            <Button variant="filled" uppercase={false} disabled={isLoading}>
                                {isLoading ? 'Отправляется...' : 'Получить просчет'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormCalculation;
