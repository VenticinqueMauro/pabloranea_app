import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/locales";

export default function Section3({ dictionary, lang }: { lang: Locale, dictionary: Dictionary }) {

    const { title, title2, description, description2, button } = dictionary.aboutpablo.page.section3;

    return (
        <div >
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between px-3 lg:px-20 py-16 bg-background text-foreground dark">
                <h2 className="uppercase text-xl lg:text-2xl font-bold w-full ">{title}</h2>
                <h3 className="text-base lg:text-lg text-justify w-full" style={{ lineHeight: 1.2 }}>{description}</h3>
            </div>
            {/* <SliderPress /> */}
            <div className="flex justify-center bg-black">
                <Image className="object-cover w-full h-full" src="/aboutpablo/pablo3.jpg" alt="Pablo Ranea" width={1365} height={888} sizes="100vw" />
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-0 px-3 lg:px-20 py-16 bg-background text-foreground dark">
                <h2 className="uppercase text-2xl font-bold w-full col-span-12 lg:col-span-6">{title2}</h2>
                <div className="w-full space-y-10">
                    <h3 className="text-base lg:text-lg text-justify" style={{ lineHeight: 1.2 }}>{description2}</h3>
                    <a href={`/${lang}#classes`} className="uppercase text-base lg:text-lg w-full lg:w-fit lg:ms-auto block text-center px-5 py-4 bg-brand-olive font-bold">
                        {button}
                    </a>
                </div>
            </div>
        </div>
    )
}
