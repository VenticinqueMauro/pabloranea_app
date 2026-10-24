'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { Locale } from '@/lib/locales';
import { HOST_FORM_URL } from '@/lib/site';

type Slide = { name: string; src: string; position: string };

const slides: Slide[] = [
    { name: '1a', src: '/portada/1a.jpg', position: 'center' },
    { name: '2a', src: '/portada/2a.jpg', position: 'center' },
    { name: '3a', src: '/portada/3a.jpg', position: 'center 100%' },
    { name: '4a', src: '/portada/4a.jpg', position: 'center 100%' },
    { name: '5a', src: '/portada/5a.jpg', position: 'left center' },
    { name: '6a', src: '/portada/6a.jpg', position: 'center' },
    { name: '7a', src: '/portada/7a.jpg', position: 'center' },
];

const T = {
    es: { host: 'Convertite en anfitrión', dates: 'Próximas fechas', carousel: 'Galería de pop-up dinners', goTo: 'Ir a la imagen' },
    en: { host: 'Become a host', dates: 'Tour dates', carousel: 'Pop-up dinners gallery', goTo: 'Go to image' },
};

export default function Portada({ lang }: { lang: Locale }) {
    const t = T[lang];
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
                    <a
                        href="#calendar"
                        className="hidden sm:inline-block border border-white px-3 py-2 text-xs font-bold uppercase text-white transition-colors hover:bg-white hover:text-black md:px-6 md:py-3 md:text-sm"
                    >
                        {t.dates}
                    </a>
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
