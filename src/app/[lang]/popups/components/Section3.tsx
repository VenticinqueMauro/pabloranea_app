import SliderPress from "@/components/pop-ups/page/sliderPress";

export default function Section3() {
    return (
        <div className="bg-background text-foreground dark">
            <div className="px-3 lg:px-20 py-16 grid grid-cols-12 gap-5 lg:gap-10">
                <h2 className="uppercase text-2xl font-bold w-full col-span-12 lg:col-span-6">conectar con argentina</h2>
                <div className="w-fit lg:w-full space-y-10 col-span-12 lg:col-span-6">
                    <p className="text-lg lg:text-2xl text-justify" style={{ lineHeight: 1.2 }}>
                        En cada uno de estos encuentros, creamos un menú de pasos bajo la premisa de “traveling cuisine” - una cocina de viajes -, una propuesta donde prima la nueva cocina argentina y latinoamericana con influencias de peruana y asiática; donde la columna vertebral de la experiencia es un viaje a través de una selección de las mejores etiquetas de vinos de Argentina.
                        <br /><br />
                        Con nuestros “pop up dinners” buscamos que nuestros comensales conecten con Argentina y su historia a través de nuestra pasión por los vinos y los sabores de nuestra propuesta gastronómica.
                    </p>
                    <button className="uppercase text-xl lg:text-3xl w-full py-5 lg:py-8 bg-[#5E6B45] font-bold">convertite en anfitrión</button>
                </div>
                <SliderPress />
            </div>
        </div>
    )
}
