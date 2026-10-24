'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { stays, type Stay } from '@/data/calendar';
import type { Dictionary } from '@/lib/i18n';
import { HOST_FORM_URL } from '@/lib/site';

interface CalendarFrontProps {
    dictionary: Dictionary;
    lang: string;
}

export default function CalendarFront({ dictionary, lang }: CalendarFrontProps) {
    const formatDate = (dateString: string) => {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year.slice(-2)}`;
    };

    const formatSpecialDate = (dateString: string) => {
        const date = new Date(dateString + 'T00:00:00');
        const day = date.getDate();
        const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const monthsEs = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
        return lang === 'es' ? `${day} de ${monthsEs[date.getMonth()]}` : `${monthsEn[date.getMonth()]} ${day}`;
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
                <Image src="/worldtitlee.png" alt={dictionary.calendar.title} className="wordlScroll w-[200px] lg:w-[350px]" width={500} height={500} sizes="(min-width: 1024px) 350px, 200px" />
            </div>
            <div>
                {sortedStays.length === 0 ? (
                    <div className="flex flex-col justify-center items-center px-6 py-12 mx-auto max-w-7xl text-center bg-white border-t border-gray-400 border-dashed lg:py-16 relative z-10 letterScroll">
                        <MapPin className="mb-3 w-8 h-8 text-[#5E6B45]" strokeWidth={2.5} />
                        <p className="text-lg font-bold lg:text-2xl text-[#5E6B45]">
                            {lang === 'es' ? 'Próximamente nuevas fechas' : 'New dates coming soon'}
                        </p>
                        <p className="mt-2 max-w-md text-sm font-semibold lg:text-base text-zinc-500">
                            {lang === 'es'
                                ? 'Estamos planificando la próxima gira. Unite a la experiencia para ser el primero en enterarte.'
                                : "We're planning the next tour. Join the experience to be the first to know."}
                        </p>
                    </div>
                ) : (
                <div className="flex flex-col border-t border-gray-400 border-dashed max-w-7xl mx-auto relative z-10 bg-white h-[300px] lg:h-[420px] container-calendar overflow-y-scroll">
                    {sortedStays.map((stay, index) => {
                        if ('special' in stay && stay.special) {
                            return (
                                <div
                                    key={index}
                                    className="flex justify-between items-center px-3 py-5 bg-yellow-50 border-b border-gray-400 border-dashed hover:bg-yellow-100 letterScroll"
                                >
                                    <div className="px-1 w-full text-start">
                                        <p className="text-base font-bold lg:text-xl text-[#5E6B45]">{formatSpecialDate(stay.date)}</p>
                                        <p className="text-sm font-bold uppercase lg:text-base text-zinc-500">{stay.location[lang as 'en' | 'es']}</p>
                                    </div>
                                    <div className="flex flex-col items-start px-1 w-full text-sm whitespace-pre-line text-start lg:text-base lg:items-center">
                                        {stay.link && stay.linkLabel ? (
                                            <a href={stay.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline">{stay.linkLabel[lang as 'en' | 'es']}</a>
                                        ) : stay.description ? (
                                            <p className="font-semibold text-zinc-600">{stay.description[lang as 'en' | 'es']}</p>
                                        ) : null}
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
                )}
                <a
                    href={HOST_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white px-5 py-2 text-base lg:text-lg bg-[#5E6B45] w-fit block mx-auto mt-10 font-semibold letterScroll"
                >
                    {dictionary.calendar.button}
                </a>
            </div>
        </section>
    );
}
