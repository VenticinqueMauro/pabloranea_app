import Image from "next/image";
import type { Locale } from "@/lib/locales";
import ModalContact from './ModalContact';
import TradButton from "../tradButton/TradButton";

interface Props {
    sections: string[],
    lang: Locale,
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
]


export default function Desktop({ sections, lang, pathname }: Props) {

    return (
        <nav className="relative" aria-label="Main">
            <div className="hidden  navbarTest pt-10 pb-6 px-12 xl:px-20 lg:flex justify-between items-end sticky top-0 left-0 bg-white w-full lg:min-h-[110px] z-40">
                <TradButton lang={lang} pathname={pathname} />
                <a
                    className='w-40 xl:w-[160px] logonav '
                    href={`/${lang}`}
                >
                    <Image
                        src="/logo.png"
                        alt="Pablo Ranea"
                        loading="eager"
                        width={200}
                        height={72}
                    />
                </a>
                <div className={`flex items-center uppercase `}>
                    {sections.map((section, index) => (
                        <a
                            key={section}
                            href={index === 0 ? `/${lang}` : `/${lang}${sectionshref[index]}`}
                            aria-current={pathname === `/${lang}${sectionshref[index]}` || (index === 0 && pathname === `/${lang}`) ? 'page' : undefined}
                            className='z-10 hover:bg-black px-3 xl:px-5 hover:text-white aria-[current=page]:bg-black aria-[current=page]:text-white cursor-pointer text-xs xl:text-sm border-r border-black'
                        >
                            {section}
                        </a>
                    ))}
                    <ModalContact lang={lang} />
                </div>
            </div >
        </nav>
    )
}
