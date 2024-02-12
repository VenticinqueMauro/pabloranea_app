'use client';
import { Roboto } from 'next/font/google';
import { useParams, usePathname } from "next/navigation";
import Desktop from './Desktop';
import Mobile from './Mobile';



const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300'] })


export default function Navbar({ dictionary }: any) {

    const { home, popups, calendar, aboutpablo, classes, partners, community, press, contact } = dictionary.menu;

    const sections = [home, popups, calendar, aboutpablo, classes, partners, community, press, contact]

    const pathname = usePathname();
    const { lang } = useParams();

    if (pathname.includes('/dashboard') || pathname.includes('/login')) return null

    return (
        <div className={`${roboto.className} font-semibold`}>
            <Mobile sections={sections}  lang={lang} pathname={pathname} />
            <Desktop sections={sections}  lang={lang} pathname={pathname} />
        </div>
    )
}
