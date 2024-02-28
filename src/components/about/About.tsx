import { Lang } from "@/types/lang.type";
import Link from "next/link";

interface Props{
    dictionary: any,
    lang: Lang | string,
}

export default function About({ dictionary, lang }: Props) {

    const { title, description, button } = dictionary.aboutpablo;

    return (
        <section id='about' className="h-screen flex flex-col justify-center scroll-reveal mt-10 bg-black text-white pt-10 ">
            <h2 className="text-5xl lg:text-9xl font-bold text-center -tracking-widest lg:-tracking-[10px] letterScroll">{title}</h2>
            <div className="px-6 lg:px-0 text-justify pt-10 pb-5 lg:py-10 max-w-7xl mx-auto">
                <p className="font-light text-start lg:text-justify text-base lg:text-2xl h-full light">
                    <span>
                        {description}
                    </span>
                    <Link href={`/${lang}/about`} className="flex justify-between gap-10 pt-10 text-base lg:text-lg  w-fit font-bold ms-auto">
                        <span>
                            {`>>>>>>`}
                        </span>
                        {button}
                    </Link>
                </p>
            </div>
        </section>
    )
}
