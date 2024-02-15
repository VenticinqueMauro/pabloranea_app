'use client';

import { AlignJustify, Menu, X } from "lucide-react"
import { NextFont } from "next/dist/compiled/@next/font"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


interface Props {
    sections: string[],
    lang: string | string[],
    pathname: string
}

const sectionshref = [
    'home',
    'popups',
    'calendar',
    'about',
    'classes',
    'partners',
    'community',
    'press',
    'contact'
]

export default function Mobile({ sections, lang, pathname }: Props) {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen((prevState) => !prevState);

    return (
        <div className={`py-2 px-2 w-full lg:hidden`}>
            <Link
                href={`/${lang === 'es' ? 'en' : 'es'}`}
                className='ms-auto block w-fit px-2 text-sm py-1  border-black border font-semibold'
            >{lang === 'es' ? 'ES' : 'EN'}</Link>
            <div className="flex justify-between items-end">
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={2126}
                    height={768}
                    className="w-40"
                />
                <button className="z-50" onClick={handleOpen}>
                    <Menu className={`${isOpen && "hidden"}`} size={30} />
                    <X className={`${!isOpen && "hidden"}`} size={30} />
                </button>
            </div>
            <div className={`${isOpen ? "translate-x-0" : "-translate-x-full"
                } absolute top-24 left-0 block w-full h-screen bg-white transition-all ease-in-out duration-300 z-50`}>
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
                                        href={'#'}
                                    >
                                        {section}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
