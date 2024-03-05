'use client';

import Link from "next/link";

type Props = {
    lang: any
}

export default function TradButton({ lang }: Props) {
    const handleChangeLang = () => {
        const newLang = lang === 'es' ? 'en' : 'es';
        const currentPath = window.location.pathname;
        const newPath = currentPath.includes(`/${lang}/`) ? currentPath.replace(`/${lang}/`, `/${newLang}/`) : `/${newLang}`;
        window.location.href = newPath;
    };

    return (
        <Link
            href={`/${lang === 'es' ? 'en' : 'es'}`}
            className='hidden lg:block absolute top-5 right-24 px-2 text-xs py-1 border-black border light z-50'
            onClick={handleChangeLang}
        >{lang === 'es' ? 'ES' : 'EN'}</Link>
    )
}
