import { Image } from "@nextui-org/react"
import Link from "next/link";

const pressMap = [
    {
        title: "Pablo Ranea: 'Ninguna capital del vino tiene la cocina de Mendoza'",
        linkPress: "https://www.mdzol.com/estilo/2024/1/14/pablo-ranea-ninguna-capital-del-vino-tiene-la-cocina-de-mendoza-398310.html",
        image: "https://www.mdzol.com/u/fotografias/m/2024/1/3/f848x477-1531330_1589133_5050.jpg",
        diary: "mdzonline.es",
        date: "Enero, 2024",
    },
    {
        title: "Pablo Ranea: el chef que lleva la grastronomía mendocina a lugares emblemáticos del mundo",
        linkPress: "https://www.diariouno.com.ar/emprendedores/pablo-ranea-el-chef-que-lleva-la-gastronomia-mendocina-lugares-emblematicos-del-mundo-n1283699",
        image: "https://media.diariouno.com.ar/p/1a8f8e6b418e3e83e35a40f76611ed77/adjuntos/298/imagenes/009/287/0009287174/1200x0/smart/che-nomade-pablo-ranea-portada-1jpg.jpg",
        diary: "diariouno.com.ar",
        date: "Enero, 2024",
    },
]

export default function CardPress() {
    return (
        <div>
            {
                pressMap.map((press, i) => (
                    <Link key={press.title} href={press.linkPress} target="_blank" className={`${i === pressMap.length -1 ? "border-none" : "border-b-4 border-black"} flex flex-col lg:flex-row gap-6 pt-10 pb-10 hover:bg-gray-50 px-6 `}>
                        <div className="w-full">
                            <p className="text-2xl md:text-3xl lg:text-4xl font-bold">{press.title}</p>
                            <p className="text-gray-500">{press.diary}</p>
                            <p className="text-sm">{press.date}</p>
                        </div>
                        <div className="w-full">
                            <Image isZoomed radius="none" src={press.image} alt="diariouno" />
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}
