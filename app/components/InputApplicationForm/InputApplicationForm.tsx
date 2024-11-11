"use client";
import InputMask from 'react-input-mask-next';
import Image from 'next/image';
import styles from './InputApplicationForm.module.css';

type InputType = 'phone' | 'name';

interface InputApplicationFormProps {
    inputType: InputType;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputApplicationForm = ({ inputType, value, onChange }: InputApplicationFormProps) => {

    const inputProps = {
        value,
        onChange,
        className: styles.inputField,
        id: inputType === 'phone' ? 'userPhone' : 'userName',
        name: inputType === 'phone' ? 'userPhone' : 'userName',
        placeholder: inputType === 'phone' ? "Ваш номер телефона" : "Ваше имя",
        title: inputType === 'phone' ? "Введите номер телефона в формате +7 999-999-9999" : "Введите ваше имя",
        required: true
    };

    return (
        <div>
            <div className={styles.formContainer}>
                <div className={styles.inputWrapper}>
                    <span className={styles.iconSpan}>
                        <Image
                            src={inputType === 'phone' ? './images/icon/telephone.svg' : './images/icon/user.svg'}
                            alt={inputType === 'phone' ? 'telephone' : 'username'}
                            width={20}
                            height={20}
                            className={styles.iconSize}
                        />
                    </span>
                    {inputType === 'phone' ? (
                        <InputMask {...inputProps} mask="+7 999-999-9999" />
                    ) : (
                        <input type="text" {...inputProps} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default InputApplicationForm;
