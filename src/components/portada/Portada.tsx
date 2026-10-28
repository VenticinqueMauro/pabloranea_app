'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useToday } from '@/components/calendar/useToday';
import { upcomingStays } from '@/data/calendar';
import type { Locale } from '@/lib/locales';
import { HOST_FORM_URL } from '@/lib/site';

type Slide = { name: string; src: string; position: string };

// Focal point per image: the same slide is cropped to ~2:1 on desktop and
// 1.25:1 on mobile, so `position` keeps the subject inside both crops.
const slides: Slide[] = [
    { name: '01', src: '/portada/01.jpg', position: 'center 35%' },
    { name: '02', src: '/portada/02.jpg', position: 'center' },
    { name: '03', src: '/portada/03.jpg', position: 'center' },
    { name: '04', src: '/portada/04.jpg', position: 'center' },
    { name: '05', src: '/portada/05.jpg', position: '40% center' },
    { name: '06', src: '/portada/06.jpg', position: 'center' },
    { name: '07', src: '/portada/07.jpg', position: 'center' },
    { name: '08', src: '/portada/08.jpg', position: 'center' },
    { name: '09', src: '/portada/09.jpg', position: 'center' },
    { name: '10', src: '/portada/10.jpg', position: 'center' },
    { name: '11', src: '/portada/11.jpg', position: 'center 25%' },
    { name: '12', src: '/portada/12.jpg', position: 'center' },
    { name: '13', src: '/portada/13.jpg', position: 'center' },
    { name: '14', src: '/portada/14.jpg', position: 'left center' },
    { name: '15', src: '/portada/15.jpg', position: 'center' },
    { name: '16', src: '/portada/16.jpg', position: 'center 35%' },
    { name: '17', src: '/portada/17.jpg', position: 'center 40%' },
];

const T = {
    es: { host: 'Convertite en anfitrión', dates: 'Próximas fechas', carousel: 'Galería de pop-up dinners', goTo: 'Ir a la imagen' },
    en: { host: 'Become a host', dates: 'Tour dates', carousel: 'Pop-up dinners gallery', goTo: 'Go to image' },
};

export default function Portada({ lang, buildDate }: { lang: Locale; buildDate: string }) {
    const t = T[lang];
    // "Tour dates" only makes sense when the calendar has upcoming dates.
    const hasDates = upcomingStays(useToday(buildDate)).length > 0;
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        // Pauses while hovered and resumes on mouse leave.
        [Autoplay({ delay: 5000, playOnInit: false, stopOnMouseEnter: true, stopOnInteraction: false })]
    );
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
        emblaApi.on('select', onSelect);
        // No autoplay for visitors who asked for reduced motion.
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            emblaApi.plugins().autoplay?.play();
        }
        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi]);

    // Sizing is pure CSS (mobile ratio 1679:1344, desktop fills the viewport
    // below the navbar) so the server HTML already has the final layout: no
    // layout shift on hydration.
    return (
        <div
            className="relative w-full embla md:h-[calc(100vh-110px)]"
            role="region"
            aria-roledescription="carousel"
            aria-label={t.carousel}
        >
            <div className="w-full embla__viewport md:h-full" ref={emblaRef}>
                <div className="embla__container md:h-full">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.name}
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`${index + 1} / ${slides.length}`}
                            className="relative w-full embla__slide aspect-[1.25] md:aspect-auto md:h-full"
                        >
                            <Image
                                src={slide.src}
                                alt=""
                                fill
                                sizes="100vw"
                                // First slide is the above-the-fold hero (LCP): preload it
                                // in <head>. The rest stay lazy by default.
                                preload={index === 0}
                                quality={70}
                                className="object-cover"
                                style={{ objectPosition: slide.position }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Calls to action + slide indicators over a soft bottom gradient. */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-linear-to-t from-black/60 to-transparent px-3 pb-3 pt-16 md:px-12 md:pb-10 xl:px-20">
                <div className="pointer-events-auto flex flex-wrap gap-2 md:gap-3">
                    <a
                        href={HOST_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-olive px-3 py-2 text-xs font-bold uppercase text-white transition-colors hover:bg-black md:px-6 md:py-3 md:text-sm"
                    >
                        {t.host}
                    </a>
                    {hasDates && (
                        <a
                            href="#calendar"
                            className="hidden sm:inline-block border border-white px-3 py-2 text-xs font-bold uppercase text-white transition-colors hover:bg-white hover:text-black md:px-6 md:py-3 md:text-sm"
                        >
                            {t.dates}
                        </a>
                    )}
                </div>
                <div className="pointer-events-auto flex gap-1.5 pb-1 md:gap-2">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.name}
                            type="button"
                            onClick={() => emblaApi?.scrollTo(index)}
                            aria-label={`${t.goTo} ${index + 1}`}
                            aria-current={index === selected ? 'true' : undefined}
                            className={`h-1.5 rounded-full transition-all md:h-2 ${index === selected ? 'w-6 bg-white md:w-8' : 'w-1.5 bg-white/50 hover:bg-white/80 md:w-2'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
