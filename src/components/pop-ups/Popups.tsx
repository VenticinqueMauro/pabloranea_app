/* eslint-disable @next/next/no-img-element */

import { ArrowDown } from "lucide-react";


export default async function Popups({ dictionary, lang }: any) {

    const { title1, title2, description, button } = dictionary.popups;

    return (
        <section className="min-h-screen relative overflow-x-clip">
            <div className="bg-black">
                <img
                    src="/popups/popups.jpg"
                    className="object-cover w-full h-screen sm:h-screen"
                    alt="pop-ups"
                    style={{
                        maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.5), #000000cc)'
                    }}
                />
            </div>
            <div className="absolute bottom-28 md:top-0 left-0 px-6  lg:px-20 lg:py-16 max-w-lg text-start text-white scroll-parallax" >
                <h2 className={`${lang === 'es' ? "lg:text-7xl" : "lg:text-6xl"} text-6xl font-bold text-shadow -tracking-[4px] lg:-tracking-[5px]`} style={{lineHeight: 0.9}}>{title1}<br />{title2}</h2>
                <h3 className="text-sm w-full md:w-fit md:text-base pt-5 text-start" style={{lineHeight: 1.2}}>{description}</h3>
                <a href={`/${lang}/popup`} className="flex justify-between font-bold pt-10 w-fit gap-10">
                    <span>
                        {`>>>>>>`}
                    </span>
                    {button}
                </a>
            </div>
        </section>
    )
}
