"use client";
import React, { useState } from "react";
import Image from "next/image";
import Circle from "../Circle/Circle";
import CircleIcon from "../CircleIcon/CircleIcon";
import { Fira_Sans } from "next/font/google";
import Tooltip from "../Tooltip/Tooltip";
import Button from "../Button/Button";

const firaSans = Fira_Sans({
    weight: ['400', '600'],
    style: ['normal'],
    subsets: ['cyrillic'],
    display: 'swap',
});

const ImageQuality = () => {
    const [activeId, setActiveId] = useState(1);

    const handleClick = (id: number) => {
        setActiveId(id);
    };

    const imageSrc = `/images/OfficeBig${activeId}.png`;
    const circlesCount = 4; // Количество кругов

    return (
        <div>
            <div className="relative">
                <Image src="/images/effectPointOne.png" alt="point" width={64} height={112} className="absolute left-[3px] top-[856px]" />
                <Image src="/images/effectPointOne.png" alt="point" width={64} height={112} className="absolute rotate-90 right-[30px] top-[280px]" />
                <Image src="/images/Gexagon3.png" alt="point" width={72} height={93} className="absolute  right-0 top-[561.5px]" />

            </div>
            <div className="flex flex-col items-center bg-platinum bg-cover bg-center bg-[url('/images/BGQuality.png')]">
                <h2 className="text-[36px] leading-[77px] text-charcoal font-extrabold uppercase mt-20 mb-12">
                    качество <span className="font-bold">изображения</span>
                </h2>
                <div className="relative w-[1140px] h-[669px] rounded-[35px] border-[3px] border-blackbirds-egg flex items-center justify-center mb-10">
                    <img src={imageSrc} alt="Пример качества фото" className="rounded-[20px] w-[1110px] h-[639px]" />
                </div>
                <div className={firaSans.className}>
                    <div className="flex justify-between w-[936px] mx-[102px] mb-[19px]">
                        {Array.from({ length: circlesCount }, (_, index) => (
                            <CircleIcon key={index + 1} id={index + 1} isActive={activeId === index + 1} onClick={() => handleClick(index + 1)} />
                        ))}
                    </div>
                    <div className="relative z-10 flex justify-between drop-shadow-md mb-[19px] w-[1140px] px-[102px]">
                        {Array.from({ length: circlesCount }, (_, index) => (
                            <Circle key={index + 1} isActive={activeId === index + 1} id={index + 1} />
                        ))}
                        <div className="absolute -z-10 left-0 bottom-[9px] h-[2px] w-[1140px] bg-blackbirds-egg" />
                    </div>
                    <div className="relative flex justify-between drop-shadow-md w-[1140px] mb-[45px]">
                        <Tooltip text="1 Мп (1280" text2="720" isActive={activeId === 1} onClick={() => handleClick(1)} id={1} />
                        <Tooltip text="2 Мп (2052" text2=" 1536" isActive={activeId === 2} onClick={() => handleClick(2)} id={2} />
                        <Tooltip text="4 Мп (2560" text2=" 1440" isActive={activeId === 3} onClick={() => handleClick(3)} id={3} />
                        <Tooltip text="6 Мп (3072" text2=" 2048" isActive={activeId === 4} onClick={() => handleClick(4)} id={4} />
                    </div>
                </div>
                <div className="mb-[76px] items-center">
                    <Button variant='filled'>читать подробнее</Button>
                </div>
            </div>
        </div>
    );
}

export default ImageQuality;
