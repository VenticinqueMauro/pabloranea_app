'use client';
import { motion } from 'framer-motion';
import { Roboto } from 'next/font/google';
import { useParams, usePathname } from "next/navigation";



const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300'] })


export default function Navbar({ dictionary }: any) {

    const { home, popups, calendar, aboutpablo, classes, partners, community, press, contact } = dictionary.menu;

    const sections = [home, popups, calendar, aboutpablo, classes, partners, community, press, contact]

    const pathname = usePathname();
    const { lang } = useParams();

    if (pathname.includes('/dashboard') || pathname.includes('/login')) return null

    return (
        <div className="hidden pt-16 pb-6 px-20 lg:flex justify-between items-center">
            <motion.img
                src="/logo.png"
                alt="logo"
                width={200}
                className="font-bold text-3xl uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.3 } }}
            />
            <div className={`$${roboto.className} flex uppercase`}>
                {sections.map((section, index) => (
                    <motion.p
                        key={section}
                        className={`${pathname === `/${lang}` && section === `home` || section === 'inicio' ? 'bg-black text-white' : ''} z-10 hover:bg-black hover:text-white cursor-pointer px-1`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.5, delay: index * 0.3 } }}
                    >
                        {section}
                    </motion.p>
                ))}
            </div>
        </div>
    )
}
