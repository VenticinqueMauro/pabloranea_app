import SliderPress from "@/components/pop-ups/page/sliderPress";
import { Image } from "@nextui-org/react";

export default function page() {
    return (
        <section className="h-screen space-y-10">
            {/* SECTION 2  */}
            <div className="flex justify-between w-full gap-10 px-20">
                <div className="flex flex-col justify-end w-full gap-10">
                    <div className="flex grow"></div>
                    <button className="uppercase text-xl lg:text-2xl w-full py-5 lg:py-8 bg-[#5E6B45] font-bold text-white">convertite en anfitrión</button>
                    <Image radius="none" className="object-cover " src="/partners/partners.jpg" alt="test2" />
                </div>
                <div className="h-[800px] block bg-gray w-full bg-gray-400"></div>
            </div>
            {/* SECTION 3 */}
            <div >
                <div className="flex justify-between px-3 lg:px-20 py-16 bg-background text-foreground dark">
                    <h2 className="uppercase text-2xl font-bold w-full col-span-12 lg:col-span-6">la tierra del sol y el buen vino</h2>
                    <h3 className="text-lg lg:text-2xl text-justify w-full" style={{ lineHeight: 1.2 }}>Su fuerte conexión con Mendoza y el mundo vitivinícola, y su
                        interés por introducir y comunicar los vinos en su propuesta
                        gastronómica, lo llevaron a obtener el título de Sommelier en la
                        Escuela Argentina de Sommelier en el 2013. En 2016, tras su
                        exitoso periodo en Azafrán, decidió profundizar su exploración
                        gastronómica para seguir innovando, destacándose
                        especialmenteenlaenseñanzaypromocióndelvinoargentinoen
                        lasprincipalescapitalesdelmundo.
                    </h3>
                </div>
                <SliderPress />
                <div className="flex justify-between px-3 lg:px-20 py-16 bg-background text-foreground dark">
                    <h2 className="uppercase text-2xl font-bold w-full col-span-12 lg:col-span-6">TRAVELLINGCUISINE</h2>
                    <div className="w-full space-y-10">
                        <h3 className="text-lg lg:text-2xl text-justify" style={{ lineHeight: 1.2 }}>Con una sólida formación y habiendo creado una cocinade autor
                            con su propia impronta, Pablo es una suerte de embajador
                            gastronómico que no sólo lleva su travelling cuisine a diversos
                            destinos; sinoque tambiénes convocadoporlas másprestigiosas
                            escuelas de cocina del mundo - como el CIA “The Culinary
                            Institute of America” (San Antonio, TX) y el ICE “The Institute of
                            Culinary Education” (Nueva York, NY)- para dictarlas clases sobre
                            vinos argentinospara lasnuevas camadasde jóvenes estudiantes
                            delosprogramadesommelierycocina.
                        </h3>
                        <button className="uppercase text-xl lg:text-3xl w-full py-5 lg:py-8 bg-[#5E6B45] font-bold">CONOCÉ MÁS SOBRE LAS CLASES</button>
                    </div>
                </div>
            </div>
            {/* SECTION 4 */}
            <div className="bg-background text-foreground light px-3 lg:px-20">
                <div className="flex justify-between gap-10">
                    <Image radius="none" className="object-cover " src="/partners/partners.jpg" alt="test2" />
                    <Image radius="none" className="object-cover " src="/partners/partners.jpg" alt="test2" />
                </div>
                <div className="flex justify-between py-20 gap-10">
                    <h2 className="uppercase text-2xl font-bold w-full col-span-12 lg:col-span-6">EMBAJADORDELVINOARGENTINO</h2>
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
                <div className="flex justify-between gap-10">
                    <Image radius="none" className="object-cover " src="/partners/partners.jpg" alt="test2" />
                    <Image radius="none" className="object-cover " src="/partners/partners.jpg" alt="test2" />
                </div>
                <div className="flex py-20 justify-between gap-36">
                    <div className="uppercase font-extrabold text-2xl flex-shrink-0" style={{ lineHeight: 1.2 }}>
                        <p>new york</p>
                        <p>san francisco</p>
                        <p>houston</p>
                        <p>denver</p>
                        <p>lima</p>
                        <p>canadá</p>
                        <p>hong kong</p>
                    </div>
                    <h2 className="text-2xl flex-shrink text-justify">
                        A lo largo de estos años, Pablo Ranea ha sabido construir un nombre propio en la gastronomía no
                        sólo en Argentina sino también en el exterior. New York, San Francisco, Houston, y Denver enUSA;
                        como tambien Perú, Canadá, y Hong Kong son algunas de las regiones donde plantó bandera
                        creando una comunidad foodie fiel de comensales aventureros que siempre están atentos a todas
                        lasnovedadessobrevinosargentinosydeleitarsussentidosconsusfabulososplatos.
                    </h2>
                </div>
            </div>
        </section>
    )
}
