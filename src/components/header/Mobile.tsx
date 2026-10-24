'use client';

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { switchLocalePath, type Locale } from "@/lib/locales";
import { sectionshref } from "./Desktop";
import ModalContact from "./ModalContact";


interface Props {
    sections: string[],
    lang: Locale,
    pathname: string
}


export default function Mobile({ sections, lang, pathname }: Props) {

    const [isOpen, setIsOpen] = useState(false);
    const newLang = lang === 'es' ? 'en' : 'es';

    const handleOpen = () => setIsOpen((prevState) => !prevState);

    // Close with Escape while the menu is open.
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen]);

    // Items slide in one after another, like the previous framer-motion stagger.
    const itemClass = `transition-all duration-300 ease-out ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`;

    return (
        <div className={`${pathname === `/${lang}` ? 'sticky bg-white z-50 top-0 left-0' : ''} py-2 px-2 w-full lg:hidden`}>
            <Link
                href={switchLocalePath(pathname, newLang)}
                hrefLang={newLang}
                aria-label={newLang === 'es' ? 'Ver en español' : 'View in English'}
                className='ms-auto block w-fit px-2 py-1 border-black border font-semibold z-50 text-xs'
            >{lang === 'es' ? 'ES' : 'EN'}</Link>
            <div className="flex justify-between items-end">
                <Link href={`/${lang}`}>
                    <Image
                        src="/logo.png"
                        alt="Pablo Ranea"
                        loading="eager"
                        width={200}
                        height={72}
                        className="w-32"
                    />
                </Link>
                <button className="z-50" onClick={handleOpen} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} aria-controls="mobile-menu">
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>
            <nav
                id="mobile-menu"
                aria-label="Main"
                inert={!isOpen}
                className={`${isOpen ? "translate-x-0" : "-translate-x-full"} absolute top-[85px] left-0 block w-full h-screen bg-white transition-all ease-in-out duration-300 z-50`}
            >
                <ul className="flex flex-col gap-4 px-6 pt-5 text-xl font-medium">
                    {sections.map((section, index) => (
                        <li
                            key={section}
                            className={`capitalize ${itemClass}`}
                            style={{ transitionDelay: isOpen ? `${index * 100}ms` : '0ms' }}
                        >
                            <Link
                                href={index === 0 ? `/${lang}` : `/${lang}${sectionshref[index]}`}
                                aria-current={pathname === (index === 0 ? `/${lang}` : `/${lang}${sectionshref[index]}`) ? 'page' : undefined}
                                className="aria-[current=page]:underline underline-offset-4"
                                onClick={() => setIsOpen(false)}
                            >
                                {section}
                            </Link>
                        </li>
                    ))}
                    <li className={itemClass} style={{ transitionDelay: isOpen ? '800ms' : '0ms' }}>
                        <ModalContact lang={lang} />
                    </li>
                </ul>
            </nav>
        </div>
    )
}
