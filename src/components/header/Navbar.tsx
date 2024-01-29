'use client';
import { usePathname } from "next/navigation";
import { Roboto } from 'next/font/google'
import { Image } from "@nextui-org/react";


const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300'] })


const sections = ['pop-ups', 'calendar', 'partners', 'about pablo', 'clasess', 'press', 'community', 'contact']

export default function Navbar() {

    const pathname = usePathname();

    return (
        <div className="pt-16 pb-6 px-20 flex justify-between items-center">
            <Image src='/logo.png' alt="logo" width={200} className="font-bold text-3xl uppercase" />
            <div className={`$${roboto.className} flex gap-1 uppercase`}>
                {
                    sections.map(section => (
                        <p key={section} className={`${pathname === '/' && section === 'pop-ups' ? 'bg-black text-white' : ''} hover:bg-black hover:text-white cursor-pointer px-1`}>{section}</p>
                    ))
                }
            </div>
        </div>
    )
}
