import Footer from "@/components/footer/Footer";
import SliderPress from "@/components/pop-ups/page/sliderPress";
import { Lang } from "@/types/lang.type";
import { Image } from "@nextui-org/react";

export default async function page({ params: { lang } }: Lang) {

    const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(m => m.default)

    return (
        <section className="h-screen space-y-10">
            {/* SECTION 2  */}
            <div className="flex justify-between w-full gap-5 lg:gap-10 px-3 lg:px-20">
                <div className="flex flex-col justify-end w-full gap-5 lg:gap-10">
                    <div className="hidden lg:flex grow"></div>
                    <button className="uppercase text-xl lg:text-2xl w-full py-5 lg:py-8 bg-[#5E6B45] font-bold text-white">convertite en anfitrión</button>
                    <Image radius="none" className="object-cover " src="/aboutpablo/pablo1.jpg" alt="pablo ranea" width={1020} height={680} />
                </div>
                <div className="hidden lg:block">
                    <Image radius="none" className="object-cover " src="/aboutpablo/pablo2.jpg" alt="pablo ranea" width={1350} height={1013} />
                </div>
            </div>
            {/* SECTION 3 */}
            <div >
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between px-3 lg:px-20 py-16 bg-background text-foreground dark">
                    <h2 className="uppercase text-xl lg:text-2xl font-bold w-full ">la tierra del sol y el buen vino</h2>
                    <h3 className="text-lg lg:text-2xl text-justify w-full" style={{ lineHeight: 1.2 }}>Su fuerte conexión con Mendoza y el mundo vitivinícola, y su
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
                    <h2 className="uppercase text-2xl font-bold w-full col-span-12 lg:col-span-6">TRAVELLINGCUISINE</h2>
                    <div className="w-full space-y-10">
                        <h3 className="text-lg lg:text-2xl text-justify" style={{ lineHeight: 1.2 }}>Con una sólida formación y habiendo creado una cocina de autor con su propia impronta, Pablo es una suerte de embajador gastronómico que no sólo lleva su travelling cuisine a diversos destinos; sino que tambiénes convocado por las más prestigiosas escuelas de cocina del mundo - como el CIA “The Culinary America” (Antonio, TX) y el ICE “The Institute of Culinary Education” (Nueva York, NY)- para dictarlas clases sobre vinos argentinos para nuevas camadas de jóvenes estudiantes de los programas de sommelier y cocina.
                        </h3>
                        <button className="uppercase text-xl lg:text-3xl w-full py-5 lg:py-8 bg-[#5E6B45] font-bold">CONOCÉ MÁS SOBRE LAS CLASES</button>
                    </div>
                </div>
            </div>
            {/* SECTION 4 */}
            <div className="bg-background text-foreground light px-3 lg:px-20">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
                    <Image radius="none" className="object-cover " src="/partners/partners.jpg" alt="test2" />
                    <Image radius="none" className="object-cover " src="/partners/partners.jpg" alt="test2" />
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between py-20 gap-10">
                    <h2 className="uppercase text-2xl font-bold w-full col-span-12 lg:col-span-6">EMBAJADOR DEL VINO ARGENTINO</h2>
                    <div className="w-full space-y-10">
                        <h3 className="text-lg lg:text-2xl text-justify" style={{ lineHeight: 1.2 }}>
                            Reconocidas bodegas de Mendoza como <b>El Enemigo, Catena
                                Zapata, Susana Balbo, Trivento, Rutini, Nieto Senetiner,
                                AchavalFerrer, AWI Wines</b> así como también <b>Colomé</b> de Salta,
                            <b>Otronia</b> de la Patagonia Argentina confían en <b>Ranea</b> como
                            comunicador y embajador para presentar sus más exclusivas
                            etiquetas en sus cenas nómades en el extranjero y de esta
                            manera,llegar a nuevos consumidores.
                        </h3>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-10">
                    <Image radius="none" className="object-cover " src="/partners/partners.jpg" alt="test2" />
                    <Image radius="none" className="object-cover " src="/partners/partners.jpg" alt="test2" />
                </div>
                <div className="flex flex-col lg:flex-row py-10 lg:py-20 lg:justify-between gap-5 lg:gap-36">
                    <div className="uppercase font-extrabold text-xl lg:text-2xl flex-shrink-0" style={{ lineHeight: 1.2 }}>
                        <p>new york</p>
                        <p>san francisco</p>
                        <p>houston</p>
                        <p>denver</p>
                        <p>lima</p>
                        <p>canadá</p>
                        <p>hong kong</p>
                    </div>
                    <h2 className="text-lg lg:text-2xl flex-shrink text-justify">
                        A lo largo de estos años, Pablo Ranea ha sabido construir un nombre propio en la gastronomía no
                        sólo en Argentina sino también en el exterior. New York, San Francisco, Houston, y Denver enUSA;
                        como tambien Perú, Canadá, y Hong Kong son algunas de las regiones donde plantó bandera
                        creando una comunidad foodie fiel de comensales aventureros que siempre están atentos a todas
                        las novedades sobre vinos argentinos y deleitar sus sentidos con sus fabulosos platos.
                    </h2>
                </div>
            </div>
            <Footer dictionary={dictionary} lang={lang} />
        </section>
    )
}
