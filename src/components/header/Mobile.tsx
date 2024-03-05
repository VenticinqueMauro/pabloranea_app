'use client';

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import Link from "next/link";
import { useState } from "react";
import { sectionshref } from "./Desktop";
import ModalContact from "./ModalContact";


interface Props {
    sections: string[],
    lang: string | string[],
    pathname: string
}


export default function Mobile({ sections, lang, pathname }: Props) {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen((prevState) => !prevState);

    const handleChangeLang = () => {
        const newLang = lang === 'es' ? 'en' : 'es';
        const currentPath = window.location.pathname;
        const newPath = currentPath.includes(`/${lang}/`) ? currentPath.replace(`/${lang}/`, `/${newLang}/`) : `/${newLang}`;
        window.location.href = newPath;
    };


    return (
        <div className={`${pathname === `/${lang}` ? 'fixed bg-white z-50 top-0 left-0' : ''} py-2 px-2 w-full lg:hidden`}>
            <Link
                href={`/${lang === 'es' ? 'en' : 'es'}`}
                className='ms-auto block w-fit px-2 py-1 border-black border font-semibold z-50 text-xs'
                onClick={handleChangeLang}
            >{lang === 'es' ? 'ES' : 'EN'}</Link>
            <div className="flex justify-between items-end">
                <Image
                    as={NextImage}
                    src="/logo.png"
                    radius="none"
                    alt="logo"
                    priority
                    width={200}
                    height={72}
                    className="w-32"
                />
                <button className="z-50" onClick={handleOpen}>
                    <Menu className={`${isOpen && "hidden"}`} size={30} />
                    <X className={`${!isOpen && "hidden"}`} size={30} />
                </button>
            </div>
            <div className={`${isOpen ? "translate-x-0" : "-translate-x-full"
                } absolute top-[85px] left-0 block w-full h-screen bg-white transition-all ease-in-out duration-300 z-50`}>
                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            key="menu"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="flex flex-col gap-4 px-6 pt-5 text-xl font-medium"
                        >
                            {sections.map((section, index) => (
                                <motion.li
                                    key={section}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="capitalize"
                                >
                                    <Link
                                        href={`${section === 'home' || section === 'inicio' ? `/${lang}` : `/${lang}${sectionshref[index]}`}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {section}
                                    </Link>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ delay: 1 * 0.8 }}
                            >
                                <ModalContact pathname={pathname} lang={lang} />
                            </motion.li>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
