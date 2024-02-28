import { Image } from "@nextui-org/react";

export default function Section2() {
    return (
        <div className="grid grid-cols-12 grid-rows-3 gap-4 lg:gap-10 px-3 lg:px-20 pt-5 pb-16 lg:py-16">
            <div className="col-start-1 col-span-12 lg:col-span-6">
                <h2 className="text-base lg:text-lg text-justify" style={{ lineHeight: 1.2 }}>
                    Desde 2010, cuando abrimos por primera vez las puertas de nuestro hogar en la ciudad de Mendoza para convertirlo en un restaurante escondido para comensales selectos, supimos lo que queríamos: llevar la nueva cocina argentina por todo el mundo.<br/> <br/>
                    Hoy en día, nuestro concepto de “pop up dinners” son mucho más que una cena puertas adentro para amigos, sino que son experiencias itinerantes que combinan dos variables: tiempo y espacio. Un atardecer junto a la bahía de San Francisco, un rooftop en New York, una huerta de flores en las afueras de Asheville, una plaza en la ciudad de Mendoza, un sofisticado hotel en Shanghai o una elegante galería de arte de una ciudad cosmopolita son algunos de los deslumbrantes escenarios que elegimos para recibir a nuestros clientes.
                </h2>
            </div>
            <div className="col-start-3 row-start-2 lg:row-start-1 lg:col-start-7 col-span-8 lg:col-span-6 min-h-full row-span-2 lg:row-span-3 flex justify-center items-center">
                <video className="w-full h-full mt-1 mb-1 lg:mb-0 p-0" src="/popups/reel.mp4" controls autoPlay >
                    Tu navegador no admite el elemento de video.
                </video>
            </div>
            <div className="hidden col-span-12 lg:col-start-1 lg:col-span-6 lg:row-span-1 lg:row-start-3 lg:flex justify-center items-center px-3 lg:px-0">
                <Image radius="none" className="object-cover w-full h-full" src="/popups/img1.jpg" alt="popups dinners" width={720} height={405} />
            </div>
        </div>
    )
}
