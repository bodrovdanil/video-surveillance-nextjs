import Image from 'next/image';
import SecurityCamerasData from "./SecurityCameras.json";
import styles from './SecurityCameras.module.css';

interface ISecurityCameras {
    id: number;
    img: string;
    bgPosition: string;
    h: string;
    title: string;
    subtitle: string;
}

const SecurityCameras = () => {
    return (
        <div className={styles.container}>
            <div className="relative">
                <Image src="/images/GroupHexagonLeft.png" alt="Hexagon" width={362} height={1235} className={styles.image1} />
                <Image src="/images/GroupPointOne.png" alt="Hexagon" width={89} height={103} className={styles.image2} />
                <Image src="/images/GroupHexagonRight.png" alt="Hexagon" width={434} height={1235} className={styles.image3} />
                <Image src="/images/HexagonLeft.png" alt="Hexagon" width={95} height={125} className={styles.image4} />
                <Image src="/images/HexagonRight.png" alt="Hexagon" width={101} height={133} className={styles.image5} />
            </div>
            <h2 className={styles.title}>камеры <span className='font-extrabold'>видеонаблюдения</span></h2>
            <div className={styles.flexContainer}>
                {SecurityCamerasData.map((item: ISecurityCameras, index: number) => (
                    <div key={index} className={`${styles.cameraItem} ${item.id % 2 === 0 ? styles.cameraItemEven : styles.cameraItemOdd}`} style={{
                        backgroundImage: `url(${item.img})`,
                        backgroundSize: 'auto',
                        backgroundPosition: item.bgPosition,
                        height: item.h
                    }}>
                        <div className="flex-1 flex flex-col"></div>
                        <div className={styles.cameraContent}>
                            <h3 className={styles.cameraTitle}>{item.title}
                                <svg viewBox="0 0 330 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0.5H330" stroke="white" strokeDasharray="6 6" />
                                </svg>
                            </h3>
                            <p className={styles.cameraSubtitle}>{item.subtitle.split('\n').map((line, i) => (<span key={i}>{line}<br /></span>))}</p>
                            <div className={`${item.id < 4 ? styles.svgContainer : ''}`}>
                                <svg width="80" height="2" viewBox="0 0 80 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 1H80" stroke="#7D53F8" strokeWidth="2" strokeDasharray="6 6" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecurityCameras;
