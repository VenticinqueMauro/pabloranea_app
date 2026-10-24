'use client';
import { Roboto } from 'next/font/google';
import { usePathname } from "next/navigation";
import type { Dictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/locales';
import Desktop from './Desktop';
import Mobile from './Mobile';



const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300'] })


export default function Navbar({ dictionary, lang }: { dictionary: Dictionary, lang: Locale }) {

    const { home, popups, calendar, aboutpablo, classes, partners, community, press } = dictionary.menu;

    const sections = [home, popups, calendar, aboutpablo, classes, partners, community, press]

    const pathname = usePathname();

    return (
        <div className={`${roboto.className} font-semibold`}>
            <Mobile sections={sections} lang={lang} pathname={pathname} />
            <Desktop sections={sections} lang={lang} pathname={pathname} />
        </div>
    )
}
