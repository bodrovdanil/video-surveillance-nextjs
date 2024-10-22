import Image from 'next/image';
import SecurityCamerasData from "./SecurityCameras.json";
import './SecurityCameras.module.css'

interface ISecurityCameras {
    id: number;
    backgroundImage: string;
    backgroundSize: string;
    backgroundPosition: string;
    title: string;
    subtitle: string;
}

const SecurityCameras = () => {
    return (
        <div className="bg-blue-red w-full text-center  text-white pt-1 pb-[180px]">
            <div className="relative">
                <Image src="/images/HighlightingForm.png" alt='lightingForm'  width={1505}  height={406} className='z-0 absolute left-[10%] -top-[152px]' />
                <Image src="/images/GroupHexagonLeft.png" alt="Hexagon" width={426} height={844} className="absolute left-0 top-[585px]" />
                <Image src="/images/GroupPointOne.png" alt="Hexagon" width={89} height={103} className="rotate-90 absolute left-[17.7%] -top-3" />
                <Image src="/images/GroupHexagonRight.png" alt="Hexagon" width={434} height={722} className="absolute right-0 top-[1036px]" />
                <Image src="/images/HexagonLeft.png" alt="Hexagon" width={64} height={112} className="absolute top-[188px]" />
                <Image src="/images/HexagonRight.png" alt="Hexagon" width={170} height={132} className="absolute right-0 top-[563px]" />

            </div>
            <h2 className="text-[36px] font-semibold uppercase mt-[154px] mb-[125px]">камеры <span className='font-extrabold'>видеонаблюдения</span></h2>
            <div className="flex flex-col flex-wrap items-center">
                {SecurityCamerasData.map((item: ISecurityCameras, index: number) => (
                    <div
                        key={index}
                        className={`w-[1077px] flex overflow-visible ${item.id % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} relative`}
                        style={{
                            backgroundImage: `url(${item.backgroundImage})`,
                            backgroundSize: 'cover', // или 'auto'
                            backgroundPosition: 'center',
                        }}>
                    <div className="flex-1 flex flex-col overflow-visible">
                        </div>
                        <div className=" overflow-visible mb-28 flex-initial flex flex-col justify-start items-start text-start relative w-[570px]">
                            <h3 className="text-[24px] font-bold  leading-[37px]">{item.title}
                                <svg viewBox="0 0 330 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0.5H330" stroke="white" strokeDasharray="6 6" />
                            </svg></h3>
                            <p className="text-[14px] font-light my-8 leading-6">{item.subtitle.split('\n').map((line, i) => (<span key={i}>{line}<br /></span>))}</p>
                                <div className={`${item.id < 4 ? 'flex justify-end w-[540px]' : ''} `} >
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
