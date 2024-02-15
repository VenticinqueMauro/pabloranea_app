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
    {
        title: "Pablo Ranea: El chef mendocino nómada que no pierde sus raíces",
        linkPress: "https://placeres.pe/pablo-ranea-el-chef-mendocino-nomada-que-no-pierde-sus-raices/",
        image: "https://i0.wp.com/placeres.pe/wp-content/uploads/2024/01/Pablo-Ranea_5-scaled.jpg?fit=2560%2C1708&ssl=1",
        diary: "placeres.pe",
        date: "Enero, 2024",
    },
    {
        title: "Es mendocino, se lució con cenas “pop ups” y ahora recorre Estados Unidos con los mejores vinos argentinos",
        linkPress: "https://tn.com.ar/sociedad/2023/11/24/es-mendocino-se-lucio-con-cenas-pop-ups-y-ahora-recorre-estados-unidos-con-los-mejores-vinos-argentinos/",
        image: "https://tn.com.ar/resizer/6KrriVVaLE_1JYu4xeHg5W19PHc=/1440x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/J63K4KQSXBDT3MH45IGGACZCJU.jpg",
        diary: "tn.com.ar",
        date: "Noviembre, 2023",
    },
    {
        title: "El regreso de Pablo Ranea",
        linkPress: "http://www.eltrinche.com/datos-calientes/el-regreso-de-pablo-ranea/",
        image: "http://www.eltrinche.com/wp-content/uploads/2023/11/Pablo-Ranea-cver-1100x508.jpg",
        diary: "eltrinche.com",
        date: "Julio, 2023",
    },
    {
        title: "PABLO RANEA, EL CHEF Y SOMMELIER TROTAMUNDOS",
        linkPress: "https://vinomanos.com/2022/04/pablo-ranea/",
        image: "https://vinomanos.com/wp-content/uploads/2022/04/Vinomanos_Pablo-_-Ale-Fotos-2018-33.jpg",
        diary: "eltrinche.com",
        date: "Abril, 2022",
    },
    {
        title: "Pablo Ranea, el chef nómade que difunde por el mundo los sabores del vino y la cocina argentina",
        linkPress: "https://www.filo.news/comida/Pablo-Ranea-el-chef-nomade-que-difunde-por-el-mundo-los-sabores-del-vino-y-la-cocina-argentina-20220501-0001.html",
        image: "https://assets.dev-filo.dift.io/img/2022/05/01/pablo_ranea_1_sq.jpg",
        diary: "filo.news",
        date: "Mayo, 2022",
    },
    {
        title: "Cinco buenas razones para tomar vino mendocino",
        linkPress: "https://www.infobae.com/tendencias/2022/03/11/cinco-buenas-razones-para-tomar-vino-mendocino/",
        image: "https://www.infobae.com/new-resizer/NAViZT4ZYOz32UAV0bQ5qDB2J1s=/1200x675/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/RFMDRPSTHZD7HINPNCU6AVFCXI.jpg",
        diary: "infobae.com",
        date: "Marzo, 2022",
    },
    {
        title: "El chef nómade que lleva sabores argentinos al mundo",
        linkPress: "https://elgourmet.com/noticias/el-chef-nomade-que-lleva-sabores-argentinos-al-mundo/",
        image: "https://assets.elgourmet.com/wp-content/uploads/2023/03/wzlv6y13t4_pabloraneaslide-1024x684.jpg.webp",
        diary: "elgourmet.com",
        date: "Febrero, 2022",
    },
    {
        title: "Los tips del chef Pablo Ranea para organizar una comida hogareña",
        linkPress: "https://viapais.com.ar/rumbos/1877015-los-tips-del-chef-pablo-ranea-para-organizar-una-comida-hogarena/",
        image: "https://viapais.com.ar/resizer/KzaJHMe9NDYOL3s_UkA8M1B1NQY=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/GI2TEOBXGQ4WCZLFMUZWKZDBHE.jpg",
        diary: "viapais.com.ar",
        date: "Julio, 2020",
    },
    {
        title: "阿根廷餡餅 吃不停",
        linkPress: "https://news.mingpao.com/pns/%E6%95%99%E8%82%B2/article/20180125/s00011/1516817893577/%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%A4%A1%E9%A4%85-%E5%90%83%E4%B8%8D%E5%81%9C",
        image: "https://fs.mingpao.com/pns/20180125/s00050/9de46555c20ac071be75cb059d2e1140.jpg",
        diary: "news.mingpao.com",
        date: "Enero, 2018",
    },
    {
        title: "Experto en vinos argentinos brinda claves de maridaje",
        linkPress: "https://elcomercio.pe/gastronomia/bares-y-copas/experto-vinos-argentinos-brinda-claves-maridaje-348171-noticia/#google_vignette",
        image: "https://elcomercio.pe/resizer/y1J1t5w7V2_1hVtKpFaqNOJIoFc=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/EWMILNVKLFCAHHLTK3WCSGIFKI.jpg",
        diary: "elcomercio.pe",
        date: "Abril, 2015",
    },
]

interface Props {
    isPage: boolean;
}

export default function CardPress({ isPage }: Props) {

    const shuffledPressMap = pressMap.sort(() => Math.random() - 0.5);
    const selectedPresses = shuffledPressMap.slice(0, 2);

    return (
        <div>
            {
                !isPage ? (
                    pressMap.map((press, i) => (
                        <Link key={press.title} href={press.linkPress} target="_blank" className={`${i === pressMap.length - 1 ? "border-none" : "border-b-4 border-black"} flex flex-col lg:flex-row gap-6 pt-10 pb-10 hover:bg-gray-50 px-6 `}>
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
                ) : (
                    selectedPresses.map((press, i) => (
                        <Link key={press.title} href={press.linkPress} target="_blank" className={`${i === selectedPresses.length - 1 ? "border-none" : "border-b-4 border-black"} flex flex-col lg:flex-row gap-6 pt-10 pb-10 hover:bg-gray-50 px-6 `}>
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
                )
            }
        </div>
    )
}
