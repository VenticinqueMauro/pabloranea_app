'use client';

import Image from 'next/image';
import CountUp, { useInView } from '@/components/ui/CountUp';
import type { Locale } from '@/lib/locales';
import { HOST_FORM_URL } from '@/lib/site';

export default function Section5({ lang }: { lang: Locale }) {
    const [ref, isEnter] = useInView<HTMLDivElement>();

    return (
        <div className="bg-background text-foreground dark px-3 lg:px-20 lg:pt-16  pb-20 min-h-screen">
            <div ref={ref}>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-52 sm:gap-5 lg:gap-10">
                    <div className="relative w-full flex flex-col min-h-full lg:justify-between items-center justify-between lg:items-center h-screen ">
                        <div className="relative">
                            <h2 className="text-[250px] font-medium">
                                <CountUp end={40} active={isEnter} />
                            </h2>
                            <h3 className={`${lang === 'es' ? 'left-10' : 'left-20'} uppercase absolute bottom-8 text-xl`}>{lang === 'es' ? "ciudades recorridas" : "cities visited"}</h3>
                        </div>
                        <div>
                            <div className="grid grid-cols-2 max-w-md">
                                <div className="col-span-2 flex items-center gap-5 min-w-full">
                                    <p className="text-7xl text-white w-[50%] text-end">
                                        <CountUp end={4} active={isEnter} />
                                    </p>
                                    <p className="uppercase w-[50%] text-start">{lang === 'es' ? "países" : "countries"}</p>
                                </div>
                                <div className="col-span-2 flex items-center gap-5 min-w-full">
                                    <p className="text-7xl text-white w-full text-end">
                                        <CountUp end={1500} active={isEnter} />
                                    </p>
                                    <p className="uppercase w-full text-start">{lang === 'es' ? "comensales" : "diners"}</p>
                                </div>
                                <div className="col-span-2 flex items-center gap-5 min-w-full">
                                    <p className="text-7xl text-white w-full text-end">
                                        <CountUp end={50} active={isEnter} />
                                    </p>
                                    <p className="uppercase w-full text-start">{lang === 'es' ? "litros de chimichurri" : "liters of chimichurri"}</p>
                                </div>
                                <div className="col-span-2 flex items-center gap-5 min-w-full">
                                    <p className="text-7xl text-white w-full text-end">
                                        <CountUp end={180} active={isEnter} />
                                    </p>
                                    <p className="uppercase w-full text-start">{lang === 'es' ? "kilos de dulce de leche" : "kilograms of dulce de leche"}</p>
                                </div>
                                <div className="col-span-2 flex items-center gap-5 min-w-full">
                                    <p className="text-7xl text-white w-full text-end">
                                        <CountUp end={1400} active={isEnter} />
                                    </p>
                                    <p className="uppercase w-full text-start">{lang === 'es' ? "botellas de vino" : "wine bottles"}</p>
                                </div>
                                <div className="col-span-2 flex items-center gap-5 min-w-full">
                                    <p className="text-7xl text-white w-full text-end">
                                        <CountUp end={60} active={isEnter} />
                                    </p>
                                    <p className="uppercase w-full text-start">{lang === 'es' ? "pop up dinners al año" : "pop up dinners per year"}</p>
                                </div>
                                <div className="col-span-2 flex items-center gap-5 min-w-full">
                                    <p className="text-5xl w-full text-end text-white ">
                                        {isEnter && (
                                            <span>
                                                <CountUp end={16} active /> {lang === 'es' ? 'a' : 'to'} <CountUp end={25} active />
                                            </span>
                                        )}
                                    </p>
                                    <p className="uppercase w-full text-start">{lang === 'es' ? "comensales promedio por encuentro" : "average diners per gathering"}</p>
                                </div>
                            </div>
                            <a href={HOST_FORM_URL} target="_blank" rel="noopener noreferrer" className="uppercase  text-base text-center lg:text-lg w-fit mx-auto block px-5 py-4 bg-brand-olive  font-bold text-white mt-10">
                                {lang === 'en' ? 'Be a host' : 'convertite en anfitrión'}
                            </a>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-between min-h-full gap-10 lg:gap-28 mt-24 lg:mt-20">
                        <Image className="object-cover w-full h-full" src="/popups/vertical3.jpg" alt="Pop-up dinner" width={900} height={1350} sizes="(min-width: 1024px) 50vw, 100vw" />
                    </div>
                </div>
            </div>
        </div>
    )
}
