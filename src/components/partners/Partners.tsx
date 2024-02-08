/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

export default function Partners({ dictionary }: any) {

    const { title1, title2, description, button } = dictionary.partners;

    return (
        <section className="h-screen relative overflow-x-clip">
            {/* <div className="h-full bg-gray-700 flex justify-center items-center imgScroll"></div> */}
            <Image
                src='/partners/partners.jpg'
                width={1980}
                height={1114}
                alt='partners'
                className='w-full'
            />
            <div className="absolute top-0 left-0 px-6  lg:px-20 lg:py-10 max-w-md text-justify text-white scroll-parallax">
                <h2 className="text-6xl lg:text-7xl font-bold text-shadow -tracking-widest">{title1}<br />{title2}</h2>
                <h3 className="text-sm md:text-base pt-5">{description}</h3>
                <button className="flex justify-between w-fit gap-10 font-bold pt-10 showAnimate">
                    <span>
                        {`>>>>>>`}
                    </span>
                    {button}
                </button>
            </div>
        </section>
    )
}
