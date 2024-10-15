import Image from 'next/image';
import Link from 'next/link';
import Button from './Button/Button';

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
            <nav className="flex space-x-[38px] text-dim-gray uppercase">
                <Link href="/services">наши услуги</Link>
                <Link href="/articles">статьи</Link>
                <Link href="/info">информация</Link>
                <Link href="/about">о нас</Link>
                <Link href="/contacts">контакты</Link>
            </nav>
            <Button variant="outline" >отправить заявку</Button>
        </header>
    );
};

export default Header;
