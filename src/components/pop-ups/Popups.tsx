/* eslint-disable @next/next/no-img-element */

import { ArrowDown } from "lucide-react";


export default async function Popups({ dictionary }: any) {

    const { title1, title2, button } = dictionary.popups;

    return (
        <section className="relative overflow-x-clip imgScroll">
            {/* <div className="h-full bg-gray-700 flex justify-center items-center imgScroll"></div> */}
            <div className="flex bg-black text-white ">
                <img
                    src="/popups/popups.jpg"
                    className="object-contain"
                    alt="pop-ups"
                    style={{ maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), #000000cc)' }}
                    />
                <div className="flex items-center px-10 relative">
                    <p className="text-9xl text-white font-bold text-justify">
                        <span className="h-20 w-[76%] bg-white inline-block lg:mr-10"></span>
                        más de 50 litros de chimichurri, 180 kilos de dulce de leche y 1400 botellas de vino
                        <span className="w-[70%] absolute bottom-0 right-0 h-32 flex items-center gap-5 bg-white justify-end lg:ml-6 text-black font-semibold text-end text-6xl px-6">the 2024 tour dates
                            <div className="flex items-end gap-2">
                                <ArrowDown className="bg-black text-white rounded-full p-1" size={40} />
                                <ArrowDown className="bg-black text-white rounded-full p-1" size={40} />
                            </div>
                        </span>
                    </p>
                </div>
            </div>
            <div className="absolute top-0 left-0 px-6  lg:px-20 lg:py-16 max-w-md text-justify text-white scroll-parallax">
                <h2 className="text-6xl lg:text-8xl font-bold text-shadow -tracking-widest">{title1}<br />{title2}</h2>
                <h3 className="text-sm md:text-base pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta illo alias impedit corporis quod cupiditate excepturi eveniet eaque, asperiores quidem illum quae ratione expedita voluptatem nihil molestiae laudantium inventore pariatur ipsum assumenda rem voluptates aliquam? Libero amet nihil iusto, cumque, quidem a aspernatur tempora ratione voluptatibus assumenda debitis et ducimus?</h3>
                <button className="flex justify-between w-full pt-10 showAnimate">
                    <span>
                        {`>>>>>>`}
                    </span>
                    {button}
                </button>
            </div>
        </section>
    )
}
