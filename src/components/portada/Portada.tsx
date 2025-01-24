'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Portada({ lang }: { lang: string }) {
    const autoplayRef = useRef(Autoplay({ delay: 2000 }));
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [autoplayRef.current]
    );
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial state

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (emblaApi) {
            autoplayRef.current.stop();
            const timer = setTimeout(() => {
                autoplayRef.current.play();
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [emblaApi]);

    const handleFirstSlideClick = () => {
        window.location.href = `/${lang}/travelmendoza`;
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="embla w-full relative"
        >
            <div className="embla__viewport w-full" ref={emblaRef}>
                <div className="embla__container">
                    {Array.from({ length: 8 }, (_, index) => {
                        const slideNumber = index + 1;
                        const src = isMobile 
                            ? `/portada/mobile/${slideNumber}.png`
                            : `/portada/${slideNumber}.jpg`;
                        return (
                            <div
                                key={`slide${index}`}
                                className="embla__slide relative w-full"
                                style={{ 
                                    paddingBottom: isMobile 
                                        ? 'calc(100% / 1.25)' // Mobile ratio 1679:1344
                                        : 'calc(100% / 2.33)' // Desktop ratio 3124:1344
                                }}
                                onClick={slideNumber === 1 ? handleFirstSlideClick : undefined}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={src}
                                    alt={`Slide ${slideNumber}`}
                                    loading="lazy"
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}
