import { Image } from "@nextui-org/react";

export default function Section3({ lang }: { lang: 'en' | 'es' }) {
    return (
        <div >
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between px-3 lg:px-20 py-16 bg-background text-foreground dark">
                <h2 className="uppercase text-xl lg:text-2xl font-bold w-full ">la tierra del sol y el buen vino</h2>
                <h3 className="text-base lg:text-lg text-justify w-full" style={{ lineHeight: 1.2 }}>Su fuerte conexión con Mendoza y el mundo vitivinícola, y su
                    interés por introducir y comunicar los vinos en su propuesta
                    gastronómica, lo llevaron a obtener el título de Sommelier en la
                    Escuela Argentina de Sommelier en el 2013. En 2016, tras su
                    exitoso periodo en Azafrán, decidió profundizar su exploración
                    gastronómica para seguir innovando, destacándose
                    especialmente en la enseñanza y promoción del vino argentino en
                    las principales capitales del mundo.
                </h3>
            </div>
            {/* <SliderPress /> */}
            <div className="flex justify-center bg-black">
                <Image radius="none" className="object-cover w-full h-full" src="/aboutpablo/pablo3.jpg" alt="pablo ranea" width={1365} height={888} />
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-0 px-3 lg:px-20 py-16 bg-background text-foreground dark">
                <h2 className="uppercase text-2xl font-bold w-full col-span-12 lg:col-span-6">TRAVELLING CUISINE</h2>
                <div className="w-full space-y-10">
                    <h3 className="text-base lg:text-lg text-justify" style={{ lineHeight: 1.2 }}>Con una sólida formación y habiendo creado una cocina de autor con su propia impronta, Pablo es una suerte de embajador gastronómico que no sólo lleva su travelling cuisine a diversos destinos; sino que tambiénes convocado por las más prestigiosas escuelas de cocina del mundo - como el CIA “The Culinary America” (Antonio, TX) y el ICE “The Institute of Culinary Education” (Nueva York, NY)- para dictarlas clases sobre vinos argentinos para nuevas camadas de jóvenes estudiantes de los programas de sommelier y cocina.
                    </h3>
                    <button className="uppercase text-base lg:text-lg w-full lg:w-fit lg:ms-auto block px-5 py-4 bg-[#5E6B45] font-bold">
                        <a href={`/${lang}/#classes`}>CONOCÉ MÁS SOBRE LAS CLASES
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}
