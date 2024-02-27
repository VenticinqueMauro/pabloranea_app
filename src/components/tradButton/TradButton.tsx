import Link from "next/link";

type Props = {

    lang: 'es' | 'en'
}

export default async function TradButton({ lang }: Props) {

    return (
        <Link
            href={`/${lang === 'es' ? 'en' : 'es'}`}
            className='hidden lg:block absolute -top-32 right-20 px-2 text-sm py-1 border-black border light z-50'
        >{lang === 'es' ? 'ES' : 'EN'}</Link>
    )
}
