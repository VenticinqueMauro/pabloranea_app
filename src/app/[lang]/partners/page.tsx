
import Footer from "@/components/footer/Footer";
import { Lang } from "@/types/lang.type";
import Link from "next/link";

const bodegas = [
    {
        title: "Bodega Trivento",
        titleEn: "Trivento Winery",
        description: "En este tour 2024, una de las grandes novedades es la presentación de White Malbec de Bodega Trivento, un blanco excepcional, único en su estilo elaborado con uvas tintas de malbec; y tambien el Trivento Golden Reserve, un exquisito malbec de alta gama de Luján de Cuyo, destacado como el mejor vino argentino en la Prowein.",
        descriptionEn: "In our 2024 tour, we're thrilled to introduce Trivento Winery's latest offerings. Among them is the exceptional White Malbec, a uniquely crafted white wine made from Malbec red grapes, showcasing Trivento's innovative style. Additionally, we're proud to feature the Trivento Golden Reserve, a luxurious Malbec from Luján de Cuyo, hailed as Argentina's finest wine at Prowein."
    },
    {
        title: "Bodega Achaval Ferrer",
        titleEn: "Achaval Ferrer Winery",
        description: "La Bodega Achaval Ferrer nos acompaña en este tour con Quimera, un warm blend de uvas tintas cuidadosamente seleccionadas. De esta misma bodega, se suma una nueva etiqueta, Quimerino Blanco, lanzado recientemente, un vino muy gastronómico que tiene al sauvignon blanc como base y se completa con una  delicada de  combinación del marsanne y el Roussanne.",
        descriptionEn: "Joining us on this journey is Achaval Ferrer Winery, presenting their exquisite and iconic Quimera, a harmonious Bordeaux blend of carefully selected red grapes. Also debuting is Quimerino Blanco, a newly launched wine characterized by its gastronomic prowess, blending Sauvignon Blanc with a delicate touch of Marsanne and Roussanne."
    },
    {
        title: "Bodega Antigal",
        titleEn: "Antigal Winery",
        description: "Recientemente premiada como la Mejor Bodega del Nuevo Mundo, Antigal nos acompaña por primera vez nuestro tour con dos vinos excepcionales, Antigal Uno Malbec, un vino que destaca la mejor expresión del valle de uco; y el Uno Rosé, un blend de tintas también del valle de Uco que sorprende por su frescura y equilibrio.",
        descriptionEn: "Recognized as the Best New World Winery, Antigal makes its inaugural appearance on our tour, showcasing two exceptional wines. Antigal Uno Malbec captures the essence of the Uco Valley, while Uno Rosé surprises with its refreshing blend, both embodying Antigal's commitment to excellence."
    },
    {
        title: "Bodega Otronia",
        titleEn: "Otronia Winery",
        description: "Otra de las grandes novedades que tendrá este tour es la incorporación de dos excepcionales vinos de Bodega Otronia, proveniente de una ubicación extrema a 45° de latitud al sur de la Patagonia Argentina:  45 Rugientes Corte de blancas, un blend exquisito de Chardonnay, Gewurstraminer y Pinot Grigio; y también el 45 Rugientes Pinot Noir, reconocido como mejor pinot noir de las Américas por Decanter.",
        descriptionEn: "Adding to the excitement are two outstanding wines from Otronia Winery, sourced from the extreme southern latitude of Argentine Patagonia. 45 Rugientes Corte de Blancas combines Chardonnay, Gewürztraminer, and Pinot Grigio in an exquisite blend, while the 45 Rugientes Pinot Noir stands as the pinnacle of Pinot Noir excellence in the Americas, as recognized by Decanter."
    },
    {
        title: "Bodega Argento",
        titleEn: "Lagarde Winery",
        description: "Por primera vez en nuestro tour nos acompaña la Bodega Argento con dos vinos orgánicos; el Argento Estate Bottled Pinot Grigio de El Carrizal en el este mendocino y el Argento Estate  Collection Malbec de Agrelo en Luján de Cuyo.",
        descriptionEn: "Exclusive to Texas, Lagarde presents their latest creation, the Lagarde Organic Rosé, a blend of Malbec and Semillon crafted with environmentally responsible practices, reflecting Lagarde's dedication to sustainability and community."
    },
    {
        title: "Bodega Lagarde",
        titleEn: "Argento Winery",
        description: "Lagarde presentará, únicamente en Texas, una de sus últimas novedades, el Lagarde Organic Rosé, un blend rosado de Malbec y Semillón orgánico realizado con prácticas responsables con el medio ambiente y la comunidad.",
        descriptionEn: "Making their tour debut, Argento Winery introduces two spectacular wines made with organic grapes: the Argento Estate Bottled Pinot Grigio from El Carrizal in eastern Mendoza, and the Argento Estate Collection Malbec from Agrelo in Luján de Cuyo."
    }
];


export default async function page({ params: { lang } }: Lang) {

    const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(m => m.default)


    return (
        <section className="h-screen max-w-7xl mx-auto px-3 lg:px-0">
            <h2 className="hidden lg:block text-6xl lg:text-8xl font-bold text-shadow -tracking-[4px] lg:-tracking-[7px] mb-10 lg:mb-20 mt-10 " style={{ lineHeight: 0.8 }}>{lang === 'es' ? "Los Vinos del Tour" : "TOUR’S WINE SELECTION"} </h2>
            <h2 className="text-6xl lg:text-8xl lg:hidden font-bold text-shadow -tracking-[4px] lg:-tracking-[8px] mb-10 lg:mb-20 mt-10 " style={{ lineHeight: 0.9 }}>{lang === 'es' ? "Los Vinos" : "The Wine"}<br />{lang === 'es' ? "del Tour" : "tour Selection"}</h2>
            <div>
                {
                    bodegas.map((bodega, i) => (
                        <Link key={bodega.title} href={'#'} target="_blank" className={`${i === bodegas.length - 1 ? "border-none" : "border-b-4 border-black"} flex flex-col lg:flex-row-reverse gap-6 pt-10 pb-10 hover:bg-gray-50`}>
                            <div className="w-full space-y-2">
                                <p className="text-2xl md:text-3xl lg:text-4xl font-bold">{lang === 'es' ? bodega.title : bodega.titleEn}</p>
                                <p className="text-gray-500">{lang === 'es' ? bodega.description : bodega.descriptionEn}</p>
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
