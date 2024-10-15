import Button from './utton/utton';
const HomeScreen = () => {
    return (
        <div className="h-screen bg-cover bg-center inset-x-0 top-0" style={{ backgroundImage: "url('/images/homePage.png')" }}>
            <div className='flex justify-center'>
                <h1 className='w-[923px] h-[170px] mt-[125px] text-[58px] leading-[77px] text-center text-blackbirds-egg font-medium'>Проектирование и установка систем видеонаблюдения</h1>
            </div>
            <div className='flex justify-center'>
                <h4 className='text-center align-bottom text-[24px] leading-[77px] text-dim-gray font-normal'>Защитите свой бизнес от неожиданных сбоев!</h4>
            </div>
            <div className='flex justify-center'>
                <Button variant="filled">узнать больше</Button>
            </div>
        </div>

    );
};

export default HomeScreen;
