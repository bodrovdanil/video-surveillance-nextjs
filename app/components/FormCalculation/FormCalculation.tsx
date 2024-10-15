import Image from 'next/image';
import InputPhone from '../InputPhone/InputPhone';
import Button from '../Button/Button';

const FormCalculation = () => {
    return (
        <div className='flex justify-center w-full h-screen'>
            <div className='relative w-[1140px] h-[141px] rounded-[20px] bg-blue-red shadow-xl flex flex-col'>
                <Image src="/images/Form.png" alt='form' width={1140} height={141} className='rounded-[20px]' />
                <div className='flex items-center justify-start absolute  left-[68px] w-full'>
                    <div className='mt-10 mr-7 w-[23px] h-[23px] bg-blackbirds-egg rounded-full'></div>
                    <div className='mt-[26px] w-[366px] h-[87px]'>
                        <p className='text-[20px] leading-7 font-normal text-white'>
                            Проект и просчет системы Видеонаблюдения для Вашего Бизнеса <span className='font-extrabold text-[24px] uppercase'>бесплатно!</span>
                        </p>
                    </div>
                    <div className='-ml-9 mt-12 w-[373px] h-[49px]'>
                        <InputPhone />
                    </div>
                    <div className='ml-[21px] mt-12 w-[249px] h-[49px] normal-case'>
                        <Button variant='filled' uppercase={false}>Получить расчет</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormCalculation;


