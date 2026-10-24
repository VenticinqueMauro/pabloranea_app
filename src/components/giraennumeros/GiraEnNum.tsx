import Image from "next/image";

export default function GiraEnNum({ lang }: { lang: string }) {

    return (
        <div className="mx-auto w-full flex justify-center items-center bg-black">
            <Image
                src={`${lang === 'es' ? '/gira/giraEnNumeros.png' : '/gira/giraEnNumerosEn.png'}`}
                alt={lang === 'es' ? 'La gira en números' : 'The tour in numbers'}
                className="mx-auto block w-full h-auto max-w-[1840px]"
                width={1840}
                height={650}
                sizes="100vw"
            />
        </div>
    )
}
