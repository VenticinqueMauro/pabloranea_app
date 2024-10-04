'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

export default function Portada() {
    const autoplayRef = useRef(Autoplay({ delay: 2000 })); // 2s delay for other slides
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplayRef.current]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (emblaApi) {
            // Disable autoplay initially and set a custom duration for the first slide
            autoplayRef.current.stop();
            const timer = setTimeout(() => {
                autoplayRef.current.play(); // Start autoplay after 4s for the first slide
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [emblaApi]);

    const handleFirstSlideClick = () => {
        const link = document.createElement('a');
        link.href = '/pdf/mvam_ItinerarioRaneaOK.pdf';
        link.download = 'mvam_ItinerarioRaneaOK.pdf';
        link.click();
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className='h-screen embla'
            ref={emblaRef}
        >
            <div className="embla__container">
                {
                    Array.from({ length: 8 }, (_, index) => {
                        const slideNumber = index;
                        const src = (slideNumber === 4 || slideNumber === 0) && isMobile
                            ? `/portada/slide${slideNumber}-mobile.jpg`
                            : `/portada/slide${slideNumber}.jpg`;


                        return (
                            <div
                                key={`slide${index}`}
                                className="embla__slide"
                                onClick={slideNumber === 0 ? handleFirstSlideClick : undefined}
                            >
                                <Image
                                    src={src}
                                    width={1980}
                                    height={1114}
                                    alt='portada'
                                    className={
                                        slideNumber === 0
                                            ? "object-cover w-full mt-[40px] lg:mt-[120px] max-h-[100vh] max-w-[100vw]"
                                            : "object-cover w-full h-screen sm:h-screen"
                                    }
                                />
                            </div>
                        );
                    })
                }
            </div>
        </motion.div>
    );
}
