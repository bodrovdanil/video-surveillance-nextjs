"use client";
import React, { useState } from "react";
import { Fira_Sans } from "next/font/google";
import Image from "next/image";
import Circle from "../Circle/Circle";
import CircleIcon from "../CircleIcon/CircleIcon";
import Tooltip from "../Tooltip/Tooltip";
import Button from "../Button/Button";
import styles from "./ImageQuality.module.css";

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
    const circlesCount = 4;

    return (
        <div>
            <div className="relative">
                <Image src="/images/effectPointOne.png" alt="point" width={64} height={112} className="absolute left-[3px] top-[856px]" />
                <Image src="/images/effectPointOne.png" alt="point" width={64} height={112} className="absolute rotate-90 right-[30px] top-[280px]" />
                <Image src="/images/Gexagon3.png" alt="point" width={72} height={93} className="absolute right-0 top-[561.5px]" />
            </div>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    качество <span className="font-bold">изображения</span>
                </h2>
                <div className={styles.imageWrapper}>
                    <img src={imageSrc} alt="Пример качества фото" className={styles.image} />
                </div>
                <div className={firaSans.className}>
                    <div className={styles.circlesWrapper}>
                        {Array.from({ length: circlesCount }, (_, index) => (
                            <CircleIcon key={index + 1} id={index + 1} isActive={activeId === index + 1} onClick={() => handleClick(index + 1)} />
                        ))}
                    </div>
                    <div className={styles.circleContainer}>
                        {Array.from({ length: circlesCount }, (_, index) => (
                            <Circle key={index + 1} isActive={activeId === index + 1} id={index + 1} />
                        ))}
                        <div className={styles.separator} />
                    </div>
                    <div className={styles.tooltipsWrapper}>
                        <Tooltip text="1 Мп (1280" text2="720" isActive={activeId === 1} onClick={() => handleClick(1)} id={1} />
                        <Tooltip text="2 Мп (2052" text2=" 1536" isActive={activeId === 2} onClick={() => handleClick(2)} id={2} />
                        <Tooltip text="4 Мп (2560" text2=" 1440" isActive={activeId === 3} onClick={() => handleClick(3)} id={3} />
                        <Tooltip text="6 Мп (3072" text2=" 2048" isActive={activeId === 4} onClick={() => handleClick(4)} id={4} />
                    </div>
                </div>
                <div className={styles.buttonWrapper}>
                    <Button variant='filled'>читать подробнее</Button>
                </div>
            </div>
        </div>
    );
}

export default ImageQuality;