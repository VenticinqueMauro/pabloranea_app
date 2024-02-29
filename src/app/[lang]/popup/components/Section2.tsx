import { Image } from "@nextui-org/react";

export default function Section2() {
    return (
        <div className="px-3 lg:px-20 pt-5 pb-16 lg:py-16 flex flex-col gap-5 md:flex-row justify-between">
            <div className="flex flex-col items-center justify-between w-full gap-5 md:gap-0">
                <h2 className="text-base lg:text-lg text-justify" style={{ lineHeight: 1.2 }}>
                    Desde 2010, cuando abrimos por primera vez las puertas de nuestro hogar en la ciudad de Mendoza para convertirlo en un restaurante escondido para comensales selectos, supimos lo que queríamos: llevar la nueva cocina argentina por todo el mundo.<br /> <br />
                    Hoy en día, nuestro concepto de “pop up dinners” son mucho más que una cena puertas adentro para amigos, sino que son experiencias itinerantes que combinan dos variables: tiempo y espacio. Un atardecer junto a la bahía de San Francisco, un rooftop en New York, una huerta de flores en las afueras de Asheville, una plaza en la ciudad de Mendoza, un sofisticado hotel en Shanghai o una elegante galería de arte de una ciudad cosmopolita son algunos de los deslumbrantes escenarios que elegimos para recibir a nuestros clientes.
                </h2>
                <Image radius="none" className="object-cover min-w-full h-full" src="/popups/img1.jpg" alt="popups dinners" width={720} height={405} />
            </div>
            <div className="w-full">
                <video className="w-full h-auto lg:max-h-[1000px] mt-1 mb-1 lg:mb-0 p-0" src="/popups/reelpopup.mov" controls autoPlay loop>
                    Tu navegador no admite el elemento de video.
                </video>
            </div>
        </div>
    )
}
