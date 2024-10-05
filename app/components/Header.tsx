import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-smoky-white w-full h-[80px] fixed top-0 flex items-center justify-center px-10 shadow-md font-normal text-[16px]">
                <Image 
                    src="/images/logo.png" 
                    alt="Logo" 
                    width={163} 
                    height={48} 
                    className="mr-[65px]" 
                />
                <nav className="flex space-x-[38px] text-dim-gray">
                    <Link href="/services">НАШИ УСЛУГИ</Link>
                    <Link href="/articles">СТАТЬИ</Link>
                    <Link href="/info">ИНФОРМАЦИЯ</Link>
                    <Link href="/about">О НАС</Link>
                    <Link href="/contacts">КОНТАКТЫ</Link>
                </nav>
            <button className="w-custom-button-width h-custom-button-height rounded-[60px] ml-[66px] px-4 py-2
            bg-smoky-white text-blackbirds-egg border">ОТПРАВИТЬ ЗАЯВКУ</button>
        </header>
    );
};

export default Header;
