import type { Metadata } from "next";
import "./globals.css"
import Header from './components/Header';

export const metadata: Metadata = {
  title: "Системы видеонаблюдения",
  description: "Проектирование и установка систем видеонаблюдения",
};


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
