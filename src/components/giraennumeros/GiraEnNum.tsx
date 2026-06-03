import Image from "next/image";

export default function GiraEnNum({ lang }: any) {

    return (
        <div className="mx-auto w-full flex justify-center items-center bg-black">
            <Image
                src={`${lang === 'es' ? '/gira/giraEnNumeros.png' : '/gira/giraEnNumerosEn.png'}`}
                alt="gira en numeros"
                className="mx-auto block w-full h-auto max-w-[1840px]"
                width={1840}
                height={650}
                sizes="100vw"
            />
        </div>
    )
}
