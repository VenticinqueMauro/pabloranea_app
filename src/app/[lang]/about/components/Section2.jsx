import { Image } from '@nextui-org/react'

export default function Section2() {
    return (
        <div className="px-3 lg:px-20 pt-5 pb-16 lg:py-16 flex flex-col gap-5 md:flex-row justify-between" >
            <div className="flex flex-col items-center justify-between w-full gap-5 md:gap-0">
                <div className="flex flex-col gap-10 items-start flex-1">
                    <h2 className="text-base lg:text-lg text-justify" style={{ lineHeight: 1.2 }}>Formado en la prestigiosa escuela de cocina del Gato Dumas en Buenos Aires, Pablo Ranea emerge como un chef y sommelier argentino que ha dedicado varios años de su vida a llevar lo mejor de la cocina argentina y latinoamericana por todo el mundo.<br /> <br />
                        Tras varios años de trabajar y perfeccionarse con reconocidos chefs en la cadena de hoteles Marriott de Estados Unidos y el Caribe y otros restaurantes en España, Perú y Buenos Aires, al regresar a Mendoza estuvo durante 10 años al frente de la cocina del restaurante Azafrán y logró posicionarlo como uno de los más reconocidos restaurantes de la región gracias a su distintivo enfoque en la Nueva Cocina Argentina. </h2>
                    <a href="/aboutpablo/cv.pdf" target="_blank" rel="noopener noreferrer" className="uppercase text-base text-center lg:text-lg w-fit mx-auto block px-5 py-4 bg-[#5E6B45]  font-bold text-white">
                        Descargar CV
                    </a>
                </div>
                <Image radius="none" className="object-cover aspect-video" src="/popups/3.jpg" alt="pablo ranea" width={1600} height={840} />
            </div>
            <div className="w-full">
                <video className="w-full h-auto lg:max-h-[1000px] mt-1 mb-1 lg:mb-0 p-0" src="/aboutpablo/reelabout.mov" controls autoPlay loop>
                    Tu navegador no admite el elemento de video.
                </video>
            </div>
        </div>
    )
}
