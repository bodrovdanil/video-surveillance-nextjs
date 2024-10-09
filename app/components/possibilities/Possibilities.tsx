import React from 'react';
import Image from 'next/image';
import possibilities from './possibilities.json';

interface Opportunity {
    img: string;
    icon: string;
    title: string;
    subtitle: string;
}

const Possibilities: React.FC = () => {
    return (
        <div className="w-full text-center py-16">
            <div className="relative">
                <img src="/images/effect-point-two.png" alt="point" className="absolute right-0 top-[404px] w-[112px] h-[64px]" />
            </div>
            <div className="relative">
                <img src="/images/effect-point-one.png" alt="point" className="absolute top-[563px] w-[64px] h-[112px]" />
            </div>
            <h2 className="text-[36px] font-bold text-charcoal mb-10">ВОЗМОЖНОСТИ</h2>
            <div className="flex flex-wrap justify-center">
                {possibilities.map((item: Opportunity, index: number) => (
                    <div key={index} className="w-[380px] h-[415px] m-4 flex flex-col items-center relative">
                        <img src={item.img} alt={item.title} className="w-[360px] h-[211px] rounded-[20px] shadow-md" />
                        <img src={item.icon} alt={item.title} className="h-20 w-20 absolute left-1/2 transform -translate-x-1/2" style={{ top: '171px', zIndex: 10 }} />
                        <h3 className="text-20 font-bold text-blackbirds-egg mt-12 leading-[37px]">{item.title}</h3>
                        <p className="text-16 font-light text-gray leading-6">{item.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Possibilities;
