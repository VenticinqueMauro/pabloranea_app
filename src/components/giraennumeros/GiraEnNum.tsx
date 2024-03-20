import { Image } from "@nextui-org/react";

export default function GiraEnNum({ lang }: any) {

    return (
        <div className="mx-auto w-full flex justify-center items-center bg-black">
            <Image radius="none" src={`${lang === 'es' ? '/gira/giraEnNumeros.png' : '/gira/giraEnNumerosEn.png'}`} alt="gira en numeros" className="mx-auto block" width={1840} height={650} />
        </div>
    )
}
