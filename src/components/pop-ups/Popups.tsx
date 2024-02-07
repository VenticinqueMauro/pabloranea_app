/* eslint-disable @next/next/no-img-element */

import { ArrowDown } from "lucide-react";


export default async function Popups({ dictionary }: any) {

    const { title1, title2, button } = dictionary.popups;

    return (
        <section className="relative overflow-x-clip ">
            {/* <div className="h-full bg-gray-700 flex justify-center items-center imgScroll"></div> */}
            <div className="bg-black text-white">
                <img
                    src="/popups/popups.jpg"
                    className="object-contain w-full imgScroll pt-6"
                    alt="pop-ups"
                    style={{ maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.5), #000000cc)' }}
                />
                <div className="position absolute bottom-0 left-0 w-full bg-black py-10">
                    <div className="text-8xl lg:px-40 mx-auto text-white font-bold text-justify leading-tight">
                        <div className="h-20 w-[80%] bg-white inline-block lg:mr-28 "></div>
                        más de 50 litros de chimichurri, 180 kilos de dulce de leche y 1400 botellas de vino
                        <div className="absolute bottom-0 right-0 h-32 w-[60%] flex items-center gap-5 bg-white justify-end lg:ml-6 text-black font-semibold text-end text-6xl px-6 border-white border-8">the 2024 tour dates
                            <div className="flex items-end gap-2">
                                <ArrowDown className="bg-black text-white rounded-full p-1" size={40} />
                                <ArrowDown className="bg-black text-white rounded-full p-1" size={40} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-0 px-6  lg:px-20 lg:py-16 max-w-md text-justify text-white scroll-parallax">
                <h2 className="text-6xl lg:text-8xl font-bold text-shadow -tracking-widest">{title1}<br />{title2}</h2>
                <h3 className="text-sm md:text-base pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta illo alias impedit corporis quod cupiditate excepturi eveniet eaque, asperiores quidem illum quae ratione expedita voluptatem nihil molestiae laudantium inventore pariatur ipsum assumenda rem voluptates aliquam? Libero amet nihil iusto, cumque, quidem a aspernatur tempora ratione voluptatibus assumenda debitis et ducimus?</h3>
                <button className="flex justify-between font-bold pt-10 showAnimate w-fit gap-10">
                    <span>
                        {`>>>>>>`}
                    </span>
                    {button}
                </button>
            </div>
        </section>
    )
}
