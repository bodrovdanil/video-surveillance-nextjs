import Image from 'next/image';
import SecurityCameras from "./SecurityCameras.json"

interface SecurityCamera {
    img: string;
    title: string;
    subtitle: string;
}

const Security = () => {
    return (
        <div className=" bg-blue-red w-full text-center text-white py-16">
            <div className="relative">
                <Image src="/images/GroupHexagonLeft.png" alt="Hexagon" width={426} height={844} className="absolute left-0 top-[585px]" />
                <Image src="/images/GroupHexagonRight.png" alt="Hexagon" width={434} height={722} className="absolute right-0 top-[1036px]" />
                <Image src="/images/HexagonLeft.png" alt="Hexagon" width={64} height={112} className="absolute top-[188px]" />
                <Image src="/images/HexagonRight.png" alt="Hexagon" width={170} height={132} className="absolute right-0 top-[563px]" />
            </div>
            <h2 className="text-[36px] font-bold uppercase mt-[157px]">камеры видеонаблюдения</h2>
            <div className="flex flex-wrap justify-center">
                {SecurityCameras.map((item: SecurityCamera, index: number) => (
                    <div key={index} className="w-[1206px] h-auto m-8 flex flex-col items-center relative">
                        <Image src={item.img} alt={item.title} width={1130} height={920} className="" />
                        <h3 className="text-20 font-bold  mt-12 leading-[37px]">{item.title}</h3>
                        <p className="text-16 font-light leading-6">{item.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Security;
