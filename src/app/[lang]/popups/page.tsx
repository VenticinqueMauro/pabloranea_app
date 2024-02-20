import SliderPress from "@/components/pop-ups/page/sliderPress";
import { Image } from "@nextui-org/react";

export default function page() {
    return (
        <section className="h-screen">
            {/* SECTION 2 */}
            <div className="grid grid-cols-12 grid-rows-3 gap-4 lg:gap-10 max-w-7xl mx-auto py-16">
                <div className="col-span-6 min-h-full row-span-3 flex justify-center items-center">
                    <video className="w-full h-full mt-1 mb-1 lg:mb-0 p-0" src="/popups/reel.mp4" controls autoPlay >
                        Tu navegador no admite el elemento de video.
                    </video>
                </div>
                <div className="col-span-6 row-span-1 row-start-3 flex justify-center items-center">
                    <Image radius="none" className="object-cover w-full h-full" src="/partners/partners.jpg" alt="test2" />
                </div>
            </div>
            {/* SECTION 3  */}
            <div className="bg-background text-foreground dark">
                <div className="px-20 py-16 grid grid-cols-12 gap-10">
                    <h2 className="uppercase text-2xl font-bold w-full col-span-6">conectar con argentina</h2>
                    <div className="w-full space-y-10 col-span-6">
                        <p className="text-2xl text-justify">
                            En cada uno de estos encuentros, creamos un menú de pasos bajo la premisa de “traveling cuisine” - una cocina de viajes -, una propuesta donde prima la nueva cocina argentina y latinoamericana con influencias de peruana y asiática; donde la columna vertebral de la experiencia es un viaje a través de una selección de las mejores etiquetas de vinos de Argentina.
                            <br /><br />
                            Con nuestros “pop up dinners” buscamos que nuestros comensales conecten con Argentina y su historia a través de nuestra pasión por los vinos y los sabores de nuestra propuesta gastronómica.
                        </p>
                        <button className="uppercase text-3xl w-full py-8 bg-[#5E6B45] font-bold">convertite en anfitrión</button>
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
            <div className="bg-background text-foreground dark px-20 py-16">
                <div className="flex items-center">
                    <div className="relative w-full">
                        <h2 className="text-[250px] font-medium">40</h2>
                        <h3 className="uppercase absolute bottom-8 text-xl left-10">ciudades recorridas</h3>
                    </div>
                    <div className="bg-gray-400 h-[700px] w-full block"></div>
                </div>
            </div>
        </section>
    )
}
