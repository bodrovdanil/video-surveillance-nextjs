import Image from 'next/image';
import Link from 'next/link';
import Button from './button/button';

const Header = () => {
    return (
        <header className="bg-smoky-white w-full h-[80px] fixed z-20 top-0 flex items-center justify-center px-10 shadow-md font-normal text-[16px]">
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
            <Button variant="outline">ОТПРАВИТЬ ЗАЯВКУ</Button>
        </header>
    );
};

export default Header;
