import Link from "next/link";

type Props = {

    lang: 'es' | 'en'
}

export default async function TradButton({ lang }: Props) {

    return (
        <Link
            href={`/${lang === 'es' ? 'en' : 'es'}`}
            className='absolute -top-32 right-20 px-2 text-sm py-1 z-50 border-black border'
        >{lang === 'es' ? 'ES' : 'EN'}</Link>
    )
}
