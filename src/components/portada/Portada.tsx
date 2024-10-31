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
            className="embla"
        >
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {Array.from({ length: 8 }, (_, index) => {
                        const slideNumber = index;
                        const src =
                            (slideNumber === 4 || slideNumber === 0) && isMobile
                                ? `/portada/slide${slideNumber}-mobile.jpg`
                                : `/portada/slide${slideNumber}.jpg`;
                        return (
                            <div
                                key={`slide${index}`}
                                className="embla__slide"
                                onClick={slideNumber === 0 ? handleFirstSlideClick : undefined}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={src}
                                    alt={`Slide ${slideNumber}`}
                                    loading="lazy"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}
