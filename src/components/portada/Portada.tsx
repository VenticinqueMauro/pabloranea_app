'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useEffect } from 'react';
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

export default function Portada({ lang }: { lang: string }) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 2000, playOnInit: false })]
    );

    // Hold the first slide for 5s, then start autoplay.
    useEffect(() => {
        const autoplay = emblaApi?.plugins().autoplay;
        if (!autoplay) return;
        const timer = setTimeout(() => autoplay.play(), 5000);
        return () => clearTimeout(timer);
    }, [emblaApi]);

    const linkLabel = lang === 'es' ? 'Convertite en anfitrión de un pop-up dinner' : 'Become a pop-up dinner host';

    // Sizing is pure CSS (mobile ratio 1679:1344, desktop fills the viewport
    // below the navbar) so the server HTML already has the final layout: no
    // layout shift on hydration.
    return (
        <div
            className="relative w-full embla md:h-[calc(100vh-110px)]"
            aria-roledescription="carousel"
        >
            <div className="w-full embla__viewport md:h-full" ref={emblaRef}>
                <div className="embla__container md:h-full">
                    {slides.map((slide, index) => (
                        <a
                            key={slide.name}
                            href={HOST_FORM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${linkLabel} (${index + 1}/${slides.length})`}
                            className="relative block w-full embla__slide aspect-[1.25] md:aspect-auto md:h-full"
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
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
