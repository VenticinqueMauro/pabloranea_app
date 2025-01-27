'use client';

import { useEffect, useRef } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';

export default function CalendarFront({ dictionary, lang }: any) {
    const globeEl = useRef<GlobeMethods | undefined>(undefined);

    useEffect(() => {
        if (!globeEl.current) return;

        globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 3 }, 0); 
        const controls = globeEl.current.controls();
        if (controls) {
            controls.enableZoom = false;
            controls.enableRotate = true;
        }
    }, []);

    const stays = [
        { startDate: '2024-03-01', endDate: '2024-03-31', location: 'Los Angeles & Palm Springs' },
        { startDate: '2024-04-01', endDate: '2024-04-30', location: 'Florida Tour (Miami, West Palm Beach, Orlando)' },
        { startDate: '2024-05-01', endDate: '2024-05-31', location: 'Houston & San Antonio' },
        { startDate: '2024-05-20', endDate: '2024-07-31', location: 'East Coast NY-DC-NJ' },
        { startDate: '2024-07-15', endDate: '2024-08-31', location: 'Colorado' },
        { startDate: '2024-09-01', endDate: '2024-10-31', location: 'North California' },
        { startDate: '2024-10-01', endDate: '2024-10-15', location: 'Reno, Nevada' },
        { startDate: '2024-11-01', endDate: '2024-11-30', location: 'Tucson & Phoenix' },
    ];

    const { button } = dictionary.calendar;

    const formatDate = (date: string): string => {
        const monthsEN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const monthsES = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

        const parsedDate = new Date(date);
        const month = lang === 'es' ? monthsES[parsedDate.getMonth()] : monthsEN[parsedDate.getMonth()];

        return `${month}`;
    };

    return (
        <section id="calendar" className="flex items-center justify-center flex-col mb-20 px-2 border-white">
            <div className="relative w-[70%] h-[70%] max-w-[600px] max-h-[600px] sm:w-[50%] sm:h-[50%] flex justify-center items-start">
                <Globe
                    ref={globeEl}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    backgroundColor="rgba(0, 0, 0, 0)"
                    width={undefined}
                    height={undefined}
                />
                <p className="absolute w-full top-1/2 lg:top-[60%] left-1/2 transform -translate-x-1/2 text-white text-6xl lg:text-8xl font-bold z-50 pointer-events-none lg:ml-24">
                    tour&#39;25<br /> dates
                </p>
            </div>
            <div>
                <div className="flex flex-col border-t border-gray-400 border-dashed max-w-7xl mx-auto relative z-10 bg-white h-[300px] lg:h-[420px] container-calendar overflow-y-scroll">
                    {stays.map((stay, index) => (
                        <div
                            key={index}
                            className="border-gray-400 border-b border-dashed flex justify-between items-center py-5 hover:bg-gray-100 letterScroll px-3"
                        >
                            <div className="w-full text-start px-1">
                                <p className="font-bold text-base lg:text-xl">
                                    {formatDate(stay.startDate)} - {formatDate(stay.endDate)}
                                </p>
                                <p className="uppercase text-sm lg:text-base text-zinc-500 font-bold">{stay.location}</p>
                            </div>
                            <div className="w-full text-start text-sm lg:text-base px-1 whitespace-pre-line">
                                {lang === 'es'
                                    ? 'Fechas disponibles para Pop-Up Dinners y clases de cocina'
                                    : 'Dates available for Pop-Up Dinners and cooking classes'}
                            </div>
                        </div>
                    ))}
                </div>
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfPg5abINAQ4OkZLFPLVRm3dSJSIEjpjBsUheJS5eOs_O-pWg/viewform"
                    target="_blank"
                    className="text-white px-5 py-2 text-base lg:text-lg bg-[#5E6B45] w-fit block mx-auto mt-10 font-semibold letterScroll"
                >
                    {button}
                </a>
            </div>
        </section>
    );
}
