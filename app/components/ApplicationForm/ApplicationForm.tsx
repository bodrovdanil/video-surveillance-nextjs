"use client"
import { useState } from 'react';
import Button from '../Button/Button';
import InputForm from '../InputForm/InputForm';
import styles from './ApplicationForm.module.css';

const ApplicationForm = () => {
    const [name, setName] = useState<string>('');
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
                setName('');
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
            <h2 className={styles.title}>
                спроектируем <span className="font-extrabold">систему видеонаблюдения</span>
            </h2>
            <div className={styles.formContainer}>
                <p className={styles.subtitle}>
                    Решим Вашу IT - задачу
                </p>
                <form onSubmit={handleSubmit} id="application-form">
                    <div className={styles.inputWrapper}>
                        <InputForm
                            inputType="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <InputForm
                            inputType="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className={styles.buttonWrapper}>
                        <Button variant="filled" disabled={isLoading}>
                            {isLoading ? 'Отправляется...' : 'отправить'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplicationForm;
