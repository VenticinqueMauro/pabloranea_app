'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

export default function Portada() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000 })]);
    const [isMobile, setIsMobile] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches);
        };

        window.addEventListener('resize', handleResize);

        // Initial check
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            className='h-screen embla '
            ref={emblaRef}
        >
            <div className="embla__container">
                {
                    Array.from({ length: 7 }, (_, index) => {
                        const slideNumber = index + 1;
                        const src = slideNumber === 4 && isMobile
                            ? `/portada/slide${slideNumber}-mobile.jpg`
                            : `/portada/slide${slideNumber}.jpg`;

                        return (
                            <div key={`slide${index}`} className="embla__slide">
                                <Image
                                    src={src}
                                    width={1980}
                                    height={1114}
                                    alt='portada'
                                    className="object-cover  w-full h-screen sm:h-screen"
                                />
                            </div>
                        );
                    })
                }
            </div>
        </motion.div>
    );
}
