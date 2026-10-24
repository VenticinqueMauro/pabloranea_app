'use client';

import Image from 'next/image';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { useSyncExternalStore } from 'react';
import { stays, type CalendarItem, type SpecialStay } from '@/data/calendar';
import type { Dictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/locales';
import { HOST_FORM_URL } from '@/lib/site';

interface CalendarFrontProps {
    dictionary: Dictionary;
    lang: Locale;
    // Date the page was prerendered (YYYY-MM-DD). Used for the server render
    // and hydration, then swapped for the visitor's local date.
    buildDate: string;
}

const isEvent = (item: CalendarItem): item is SpecialStay => item.special === true;
const startOf = (item: CalendarItem) => (isEvent(item) ? item.date : item.startDate);
const endOf = (item: CalendarItem) => (isEvent(item) ? item.date : item.endDate);

// Local calendar date as YYYY-MM-DD. Dates are compared as strings: parsing
// "2026-04-15" with new Date() would read it as UTC and drop an event on its
// own day in the Americas.
const localToday = () => new Date().toLocaleDateString('en-CA');
const noopSubscribe = () => () => {};

const MONTHS = {
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
};

const T = {
    es: {
        next: 'Próxima fecha',
        available: 'Fechas disponibles para Pop-Up Dinners y clases de cocina',
        book: 'Reservá tu fecha',
        emptyTitle: 'Próximamente nuevas fechas',
        emptyText: 'Estamos planificando la próxima gira. Unite a la experiencia para ser el primero en enterarte.',
    },
    en: {
        next: 'Next date',
        available: 'Dates available for Pop-Up Dinners and cooking classes',
        book: 'Book your date',
        emptyTitle: 'New dates coming soon',
        emptyText: "We're planning the next tour. Join the experience to be the first to know.",
    },
};

export default function CalendarFront({ dictionary, lang, buildDate }: CalendarFrontProps) {
    const today = useSyncExternalStore(noopSubscribe, localToday, () => buildDate);
    const t = T[lang];

    const formatDate = (iso: string) => {
        const [year, month, day] = iso.split('-');
        return `${day}/${month}/${year.slice(-2)}`;
    };

    const formatSpecialDate = (iso: string) => {
        const [, month, day] = iso.split('-').map(Number);
        return lang === 'es' ? `${day} de ${MONTHS.es[month - 1]}` : `${MONTHS.en[month - 1]} ${day}`;
    };

    const upcoming = stays
        .filter((item) => endOf(item) >= today)
        .sort((a, b) => startOf(a).localeCompare(startOf(b)));

    return (
        <section id="calendar" className="flex flex-col justify-center items-center px-2 mb-20 border-white">
            <div className="flex relative flex-col justify-center items-center border-b">
                <Image src="/worldtitlee.png" alt={dictionary.calendar.title} className="wordlScroll w-[200px] lg:w-[350px]" width={500} height={500} sizes="(min-width: 1024px) 350px, 200px" />
            </div>
            <div className="w-full max-w-7xl">
                {upcoming.length === 0 ? (
                    <div className="flex flex-col justify-center items-center px-6 py-12 mx-auto text-center bg-white border-t border-gray-400 border-dashed lg:py-16 relative z-10 letterScroll">
                        <MapPin className="mb-3 w-8 h-8 text-brand-olive" strokeWidth={2.5} />
                        <p className="text-lg font-bold lg:text-2xl text-brand-olive">{t.emptyTitle}</p>
                        <p className="mt-2 max-w-md text-sm font-semibold lg:text-base text-zinc-500">{t.emptyText}</p>
                    </div>
                ) : (
                    <ol className="flex flex-col border-t border-gray-400 border-dashed relative z-10 bg-white max-h-[360px] lg:max-h-[460px] container-calendar overflow-y-auto">
                        {upcoming.map((item, index) => {
                            const isNext = index === 0;
                            const event = isEvent(item);
                            return (
                                <li
                                    key={`${startOf(item)}-${item.location.en}`}
                                    className={`${event ? 'bg-yellow-50 hover:bg-yellow-100' : 'hover:bg-gray-100'} ${isNext ? 'border-l-4 border-l-brand-olive [border-left-style:solid]' : ''} flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center px-3 py-5 border-b border-gray-400 border-dashed letterScroll`}
                                >
                                    <div className="px-1 w-full text-start">
                                        {isNext && (
                                            <span className="mb-1 inline-block bg-brand-olive px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                                                {t.next}
                                            </span>
                                        )}
                                        <p className={`text-base font-bold lg:text-xl ${event ? 'text-brand-olive' : ''}`}>
                                            {event ? formatSpecialDate(item.date) : `${formatDate(item.startDate)} - ${formatDate(item.endDate)}`}
                                        </p>
                                        <p className="text-sm font-bold uppercase lg:text-base text-zinc-500">{item.location[lang]}</p>
                                    </div>
                                    <div className="flex flex-col items-start gap-2 px-1 w-full text-sm whitespace-pre-line text-start lg:text-base">
                                        {event ? (
                                            <>
                                                {item.description && <p className="font-semibold text-zinc-600">{item.description[lang]}</p>}
                                                {item.link && item.linkLabel && (
                                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-brand-olive px-3 py-1.5 text-sm font-bold uppercase text-white hover:bg-black transition-colors">
                                                        {item.linkLabel[lang]} <ArrowUpRight aria-hidden className="size-4" />
                                                    </a>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                <p>{t.available}</p>
                                                <a href={HOST_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 border border-black px-3 py-1.5 text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors">
                                                    {t.book} <ArrowUpRight aria-hidden className="size-4" />
                                                </a>
                                            </>
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                )}
                <a
                    href={HOST_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white px-5 py-2 text-base lg:text-lg bg-brand-olive w-fit block mx-auto mt-10 font-semibold letterScroll hover:bg-black transition-colors"
                >
                    {dictionary.calendar.button}
                </a>
            </div>
        </section>
    );
}
