
import Footer from "@/components/footer/Footer";
import { Lang } from "@/types/lang.type";
import Link from "next/link";

const bodegas = [
    {
        title: "Bodega Trivento",
        description: "En este tour 2024, una de las grandes novedades es la presentación de White Malbec de Bodega Trivento, un blanco excepcional, único en su estilo elaborado con uvas tintas de malbec; y tambien el Trivento Golden Reserve, un exquisito malbec de alta gama de Luján de Cuyo, destacado como el mejor vino argentino en la Prowein."
    },
    {
        title: "Bodega Achaval Ferrer",
        description: "La Bodega Achaval Ferrer nos acompaña en este tour con Quimera, un warm blend de uvas tintas cuidadosamente seleccionadas. De esta misma bodega, se suma una nueva etiqueta, Quimerino Blanco, lanzado recientemente, un vino muy gastronómico que tiene al sauvignon blanc como base y se completa con una  delicada de  combinación del marsanne y el Roussanne."
    },
    {
        title: "Bodega Antigal",
        description: "Recientemente premiada como la Mejor Bodega del Nuevo Mundo, Antigal nos acompaña por primera vez nuestro tour con dos vinos excepcionales, Antigal Uno Malbec, un vino que destaca la mejor expresión del valle de uco; y el Uno Rosé, un blend de tintas también del valle de Uco que sorprende por su frescura y equilibrio."
    },
    {
        title: "Bodega Otronia",
        description: "Otra de las grandes novedades que tendrá este tour es la incorporación de dos excepcionales vinos de Bodega Otronia, proveniente de una ubicación extrema a 45° de latitud al sur de la Patagonia Argentina:  45 Rugientes Corte de blancas, un blend exquisito de Chardonnay, Gewurstraminer y Pinot Grigio; y también el 45 Rugientes Pinot Noir, reconocido como mejor pinot noir de las Américas por Decanter."
    },
    {
        title: "Bodega Argento",
        description: "Por primera vez en nuestro tour nos acompaña la Bodega Argento con dos vinos orgánicos; el Argento Estate Bottled Pinot Grigio de El Carrizal en el este mendocino y el Argento Estate  Collection Malbec de Agrelo en Luján de Cuyo."
    },
    {
        title: "Bodega Lagarde",
        description: "Lagarde presentará, únicamente en Texas, una de sus últimas novedades, el Lagarde Organic Rosé, un blend rosado de Malbec y Semillón orgánico realizado con prácticas responsables con el medio ambiente y la comunidad."
    }
];


export default async function page({ params: { lang } }: Lang) {

    const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(m => m.default)

    return (
        <section className="h-screen max-w-7xl mx-auto px-3 lg:px-0">
            <h2 className="hidden lg:block text-6xl lg:text-8xl font-bold text-shadow -tracking-[4px] lg:-tracking-[8px] mb-10 lg:mb-20 mt-10 " style={{ lineHeight: 0.8 }}>Los Vinos del Tour</h2>
            <h2 className="text-6xl lg:text-8xl lg:hidden font-bold text-shadow -tracking-[4px] lg:-tracking-[8px] mb-10 lg:mb-20 mt-10 " style={{ lineHeight: 0.9 }}>Los Vinos<br /> del Tour</h2>
            <div>
                {
                    bodegas.map((bodega, i) => (
                        <Link key={bodega.title} href={'#'} target="_blank" className={`${i === bodegas.length - 1 ? "border-none" : "border-b-4 border-black"} flex flex-col lg:flex-row-reverse gap-6 pt-10 pb-10 hover:bg-gray-50`}>
                            <div className="w-full space-y-2">
                                <p className="text-2xl md:text-3xl lg:text-4xl font-bold">{bodega.title}</p>
                                <p className="text-gray-500">{bodega.description}</p>
                            </div>
                            <div className="w-full min-h-full bg-gray-200 block">

                                {/* <Image isZoomed radius="none" src={press.image} alt="diariouno" /> */}
                            </div>
                        </Link>
                    ))
                }
            </div>
            <Footer dictionary={dictionary} lang={lang} />
        </section>
    )
}
