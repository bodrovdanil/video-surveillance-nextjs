import Image from 'next/image';
import PossibilitiesData from './Possibilities.json'

interface IPossibilities {
    img: string;
    icon: string;
    title: string;
    subtitle: string;
}


const Possibilities = () => {
    return (
        <div className="w-full text-center pt-16 pb-[177px]">
            <div className="relative">
                <Image src="/images/effectPointOne.png" alt="point" width={64} height={112} className="absolute rotate-90 right-[30px] top-[404px]" />
                <Image src="/images/effectPointOne.png" alt="point" width={64} height={112} className="absolute top-[563px]" />
            </div>
            <h2 className="text-[36px] font-bold text-charcoal mb-10">ВОЗМОЖНОСТИ</h2>
            <div className="flex justify-center">
                <div className="max-w-[1600px] w-full">
                    <div className="flex flex-wrap justify-center">
                        {PossibilitiesData.map((item: IPossibilities, index: number) => (
                            <div key={index} className="w-[380px] h-[415px] m-4 flex flex-col items-center relative">
                                <img src={item.img} alt={item.title} className="w-[360px] h-[211px] rounded-[20px] shadow-md" />
                                <Image src={item.icon} alt={item.title} width={80} height={80} className="absolute left-1/2 transform -translate-x-1/2" style={{ top: '171px', zIndex: 10 }} />
                                <h3 className="text-20 font-bold text-blackbirds-egg mt-12 leading-[37px]">{item.title}</h3>
                                <p className="text-16 font-light text-gray leading-6">{item.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Possibilities;
