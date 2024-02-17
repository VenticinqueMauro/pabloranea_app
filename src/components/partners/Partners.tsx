/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

export default function Partners({ dictionary }: any) {

    const { title1, title2, description, button } = dictionary.partners;

    return (
        <section className="min-h-screen relative overflow-x-clip  ">
            <div className={`imageContainer`}>
                <div className={`imageOverlay-partners`} />
                <div className={`contentContainer absolute top-0 left-0 px-6  lg:px-20 lg:py-10 max-w-lg text-justify text-white scroll-parallax`}>
                    <h2 className="text-6xl lg:text-7xl font-bold text-shadow -tracking-[3px] lg:-tracking-[4px]" style={{ lineHeight: 0.9 }}>{title1}<br />{title2}</h2>
                    <h3 className="text-sm md:text-base pt-5" style={{lineHeight: 1.2}}>{description}</h3>
                    <button className="flex justify-between w-fit gap-10 font-bold pt-10">
                        <span>
                            {`>>>>>>`}
                        </span>
                        {button}
                    </button>
                </div>
            </div>
        </section>
    )
}
