import Image from 'next/image';
import SecurityCamerasData from "./SecurityCameras.json";
import styles from './SecurityCamerasMobile.module.css';

interface ISecurityCameras {
    id: number;
    imgMobile: string;
    title: string;
    subtitle: string;
}

const SecurityCamerasMobile = () => {
    return (
        <div className={styles.container}>
            <div className="relative">
                <Image src="/images/GroupHexagonLeft.png" alt="Hexagon" width={362} height={1235} className={styles.image1} />
                <Image src="/images/GroupHexagonRight.png" alt="Hexagon" width={434} height={1235} className={styles.image2} />
                <Image src="/images/HexagonLeft.png" alt="Hexagon" width={95} height={125} className={styles.image3} />
                <Image src="/images/HexagonRight.png" alt="Hexagon" width={101} height={133} className={styles.image4} />
            </div>
            <h2 className={styles.title}>камеры <span className='font-extrabold'>видеонаблюдения</span></h2>
            <div className={styles.flexWrapper}>
                    {SecurityCamerasData.map((item: ISecurityCameras, index: number) => (
                        <div key={index} className={styles.card}>
                            <div className='relative'>
                                <Image src={item.imgMobile} alt={item.title} width={360} height={211} className={styles.image} />
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardSubtitle}>{item.subtitle}</p>
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default SecurityCamerasMobile;
