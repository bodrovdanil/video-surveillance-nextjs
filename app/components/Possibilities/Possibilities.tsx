import Image from 'next/image';
import PossibilitiesData from './Possibilities.json';
import styles from './Possibilities.module.css';

interface IPossibilities {
    img: string;
    icon: string;
    title: string;
    subtitle: string;
}

const Possibilities = () => {
    return (
        <div className={styles.container} id="Possibilities">
            <div className="relative">
                <Image src="/images/effectPointOne.png" alt="point" width={64} height={112} className={styles.effectPoint} />
                <Image src="/images/effectPointOne.png" alt="point" width={64} height={112} className={styles.effectPointTwo} />
            </div>
            <h2 className={styles.title}>ВОЗМОЖНОСТИ</h2>
            <div className={styles.wrapper}>
                <div className={styles.maxWidth}>
                    <div className={styles.flexWrapper}>
                        {PossibilitiesData.map((item: IPossibilities, index: number) => (
                            <div key={index} className={styles.card}>
                                <div className='relative'>
                                    <Image src={item.img} alt={item.title} width={360} height={211} className={styles.image} />
                                    <Image src={item.icon} alt={item.title} width={80} height={80} className={styles.icon} />
                                </div>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardSubtitle}>{item.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Possibilities;
