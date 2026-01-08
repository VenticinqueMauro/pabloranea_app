'use client';

import Image from 'next/image';
import { useEffect } from 'react';

interface CalendarFrontProps {
    dictionary: any;
    lang: string;
}

type Stay = {
    startDate: string;
    endDate: string;
    location: {
        en: string;
        es: string;
    };
    special?: false;
};

type SpecialStay = {
    special: true;
    date: string;
    title: {
        en: string;
        es: string;
    };
    link: string;
    linkLabel: {
        en: string;
        es: string;
    };
};

type CalendarItem = Stay | SpecialStay;

type ArchivedStay = Stay;

const stays: CalendarItem[] = [
    {
        startDate: '2026-03-30',
        endDate: '2026-04-13',
        location: {
            en: 'Los Angeles & Palm Springs, USA',
            es: 'Los Ángeles & Palm Springs, EE.UU.'
        }
    },
    {
        startDate: '2026-04-14',
        endDate: '2026-04-27',
        location: {
            en: 'Texas, USA',
            es: 'Texas, EE.UU.'
        }
    },
    {
        startDate: '2026-04-28',
        endDate: '2026-05-18',
        location: {
            en: 'New York, USA',
            es: 'Nueva York, EE.UU.'
        }
    },
    {
        startDate: '2026-05-19',
        endDate: '2026-06-02',
        location: {
            en: 'Denver, USA',
            es: 'Denver, EE.UU.'
        }
    }
];

const archivedStays: ArchivedStay[] = [
    {
        startDate: '2025-03-30',
        endDate: '2025-04-13',
        location: {
            en: 'Los Angeles + Palm Springs, USA',
            es: 'Los Ángeles + Palm Springs, EE.UU.'
        }
    },
    {
        startDate: '2025-04-13',
        endDate: '2025-04-23',
        location: {
            en: 'Miami, USA',
            es: 'Miami, EE.UU.'
        }
    },
    {
        startDate: '2025-04-23',
        endDate: '2025-06-01',
        location: {
            en: 'Houston + San Antonio, USA',
            es: 'Houston + San Antonio, EE.UU.'
        }
    }
];

export default function CalendarFront({ dictionary, lang }: CalendarFrontProps) {
    const formatDate = (dateString: string) => {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year.slice(-2)}`;
    };

    // Filter out past events and sort by date (nearest first)
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of day for accurate comparison

    const sortedStays = [...stays]
        .filter((stay) => {
            if ('special' in stay && stay.special) {
                return new Date(stay.date) >= today;
            } else {
                // For regular stays, check if the end date hasn't passed
                return new Date(stay.endDate) >= today;
            }
        })
        .sort((a, b) => {
            const dateA = 'special' in a && a.special ? new Date(a.date) : new Date(a.startDate);
            const dateB = 'special' in b && b.special ? new Date(b.date) : new Date(b.startDate);
            return dateA.getTime() - dateB.getTime();
        });

    return (
        <section id="calendar" className="flex flex-col justify-center items-center px-2 mb-20 border-white">
            <div className="flex relative flex-col justify-center items-center border-b">
                <Image src="/worldtitlee.png" alt='world' className="wordlScroll hidden lg:block w-[350px]" width={500} height={500} />
                <Image src="/worldtitlee.png" alt='world' className="wordlScroll block lg:hidden w-[200px]" width={500} height={500} />
            </div>
            <div>
                <div className="flex flex-col border-t border-gray-400 border-dashed max-w-7xl mx-auto relative z-10 bg-white h-[300px] lg:h-[420px] container-calendar overflow-y-scroll">
                    {sortedStays.map((stay, index) => {
                        if ('special' in stay && stay.special) {
                            return (
                                <div
                                    key={index}
                                    className="flex justify-between items-center px-3 py-5 bg-yellow-50 border-b border-gray-400 border-dashed hover:bg-yellow-100 letterScroll"
                                >
                                    <div className="px-1 w-full text-start">
                                        <p className="text-base font-bold lg:text-xl text-[#5E6B45]">{lang === 'es' ? '19 de junio' : '19 June'}</p>
                                        <p className="mb-1 text-sm font-bold lg:text-base text-zinc-700">{stay.title[lang as 'en' | 'es']}</p>
                                    </div>
                                    <div className="flex flex-col items-start px-1 w-full text-sm whitespace-pre-line text-start lg:text-base lg:items-center">
                                        <a href={stay.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline">{stay.linkLabel[lang as 'en' | 'es']}</a>
                                    </div>
                                </div>
                            );
                        }
                        const normalStay = stay as Stay;
                        return (
                            <div
                                key={index}
                                className="flex justify-between items-center px-3 py-5 border-b border-gray-400 border-dashed hover:bg-gray-100 letterScroll"
                            >
                                <div className="px-1 w-full text-start">
                                    <p className="text-base font-bold lg:text-xl">
                                        {formatDate(normalStay.startDate)} - {formatDate(normalStay.endDate)}
                                    </p>
                                    <p className="text-sm font-bold uppercase lg:text-base text-zinc-500">{normalStay.location[lang as 'en' | 'es']}</p>
                                </div>
                                <div className="px-1 w-full text-sm whitespace-pre-line text-start lg:text-base">
                                    {lang === 'es'
                                        ? 'Fechas disponibles para Pop-Up Dinners y clases de cocina'
                                        : 'Dates available for Pop-Up Dinners and cooking classes'}
                                </div>
                            </div>
                        );
                    })}
                    {/* Archivados */}
                    {/* {archivedStays.length > 0 && (
                        <div className="pt-6 mt-8 border-t-2 border-gray-300 border-dotted">
                            <p className="mb-2 text-xs font-semibold text-center text-gray-400">{lang === 'es' ? 'Archivados' : 'Archived'}</p>
                            {archivedStays.map((stay, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center px-3 py-3 border-b border-gray-200 hover:bg-gray-50 letterScroll"
                                >
                                    <div className="px-1 w-full text-start">
                                        <p className="text-base font-bold lg:text-lg">
                                            {formatDate(stay.startDate)} - {formatDate(stay.endDate)}
                                        </p>
                                        <p className="text-sm font-bold uppercase lg:text-base text-zinc-400">{stay.location[lang as 'en' | 'es']}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )} */}
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
