'use client';

import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import ModalContact from './ModalContact';
import { useEffect, useState } from "react";
import TradButton from "../tradButton/TradButton";

interface Props {
    sections: string[],
    lang: string | string[],
    pathname: string
}

export const sectionshref = [
    'home',
    '/popup',
    '#calendar',
    '/about',
    '#classes',
    '/partners',
    '#community',
    '/press',
    'https://docs.google.com/forms/d/e/1FAIpQLSfPg5abINAQ4OkZLFPLVRm3dSJSIEjpjBsUheJS5eOs_O-pWg/viewform'
]


export default function Desktop({ sections, lang, pathname }: Props) {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Limpiamos el listener del evento al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <nav className="relative">
            <div className="hidden  navbarTest pt-10 pb-6 px-12 xl:px-20 lg:flex justify-between items-end sticky top-0 left-0 bg-white w-full lg:min-h-[110px] z-40">
                <TradButton lang={lang} />
                <a
                    className='w-40 xl:w-[160px] logonav '
                    href='/'
                >
                    <Image
                        as={NextImage}
                        radius="none"
                        src="/logo.png"
                        alt="logo"
                        priority
                        width={200}
                        height={72}
                    />
                </a>
                <div className={`flex items-center uppercase `}>
                    {sections.filter(section => section !== 'contact' && section !== 'contacto').map((section, index) => (
                        <a
                            key={section}
                            href={section === 'home' || section === 'inicio' ? `/${lang}` : `/${lang}${sectionshref[index]}`}
                            className='z-10 hover:bg-black px-3 xl:px-5 hover:text-white cursor-pointer text-xs xl:text-sm border-r border-black'
                        >
                            {section}
                        </a>
                    ))}
                    <ModalContact pathname={pathname} lang={lang} />
                </div>
            </div >
        </nav>
    )
}
