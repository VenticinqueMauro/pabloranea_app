import SliderPress from "@/components/pop-ups/page/sliderPress";
import { Image } from "@nextui-org/react";

export default function page() {
    return (
        <section className="h-screen">
            {/* SECTION 2 */}
            <div className="grid grid-cols-12 grid-rows-3 gap-4 lg:gap-10 max-w-7xl mx-auto py-16">
                <div className="col-start-3 row-start-1 lg:row-start-1 lg:col-start-7 col-span-8 lg:col-span-6 min-h-full row-span-2 lg:row-span-3 flex justify-center items-center">
                    <video className="w-full h-full mt-1 mb-1 lg:mb-0 p-0" src="/popups/reel.mp4" controls autoPlay >
                        Tu navegador no admite el elemento de video.
                    </video>
                </div>
                <div className="col-span-12 lg:col-start-1 row-start-3 lg:col-span-6 lg:row-span-1 lg:row-start-3 flex justify-center items-center px-3 lg:px-0">
                    <Image radius="none" className="object-cover w-full h-full" src="/partners/partners.jpg" alt="test2" />
                </div>
            </div>
            {/* SECTION 3  */}
            <div className="bg-background text-foreground dark">
                <div className="px-3 lg:px-20 py-16 grid grid-cols-12 gap-5 lg:gap-10">
                    <h2 className="uppercase text-2xl font-bold w-full col-span-12 lg:col-span-6">conectar con argentina</h2>
                    <div className="w-fit lg:w-full space-y-10 col-span-12 lg:col-span-6">
                        <p className="text-lg lg:text-2xl text-justify" style={{lineHeight: 1.2}}>
                            En cada uno de estos encuentros, creamos un menú de pasos bajo la premisa de “traveling cuisine” - una cocina de viajes -, una propuesta donde prima la nueva cocina argentina y latinoamericana con influencias de peruana y asiática; donde la columna vertebral de la experiencia es un viaje a través de una selección de las mejores etiquetas de vinos de Argentina.
                            <br /><br />
                            Con nuestros “pop up dinners” buscamos que nuestros comensales conecten con Argentina y su historia a través de nuestra pasión por los vinos y los sabores de nuestra propuesta gastronómica.
                        </p>
                        <button className="uppercase text-xl lg:text-3xl w-full py-5 lg:py-8 bg-[#5E6B45] font-bold">convertite en anfitrión</button>
                    </div>
                    <SliderPress />
                </div>
            </div>
            {/* SECTION 4 */}
            <div className="bg-background text-foreground light px-20 py-16 grid grid-cols-12 grid-rows-3 gap-10">
                <div className="col-span-6 row-span-2">
                    <div className="flex items-center gap-10">
                        <h2 className="text-9xl font-extrabold">5</h2>
                        <h3 className="text-3xl uppercase font-extrabold">eventos destacados</h3>
                    </div>
                </div>
                <div className="row-span-1 col-span-6">
                    <div className="text-3xl font-bold pt-10">
                        PopUpDinnerparaelFestivalArgentinoenelAmericanClub
                        HONGKONG ,AÑO
                        <br /><br />
                        WineDinnerenLaJournéeMondialeduMalbec
                        CAHORSFRANCIA,AÑO
                        <br /><br />
                        PopUpDinnerenelInternationalCulinaryCenter
                        SOHOENNEWYORK,AÑO
                        <br /><br />
                        GalaDinnerconRutiniWinesenelParkHyatt
                        SHANGHAI,AÑO
                        <br /><br />
                        WinedinnerenelCaesarPalace
                        LASVEGASNEVADA,AÑO
                    </div>
                </div>
                <div className="col-span-6 row-span-1 row-start-3 flex justify-center items-center">
                    <Image radius="none" className="object-cover w-full h-full" src="/partners/partners.jpg" alt="test2" />
                </div>
                <div className="col-span-6 min-h-full row-span-2 row-start-2 items-center bg-gray-500 block"></div>
            </div>
            {/* SECTION 5 */}
            <div className="bg-background text-foreground dark px-20 pt-16 pb-20 min-h-screen">
                <div className="flex items-center gap-10">
                    <div className="relative w-full flex flex-col justify-between items-start h-screen">
                        <div className="relative">
                            <h2 className="text-[250px] font-medium">40</h2>
                            <h3 className="uppercase absolute bottom-8 text-xl left-10">ciudades recorridas</h3>
                        </div>
                        <div className="grid grid-cols-2 max-w-md">
                            <div className="col-span-2 flex items-center gap-5 min-w-full">
                                <p className="text-7xl text-white w-[50%] text-end">4</p>
                                <p className="uppercase w-[50%] text-start">paises</p>
                            </div>
                            <div className="col-span-2 flex items-center gap-5 min-w-full">
                                <p className="text-7xl text-white w-full text-end">1500</p>
                                <p className="uppercase w-full text-start">comensales</p>
                            </div>
                            <div className="col-span-2 flex items-center gap-5 min-w-full">
                                <p className="text-7xl text-white w-full text-end">50</p>
                                <p className="uppercase w-full text-start">litros de chimichurri</p>
                            </div>
                            <div className="col-span-2 flex items-center gap-5 min-w-full">
                                <p className="text-7xl text-white w-full text-end">180</p>
                                <p className="uppercase w-full text-start">kilos de dulce de leche</p>
                            </div>
                            <div className="col-span-2 flex items-center gap-5 min-w-full">
                                <p className="text-7xl text-white w-full text-end">1400</p>
                                <p className="uppercase w-full text-start">botellas de vino</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-between min-h-full gap-40">
                        <div className="bg-gray-400 h-[700px] w-full block"></div>
                        <div className="flex items-center gap-5 justify-start w-fit">
                            <p className="text-7xl text-white">60</p>
                            <p className="uppercase max-w-sm">60 pop up dinners al año con 16 a 25 comensales promedio por encuentro.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
