import type { Metadata } from "next";
import "./globals.css"
import Header from './components/Header';
import {Inter} from 'next/font/google';

const inter = Inter({
  weight: ['300','400', '700','800'],
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Системы видеонаблюдения",
  description: "Проектирование и установка систем видеонаблюдения",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className={inter.className}>
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
