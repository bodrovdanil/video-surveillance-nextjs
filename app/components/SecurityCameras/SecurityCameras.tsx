import Image from 'next/image';
import SecurityCamerasData from "./SecurityCameras.json";


interface ISecurityCameras {
    id: number;
    img: string;
    width: number;
    height: number;
    title: string;
    subtitle: string;
}

const SecurityCameras = () => {
    return (
        <div className="bg-blue-red w-full text-center text-white py-1  mb-">
            <div className="relative">
                <img src="/images/HighlightingForm.png" alt='lightingForm' className='max-w-[78.4%] h-[406px] z-0 absolute left-[10%] -top-[154px]' />
                <Image src="/images/GroupHexagonLeft.png" alt="Hexagon" width={426} height={844} className="absolute left-0 top-[585px]" />
                <Image src="/images/GroupPointOne.png" alt="Hexagon" width={89} height={103} className="rotate-90 absolute left-[17.7%] -top-3" />
                <Image src="/images/GroupHexagonRight.png" alt="Hexagon" width={434} height={722} className="absolute right-0 top-[1036px]" />
                <Image src="/images/HexagonLeft.png" alt="Hexagon" width={64} height={112} className="absolute top-[188px]" />
                <Image src="/images/HexagonRight.png" alt="Hexagon" width={170} height={132} className="absolute right-0 top-[563px]" />

            </div>
            <h2 className="text-[36px] font-semibold uppercase mt-[153px]">камеры <span className='font-extrabold'>видеонаблюдения</span></h2>
            <div className='flex flex-wrap justify-center'>
                
            </div>
            <div className="flex flex-wrap justify-center">
                {SecurityCamerasData.map((item: ISecurityCameras, index: number) => (
                    <div key={index} className={`w-[1500px] h-[950px] -mt-[400px] flex ${item.id % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} relative`}>
                        <div className="flex-1 flex flex-col">
                            <Image src={item.img} alt={item.title} width={item.width} height={item.height} layout='intrinsic' className={`absolute ${item.id % 2 === 0 ? '-right-[100px]' : '-left-[10px]'} top-0`} />
                        </div>
                        <div className="flex-initial flex flex-col justify-end items-start text-start mt-20 mr-[100px] relative z-10 w-[570px] h-[570px]">
                            <h3 className="text-[24px] font-bold  leading-[37px]">{item.title}</h3>
                            <p className="text-[14px] font-light my-8 leading-6">{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default SecurityCameras;
