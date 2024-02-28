'use client';

import { Image } from '@nextui-org/react';
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

export default function Section5() {
    const [isEnter, setIsEnter] = useState(false);

    return (
        <div className="bg-background text-foreground dark px-3 lg:px-20 lg:pt-16 pt-10 pb-20 min-h-screen">
            <ScrollTrigger onEnter={() => setIsEnter(true)} onExit={() => setIsEnter(false)}>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-52 sm:gap-5 lg:gap-10">
                    <div className="relative w-full flex flex-col min-h-full lg:justify-between items-center justify-between lg:items-center h-screen ">
                        <div className="relative">
                            <h2 className="text-[250px] font-medium">
                                {isEnter && <CountUp start={0} end={40} duration={6} />}
                            </h2>
                            <h3 className="uppercase absolute bottom-8 text-xl left-10">ciudades recorridas</h3>
                        </div>
                        <div>
                            <div className="grid grid-cols-2 max-w-md">
                                <div className="col-span-2 flex items-center gap-5 min-w-full">
                                    <p className="text-7xl text-white w-[50%] text-end">
                                        {isEnter && <CountUp start={0} end={4} duration={6} />}
                                    </p>
                                    <p className="uppercase w-[50%] text-start">paises</p>
                                </div>
                                <div className="col-span-2 flex items-center gap-5 min-w-full">
                                    <p className="text-7xl text-white w-full text-end">
                                        {isEnter && <CountUp start={0} end={1500} decimals={0} separator="" duration={6} />}
                                    </p>
                                    <p className="uppercase w-full text-start">comensales</p>
                                </div>
                                <div className="col-span-2 flex items-center gap-5 min-w-full">
                                    <p className="text-7xl text-white w-full text-end">
                                        {isEnter && <CountUp start={0} end={50} duration={6} />}
                                    </p>
                                    <p className="uppercase w-full text-start">litros de chimichurri</p>
                                </div>
                                <div className="col-span-2 flex items-center gap-5 min-w-full">
                                    <p className="text-7xl text-white w-full text-end">
                                        {isEnter && <CountUp start={0} end={180} duration={6} />}
                                    </p>
                                    <p className="uppercase w-full text-start">kilos de dulce de leche</p>
                                </div>
                                <div className="col-span-2 flex items-center gap-5 min-w-full">
                                    <p className="text-7xl text-white w-full text-end">
                                        {isEnter && <CountUp start={0} end={1400} decimals={0} separator="" duration={6} />}
                                    </p>
                                    <p className="uppercase w-full text-start">botellas de vino</p>
                                </div>
                                <div className="col-span-2 flex items-center gap-5 min-w-full">
                                    <p className="text-7xl text-white w-full text-end">
                                        {isEnter && <CountUp start={0} end={60} decimals={0} separator="" duration={6} />}
                                    </p>
                                    <p className="uppercase w-full text-start">pop up dinners al año</p>
                                </div>
                                <div className="col-span-2 flex items-center gap-5 min-w-full">
                                    <p className="text-5xl w-full text-end text-white ">
                                        {isEnter && (
                                            <span>
                                                <CountUp start={0} end={16} duration={6} /> a <CountUp start={0} end={25} duration={6} />
                                            </span>
                                        )}
                                    </p>
                                    <p className="uppercase w-full text-start">comensales promedio por encuentro</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-between min-h-full gap-10 lg:gap-28">
                        <Image radius="none" className="object-cover w-full h-full" src="/popups/vertical3.jpg" alt="popups dinners" width={900} height={1350} />
                    </div>
                </div>
            </ScrollTrigger >
        </div >
    )

}
