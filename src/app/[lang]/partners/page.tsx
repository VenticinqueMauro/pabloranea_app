
import Footer from "@/components/footer/Footer";
import { Lang } from "@/types/lang.type";

const bodegas = [
    {
        title: "Bodega Trivento",
        titleEn: "Trivento Winery",
        description: "En este tour 2024, una de las grandes novedades es la presentación de White Malbec de Bodega Trivento, un blanco excepcional, único en su estilo elaborado con uvas tintas de malbec; y tambien el Trivento Golden Reserve, un exquisito malbec de alta gama de Luján de Cuyo, destacado como el mejor vino argentino en la Prowein.",
        descriptionEn: "In our 2024 tour, we're thrilled to introduce Trivento Winery's latest offerings. Among them is the exceptional White Malbec, a uniquely crafted white wine made from Malbec red grapes, showcasing Trivento's innovative style. Additionally, we're proud to feature the Trivento Golden Reserve, a luxurious Malbec from Luján de Cuyo, hailed as Argentina's finest wine at Prowein.",
        imageUrl: "/partners/Trivento.gif"
    },
    {
        title: "Bodega Achaval Ferrer",
        titleEn: "Achaval Ferrer Winery",
        description: "La Bodega Achaval Ferrer nos acompaña en este tour con Quimera, un warm blend de uvas tintas cuidadosamente seleccionadas. De esta misma bodega, se suma una nueva etiqueta, Quimerino Blanco, lanzado recientemente, un vino muy gastronómico que tiene al sauvignon blanc como base y se completa con una  delicada de  combinación del marsanne y el Roussanne.",
        descriptionEn: "Joining us on this journey is Achaval Ferrer Winery, presenting their exquisite and iconic Quimera, a harmonious Bordeaux blend of carefully selected red grapes. Also debuting is Quimerino Blanco, a newly launched wine characterized by its gastronomic prowess, blending Sauvignon Blanc with a delicate touch of Marsanne and Roussanne.",
        imageUrl: "/partners/Achaval.gif"
    },
    {
        title: "Bodega Antigal",
        titleEn: "Antigal Winery",
        description: "Recientemente premiada como la Mejor Bodega del Nuevo Mundo, Antigal nos acompaña por primera vez nuestro tour con dos vinos excepcionales, Antigal Uno Malbec, un vino que destaca la mejor expresión del valle de uco; y el Uno Rosé, un blend de tintas también del valle de Uco que sorprende por su frescura y equilibrio.",
        descriptionEn: "Recognized as the Best New World Winery, Antigal makes its inaugural appearance on our tour, showcasing two exceptional wines. Antigal Uno Malbec captures the essence of the Uco Valley, while Uno Rosé surprises with its refreshing blend, both embodying Antigal's commitment to excellence.",
        imageUrl: "/partners/Antigal.gif"
    },
    {
        title: "Bodega Otronia",
        titleEn: "Otronia Winery",
        description: "Otra de las grandes novedades que tendrá este tour es la incorporación de dos excepcionales vinos de Bodega Otronia, proveniente de una ubicación extrema a 45° de latitud al sur de la Patagonia Argentina:  45 Rugientes Corte de blancas, un blend exquisito de Chardonnay, Gewurstraminer y Pinot Grigio; y también el 45 Rugientes Pinot Noir, reconocido como mejor pinot noir de las Américas por Decanter.",
        descriptionEn: "Adding to the excitement are two outstanding wines from Otronia Winery, sourced from the extreme southern latitude of Argentine Patagonia. 45 Rugientes Corte de Blancas combines Chardonnay, Gewürztraminer, and Pinot Grigio in an exquisite blend, while the 45 Rugientes Pinot Noir stands as the pinnacle of Pinot Noir excellence in the Americas, as recognized by Decanter.",
        imageUrl: "/partners/Otronia.gif"
    },
    {
        title: "Bodega Argento",
        titleEn: "Argento Winery",
        description: "Por primera vez en nuestro tour nos acompaña la Bodega Argento con dos vinos orgánicos; el Argento Estate Bottled Pinot Grigio de El Carrizal en el este mendocino y el Argento Estate  Collection Malbec de Agrelo en Luján de Cuyo.",
        descriptionEn: "Exclusive to Texas, Lagarde presents their latest creation, the Lagarde Organic Rosé, a blend of Malbec and Semillon crafted with environmentally responsible practices, reflecting Lagarde's dedication to sustainability and community.",
        imageUrl: "/partners/Argento.gif"
    },
    {
        title: "Bodega Lagarde",
        titleEn: "Lagarde Winery",
        description: "Lagarde presentará, únicamente en Texas, una de sus últimas novedades, el Lagarde Organic Rosé, un blend rosado de Malbec y Semillón orgánico realizado con prácticas responsables con el medio ambiente y la comunidad.",
        descriptionEn: "Making their tour debut, Argento Winery introduces two spectacular wines made with organic grapes: the Argento Estate Bottled Pinot Grigio from El Carrizal in eastern Mendoza, and the Argento Estate Collection Malbec from Agrelo in Luján de Cuyo.",
        imageUrl: "/partners/Lagarde.gif"
    },
    {
        title: "Enemigo Wines",
        titleEn: "Enemigo Wines",
        description: "En este Tour 2024, nos complace presentar uno de los mejores Cabernet Franc argentinos: el Gran Enemigo Single Vineyard Gualtallary de Alejandro Vigil. Este vino ha sido distinguido como el primer vino argentino en alcanzar la puntuación perfecta de 100 puntos por Parker.",
        descriptionEn: "In this 2024 Tour, we are delighted to introduce one of the finest Argentine Cabernet Francs: Alejandro Vigil's Gran Enemigo Single Vineyard Gualtallary. This wine has been distinguished as the first Argentine wine to achieve the perfect score of 100 points by Parker.",
        imageUrl: "/partners/Enemigo-Wines.gif"
    },
    {
        title: "Bodega Susana Balbo",
        titleEn: "Susana Balbo Winery",
        description: "Reconocida como la 'reina de los blancos' y como la primera mujer enóloga argentina, en esta ocasión estamos encantados de presentar el Susana Balbo Signature Rosé. Este exquisito blend de Pinot Noir y Malbec del Valle de Uco ha sido destacado como uno de los mejores rosados argentinos.",
        descriptionEn: "Renowned as the 'queen of whites' and as the first female Argentine winemaker, we are thrilled to introduce the Susana Balbo Signature Rosé. This exquisite blend of Pinot Noir and Malbec from the Uco Valley is celebrated as one of Argentina's finest rosés.",
        imageUrl: "/partners/SusanaBalbo.gif"
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
                        <div key={bodega.title} className={`${i === bodegas.length - 1 ? "border-none" : "border-b-4 border-black"} flex flex-col lg:flex-row-reverse gap-6 pt-10 pb-10`}>
                            <div className="w-full space-y-2">
                                <p className="text-2xl md:text-3xl lg:text-4xl font-bold">{lang === 'es' ? bodega.title : bodega.titleEn}</p>
                                <p className="text-gray-500">{lang === 'es' ? bodega.description : bodega.descriptionEn}</p>
                            </div>
                            <div className="w-full min-h-full">
                                {/* eslint-disable-next-line @next/next/no-img-element  */}
                                <img
                                    src={bodega.imageUrl}
                                    alt={bodega.title}
                                    width={520}
                                    height={230}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer dictionary={dictionary} lang={lang} />
        </section>
    )
}
