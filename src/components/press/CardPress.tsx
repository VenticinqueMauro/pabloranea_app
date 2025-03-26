import { Image } from "@nextui-org/react"
import Link from "next/link";

const format = (date: Date, locale: string, options: Intl.DateTimeFormatOptions): string => {
    if (locale === 'es') {
        const month = date.toLocaleString(locale, { month: 'long' });
        const year = date.getFullYear();
        return `${month}, ${year}`;
    } else {
        return new Intl.DateTimeFormat(locale, options).format(date);
    }
}


const pressMap = [
    {
        title: "Plato Insignia: Helado de sambayón al Malbec por Pablo Ranea",
        linkPress: "https://inmendoza.com/plato-insignia-helado-de-sambayon-al-malbec-por-pablo-ranea/",
        image: "https://inmendoza.com/wp-content/uploads/2025/02/PABLORANEA555-scaled.webp",
        width: 800,
        height: 534,
        diary: "inmendoza.com",
        date: new Date(2025, 1),
    },
    {
        title: "Cómo hacer empanadas de carne: relleno jugoso y masa sequita y dorada",
        linkPress: "https://foodit.lanacion.com.ar/guias-de-cocina/como-hacer-empanadas-de-carne-relleno-jugoso-y-masa-sequita-y-dorada-nid05122024/",
        image: "https://resizer.glanacion.com/resizer/v2/pablo-ranea-es-chef-y-sommelier-nomade-las-3H45HT5JVBGHPIGWQMB7KNX5Q4.jpeg?auth=688eabfb4f4bfbbbe89278006c8556a3964d24278a78e19b4ba6bc1964b92e8e&width=780&height=520&quality=70&smart=true",
        width: 800,
        height: 534,
        diary: "foodit.lanacion.com.ar/",
        date: new Date(2024, 11),
    },
    {
        title: "El chef nómade que redescubre las regiones vitivinícolas de Mendoza",
        linkPress: "https://www.ambito.com/lifestyle/el-chef-nomade-que-redescubre-las-regiones-vitivinicolas-mendoza-n6091101",
        image: "https://media.ambito.com/p/75ce65cf6b6d81f2fe668e33ceeae8b0/adjuntos/239/imagenes/042/027/0042027857/655x368/smart/img_0787jpeg.jpeg",
        width: 655,
        height: 368,
        diary: "ambito.com",
        date: new Date(2024, 11),
    },
    {
        title: "Pablo Ranea, el chef que trae turistas a Mendoza para dar a conocer lo mejor de las bodegas y la gastronomía local",
        linkPress: "https://thewinetime.com.ar/26299-2/",
        image: "https://thewinetime.com.ar/wp/wp-content/uploads/2024/10/IMG-20241024-WA0002.jpg",
        width: 1280,
        height: 853,
        diary: "thewinetime.com.ar",
        date: new Date(2024, 9),
    },
    {
        title: "La vida del chef nómade que recorrió más de 100 ciudades y lleva la comida argentina por el mundo",
        linkPress: "https://www.forbesargentina.com/lifestyle/la-vida-chef-nomade-recorrio-mas-100-ciudades-lleva-comida-argentina-mundo-n50443",
        image: "https://statics.forbesargentina.com/2024/03/crop/6601e9337b7f0__822x460.webp",
        width: 822,
        height: 460,
        diary: "www.forbesargentina.com",
        date: new Date(2024, 3),
    },
    {
        title: "El cocinero itinerante que lleva el paladar argentino hacia el mundo",
        linkPress: "https://andigital.com.ar/nota/122394/el-cocinero-itinerante-que-lleva-el-paladar-argentino-hacia-el-mundo/",
        image: "https://andigital.com.ar/uploads/noticias/5/2024/03/20240318131645_anss.jpg",
        width: 791,
        height: 460,
        diary: "andigital.com.ar",
        date: new Date(2024, 2),
    },
    {
        title: "Pablo Ranea, el chef y sommelier nómade que este año hará 65 Pop Ups en EEUU, Perú y China",
        linkPress: "https://mendoza.puntoapunto.com.ar/pablo-ranea-el-chef-y-sommelier-nomade-que-este-ano-hara-65-pop-ups-en-eeuu-peru-y-china/",
        image: "https://mendoza.puntoapunto.com.ar/wp-content/uploads/2024/03/Pablo-Ranea-principal-1170x780.jpg",
        width: 819,
        height: 546,
        diary: "mendoza.puntoapunto.com.ar",
        date: new Date(2024, 2),
    },
    {
        title: "RANEA DE 10 AÑOS COMO CHEF EN AZAFRAN A NOMADE",
        linkPress: "https://www.granbanquete.com.ar/buena-comida/ranea-de-10-anos-como-chef-en-azafran-a-nomade/",
        image: "https://www.granbanquete.com.ar/files/image/7/7437/65f6fbb37b79e_905_510!.webp?s=bd7e573f06eff01eab0b1d61f2e16373&d=1710686567&oe=jpg",
        width: 924,
        height: 520,
        diary: "granbanquete.com.ar",
        date: new Date(2024, 2),
    },
    {
        title: "Pablo Ranea: El reconocido chef y sommelier nómade que lleva el paladar argentino al mundo",
        linkPress: "https://eldescorchediario.com/pablo-ranea-el-reconocido-chef-y-sommelier-nomade-que-lleva-el-paladar-argentino-al-mundo/",
        image: "https://eldescorchediario.com/wp-content/uploads/2024/03/Pablo-Ranea-min.jpg",
        width: 885,
        height: 590,
        diary: "eldescorchediario.com",
        date: new Date(2024, 2),
    },
    {
        title: "Pablo Ranea: 'Ninguna capital del vino tiene la cocina de Mendoza'",
        linkPress: "https://www.mdzol.com/estilo/2024/1/14/pablo-ranea-ninguna-capital-del-vino-tiene-la-cocina-de-mendoza-398310.html",
        image: "https://www.mdzol.com/u/fotografias/m/2024/1/3/f848x477-1531330_1589133_5050.jpg",
        width: 848,
        height: 477,
        diary: "mdzonline.es",
        date: new Date(2024, 0),
    },
    {
        title: "Pablo Ranea: el chef que lleva la grastronomía mendocina a lugares emblemáticos del mundo",
        linkPress: "https://www.diariouno.com.ar/emprendedores/pablo-ranea-el-chef-que-lleva-la-gastronomia-mendocina-lugares-emblematicos-del-mundo-n1283699",
        image: "https://media.diariouno.com.ar/p/1a8f8e6b418e3e83e35a40f76611ed77/adjuntos/298/imagenes/009/287/0009287174/1200x0/smart/che-nomade-pablo-ranea-portada-1jpg.jpg",
        width: 1200,
        height: 800,
        diary: "diariouno.com.ar",
        date: new Date(2024, 0),
    },
    {
        title: "Pablo Ranea: El chef mendocino nómada que no pierde sus raíces",
        linkPress: "https://placeres.pe/pablo-ranea-el-chef-mendocino-nomada-que-no-pierde-sus-raices/",
        image: "https://i0.wp.com/placeres.pe/wp-content/uploads/2024/01/Pablo-Ranea_5-scaled.jpg?fit=2560%2C1708&ssl=1",
        width: 1319,
        height: 880,
        diary: "placeres.pe",
        date: new Date(2024, 0),
    },
    {
        title: "Es mendocino, se lució con cenas “pop ups” y ahora recorre Estados Unidos con los mejores vinos argentinos",
        linkPress: "https://tn.com.ar/sociedad/2023/11/24/es-mendocino-se-lucio-con-cenas-pop-ups-y-ahora-recorre-estados-unidos-con-los-mejores-vinos-argentinos/",
        image: "https://tn.com.ar/resizer/6KrriVVaLE_1JYu4xeHg5W19PHc=/1440x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/J63K4KQSXBDT3MH45IGGACZCJU.jpg",
        width: 1319,
        height: 738,
        diary: "tn.com.ar",
        date: new Date(2023, 10),
    },
    {
        title: "El regreso de Pablo Ranea",
        linkPress: "http://www.eltrinche.com/datos-calientes/el-regreso-de-pablo-ranea/",
        image: "http://www.eltrinche.com/wp-content/uploads/2023/11/Pablo-Ranea-cver-1100x508.jpg",
        diary: "eltrinche.com",
        width: 1100,
        height: 508,
        date: new Date(2023, 6),
    },
    {
        title: "PABLO RANEA, EL CHEF Y SOMMELIER TROTAMUNDOS",
        linkPress: "https://vinomanos.com/2022/04/pablo-ranea/",
        image: "https://vinomanos.com/wp-content/uploads/2022/04/Pablo-Ranea.jpeg.webp",
        diary: "eltrinche.com",
        width: 720,
        height: 481,
        date: new Date(2022, 3),
    },
    {
        title: "Pablo Ranea, el chef nómade que difunde por el mundo los sabores del vino y la cocina argentina",
        linkPress: "https://www.filo.news/comida/Pablo-Ranea-el-chef-nomade-que-difunde-por-el-mundo-los-sabores-del-vino-y-la-cocina-argentina-20220501-0001.html",
        image: "https://assets.dev-filo.dift.io/img/2022/05/01/pablo_ranea_1_sq.jpg",
        width: 600,
        height: 600,
        diary: "filo.news",
        date: new Date(2022, 4),
    },
    {
        title: "El chef nómade que lleva sabores argentinos al mundo",
        linkPress: "https://elgourmet.com/noticias/el-chef-nomade-que-lleva-sabores-argentinos-al-mundo/",
        image: "https://assets.elgourmet.com/wp-content/uploads/2023/03/wzlv6y13t4_pabloraneaslide-1024x684.jpg.webp",
        diary: "elgourmet.com",
        width: 1024,
        height: 684,
        date: new Date(2022, 1),
    },
    {
        title: "Cinco buenas razones para tomar vino mendocino",
        linkPress: "https://www.infobae.com/tendencias/2022/03/11/cinco-buenas-razones-para-tomar-vino-mendocino/",
        image: "https://www.infobae.com/new-resizer/NAViZT4ZYOz32UAV0bQ5qDB2J1s=/1200x675/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/RFMDRPSTHZD7HINPNCU6AVFCXI.jpg",
        width: 856,
        height: 481,
        diary: "infobae.com",
        date: new Date(2022, 2),
    },
    {
        title: "Los tips del chef Pablo Ranea para organizar una comida hogareña",
        linkPress: "https://viapais.com.ar/rumbos/1877015-los-tips-del-chef-pablo-ranea-para-organizar-una-comida-hogarena/",
        image: "https://viapais.com.ar/resizer/KzaJHMe9NDYOL3s_UkA8M1B1NQY=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/GI2TEOBXGQ4WCZLFMUZWKZDBHE.jpg",
        width: 1023,
        height: 682,
        diary: "viapais.com.ar",
        date: new Date(2020, 6),
    },
    {
        title: "阿根廷餡餅 吃不停",
        linkPress: "https://news.mingpao.com/pns/%E6%95%99%E8%82%B2/article/20180125/s00011/1516817893577/%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%A4%A1%E9%A4%85-%E5%90%83%E4%B8%8D%E5%81%9C",
        image: "https://fs.mingpao.com/pns/20180125/s00050/9de46555c20ac071be75cb059d2e1140.jpg",
        width: 800,
        height: 532,
        diary: "news.mingpao.com",
        date: new Date(2018, 0),
    },
    {
        title: "Experto en vinos argentinos brinda claves de maridaje",
        linkPress: "https://elcomercio.pe/gastronomia/bares-y-copas/experto-vinos-argentinos-brinda-claves-maridaje-348171-noticia/#google_vignette",
        image: "https://elcomercio.pe/resizer/y1J1t5w7V2_1hVtKpFaqNOJIoFc=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/EWMILNVKLFCAHHLTK3WCSGIFKI.jpg",
        width: 580,
        height: 330,
        diary: "elcomercio.pe",
        date: new Date(2015, 3),
    },
]

interface Props {
    isPage: boolean;
    lang: 'es' | 'en'
}

export default function CardPress({ isPage, lang }: Props) {


    const shuffledPressMap = pressMap.sort(() => Math.random() - 0.5);
    const selectedPresses = shuffledPressMap.slice(0, 2);

    return (
        <div className="px-3 lg:px-0">
            {
                !isPage ? (
                    pressMap.sort((a: any, b: any) => b.date - a.date).map((press, i) => (
                        <Link key={press.title} href={press.linkPress} target="_blank" className={`${i === pressMap.length - 1 ? "border-none" : "border-b-4 border-black"} flex flex-col lg:flex-row gap-6 pt-10 pb-10`}>
                            <div className="w-full">
                                <p className="text-2xl font-bold md:text-3xl lg:text-4xl">{press.title}</p>
                                <p className="text-gray-500">{press.diary}</p>
                                <p className="text-sm capitalize">{format(press.date, lang, { month: 'long', year: 'numeric' })}</p>
                            </div>
                            <div className="w-full">
                                <Image isZoomed radius="none" src={press.image} alt={press.title} width={press.width} height={press.height} />
                            </div>
                        </Link>
                    ))
                ) : (
                    selectedPresses.map((press, i) => (
                        <Link key={press.title} href={press.linkPress} target="_blank" className={`${i === selectedPresses.length - 1 ? "border-none" : "border-b-4 border-black"} flex flex-col lg:flex-row gap-6 pt-10 pb-10`}>
                            <div className="w-full">
                                <p className="text-2xl font-bold md:text-3xl lg:text-4xl">{press.title}</p>
                                <p className="text-gray-500">{press.diary}</p>
                                <p className="text-sm capitalize">{format(press.date, lang, { month: 'long', year: 'numeric' })}</p>
                            </div>
                            <div className="w-full">
                                <Image isZoomed radius="none" src={press.image} alt={press.title} width={press.width} height={press.height} />
                            </div>
                        </Link>
                    ))
                )
            }
        </div>
    )
}
