import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";


export default function Section4({ dictionary }: { dictionary: Dictionary }) {

    const { title, description1, description2 } = dictionary.aboutpablo.page.section4;

    const partesDescripcion1 = description1.split(/(<b>.*?<\/b>)/);


    return (
        <div className="bg-background text-foreground light px-3 lg:px-20">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
                <Image className="object-contain w-full lg:w-1/2 min-w-0 h-auto" src="/aboutpablo/1.jpg" alt="Pablo Ranea" width={990} height={557} sizes="(min-width: 1024px) 50vw, 100vw" />
                <Image className="object-cover w-full lg:w-1/2 min-w-0 h-auto" src="/aboutpablo/2.jpg" alt="Pablo Ranea" width={990} height={557} sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between py-20 gap-10">
                <h2 className="uppercase text-2xl font-bold w-full col-span-12 lg:col-span-6">{title}</h2>
                <div className="w-full space-y-10">
                    {/* Renderizar cada parte de la descripción 1 */}
                    {partesDescripcion1.map((parte, index) => {
                        if (parte.includes('<b>')) {
                            // Si la parte contiene <b>, se interpreta como negrita
                            return <strong key={index} dangerouslySetInnerHTML={{ __html: parte }} />
                        } else {
                            // Si no, se renderiza normalmente
                            return <span key={index}>{parte}</span>
                        }
                    })}
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-10">
                <Image className="object-cover w-full lg:w-1/2 min-w-0 h-auto" src="/aboutpablo/3.jpg" alt="Pablo Ranea" width={990} height={557} sizes="(min-width: 1024px) 50vw, 100vw" />
                <Image className="object-cover w-full lg:w-1/2 min-w-0 h-auto" src="/aboutpablo/4.jpg" alt="Pablo Ranea" width={990} height={557} sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="flex flex-col lg:flex-row py-10 lg:py-20 lg:justify-between gap-5 lg:gap-10 w-full">
                <div className="uppercase font-extrabold text-xl lg:text-2xl w-full" style={{ lineHeight: 1.2 }}>
                    <p>new york</p>
                    <p>san francisco</p>
                    <p>houston</p>
                    <p>denver</p>
                    <p>lima</p>
                    <p>canadá</p>
                    <p>hong kong</p>
                </div>
                <h2 className="text-base lg:text-lg  text-justify w-full">{description2}</h2>
            </div>
        </div>
    )
}
