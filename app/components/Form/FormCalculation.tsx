import Image from 'next/image';
import InputPhone from '../InputPhone/InputPhone';
import Button from '../Button/Button';

const FormCalculation = () => {
    return (
        <div className='flex justify-center h-screen'>
            <div className='relative w-[1140px] h-[141px] rounded-[20px] bg-blue-red shadow-xl'>
                <Image src="/images/Form.png" alt='form' width={1140} height={141} className=' rounded-[20px]' />
                <div className="absolute top-[40px] left-[68px]  w-[23px] h-[23px] bg-blackbirds-egg rounded-full"></div>
                <div className='absolute w-[366px] h-[87px] top-[26px] left-[128px]'>
                    <p className='  text-[22px] leading-7 font-normal text-white'>
                        Проект и просчет системы Видеонаблюдения для Вашего Бизнеса <span className='font-bold text-[24px] uppercase'>бесплатно!</span>
                    </p>
                </div>
                <div className='absolute w-[373px] h-[49px] top-[48px] left-[457px]'>
                    <InputPhone />
                </div>
                <div className='absolute top-[48px] left-[851px]'>
                    <Button variant='filled'>получить расчет</Button>
                </div>
                
            </div>
        </div>
    );
};

export default FormCalculation;

