'use client';

import Image from 'next/image';
import { useEffect } from 'react';

interface CalendarFrontProps {
    dictionary: any;
    lang: string;
}

const stays = [
    { startDate: '2025-03-30', endDate: '2025-04-13', location: 'Los Angeles & Palm Springs, USA' },
    { startDate: '2025-04-13', endDate: '2025-04-23', location: 'Miami, USA' },
    { startDate: '2025-04-23', endDate: '2025-06-01', location: 'Houston & San Antonio, USA' },
    { startDate: '2025-06-01', endDate: '2025-06-08', location: 'Washington DC, USA' },
    { startDate: '2025-06-08', endDate: '2025-07-12', location: 'New York, USA' },
    { startDate: '2025-07-12', endDate: '2025-07-27', location: 'Denver & Colorado Springs, USA' },
    { startDate: '2025-07-28', endDate: '2025-09-15', location: 'Mendoza & Buenos Aires, ARG' },
    { startDate: '2025-09-15', endDate: '2025-10-19', location: 'Northern California, USA' },
    { startDate: '2025-10-20', endDate: '2025-11-01', location: 'Los Angeles, USA' },
    { startDate: '2025-11-02', endDate: '2025-11-09', location: 'Tucson, USA' },
    { startDate: '2025-11-10', endDate: '2025-11-17', location: 'Lima, PER' },
];

export default function CalendarFront({ dictionary, lang }: CalendarFrontProps) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
        });
    };

    return (
        <section id="calendar" className="flex flex-col justify-center items-center px-2 mb-20 border-white">
            <div className="flex relative flex-col justify-center items-center border-b">
                <Image src="/worldtitle.png" alt='world' className="wordlScroll hidden lg:block w-[350px]" width={500} height={500} />
                <Image src="/worldtitle.png" alt='world' className="wordlScroll block lg:hidden w-[200px]" width={500} height={500} />
            </div>
            <div>
                <div className="flex flex-col border-t border-gray-400 border-dashed max-w-7xl mx-auto relative z-10 bg-white h-[300px] lg:h-[420px] container-calendar overflow-y-scroll">
                    {stays.map((stay, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center px-3 py-5 border-b border-gray-400 border-dashed hover:bg-gray-100 letterScroll"
                        >
                            <div className="px-1 w-full text-start">
                                <p className="text-base font-bold lg:text-xl">
                                    {formatDate(stay.startDate)} - {formatDate(stay.endDate)}
                                </p>
                                <p className="text-sm font-bold uppercase lg:text-base text-zinc-500">{stay.location}</p>
                            </div>
                            <div className="px-1 w-full text-sm whitespace-pre-line text-start lg:text-base">
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
                    {dictionary.calendar.button}
                </a>
            </div>
        </section>
    );
}
