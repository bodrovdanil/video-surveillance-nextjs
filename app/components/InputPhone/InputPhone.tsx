import Image from 'next/image';
import InputMask from 'react-input-mask-next';
import styles from './InputPhone.module.css';

interface InputPhoneProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputPhone = ({ value, onChange }: InputPhoneProps) => {
    return (
        <div className={styles.inputContainer}>
            <div className={styles.relatives}>
                <span className={styles.icon}>
                    <Image src='/images/icon/telephone.svg' alt='telephone' width={20} height={20} className='w-5 h-5' />
                </span>
                <InputMask
                    mask="+7 999-999-9999"
                    value={value}
                    onChange={onChange}
                    id='phone'
                    name='phone'
                    className={styles.inputField}
                    placeholder="Ваш номер телефона"
                    title="Введите номер телефона в формате +7 999-999-9999"
                    required
                />
            </div>
        </div>
    );
};

export default InputPhone;
