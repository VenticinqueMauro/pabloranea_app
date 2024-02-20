'use client';

import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

export default function Section5() {
    const [isEnter, setIsEnter] = useState(false);

    return (
        <div className="bg-background text-foreground dark px-20 pt-16 pb-20 min-h-screen">
            <ScrollTrigger onEnter={() => setIsEnter(true)} onExit={() => setIsEnter(false)}>
                <div className="flex items-center gap-10">
                    <div className="relative w-full flex flex-col justify-between items-start h-screen">
                        <div className="relative">
                            <h2 className="text-[250px] font-medium">
                                {isEnter && <CountUp start={0} end={40} duration={2.75} />}
                            </h2>
                            <h3 className="uppercase absolute bottom-8 text-xl left-10">ciudades recorridas</h3>
                        </div>
                        <div className="grid grid-cols-2 max-w-md">
                            <div className="col-span-2 flex items-center gap-5 min-w-full">
                                <p className="text-7xl text-white w-[50%] text-end">
                                    {isEnter && <CountUp start={0} end={4} duration={2.75} />}
                                </p>
                                <p className="uppercase w-[50%] text-start">paises</p>
                            </div>
                            <div className="col-span-2 flex items-center gap-5 min-w-full">
                                <p className="text-7xl text-white w-full text-end">
                                    {isEnter && <CountUp start={0} end={1500} decimals={0} separator="" duration={2.75} />}
                                </p>
                                <p className="uppercase w-full text-start">comensales</p>
                            </div>
                            <div className="col-span-2 flex items-center gap-5 min-w-full">
                                <p className="text-7xl text-white w-full text-end">
                                    {isEnter && <CountUp start={0} end={50} duration={2.75} />}
                                </p>
                                <p className="uppercase w-full text-start">litros de chimichurri</p>
                            </div>
                            <div className="col-span-2 flex items-center gap-5 min-w-full">
                                <p className="text-7xl text-white w-full text-end">
                                    {isEnter && <CountUp start={0} end={180} duration={2.75} />}
                                </p>
                                <p className="uppercase w-full text-start">kilos de dulce de leche</p>
                            </div>
                            <div className="col-span-2 flex items-center gap-5 min-w-full">
                                <p className="text-7xl text-white w-full text-end">
                                    {isEnter && <CountUp start={0} end={1400} decimals={0} separator="" duration={2.75} />}
                                </p>
                                <p className="uppercase w-full text-start">botellas de vino</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-between min-h-full gap-28">
                        <div className="bg-gray-400 h-[700px] w-full block"></div>
                        <div>
                            <div className="flex items-center gap-5 justify-start w-fit max-w-lg">
                                <p className="text-7xl text-white ">
                                    {isEnter && <CountUp start={0} end={60} duration={2.75} />}
                                </p>
                                <p className="uppercase max-w-sm ">60 pop up dinners al año.</p>
                            </div>
                            <div className="flex items-center gap-5 justify-start w-fit max-w-lg">
                                <p className="text-5xl text-white ">
                                    {isEnter && (
                                        <span>
                                            <CountUp start={0} end={16} duration={2.75} /> a <CountUp start={0} end={25} duration={2.75} />
                                        </span>
                                    )}
                                </p>
                                <p className="uppercase max-w-sm ">comensales promedio por encuentro.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollTrigger >
        </div >
    )

}
