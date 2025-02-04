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

    const handleClick = (imageName: string) => {
        if (imageName !== '0') {
            window.open(
                'https://docs.google.com/forms/d/e/1FAIpQLSfPg5abINAQ4OkZLFPLVRm3dSJSIEjpjBsUheJS5eOs_O-pWg/viewform',
                '_blank'
            );
        }
    };

    // 📌 Lógica de imágenes en desktop
    const desktopImageOrder = [
        '1a', '1', '2a', '2', '3a', '3', '4a', '4',
        '5a', '5', '6a', '6', '7a', '7', '8' // Sin "8a"
    ];

    // 📌 Lógica de imágenes en mobile (0.jpg y 1-8.png)
    const mobileImageOrder = Array.from({ length: 9 }, (_, i) => `${i}`);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="relative w-full embla"
        >
            <div className="w-full embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {(isMobile ? mobileImageOrder : desktopImageOrder).map((name, index) => {
                        const src = isMobile
                            ? `/portada/mobile/${name}.${name === '0' ? 'jpg' : 'png'}`  // 0.jpg y el resto .png
                            : `/portada/${name}.jpg`;       // Desktop mantiene la lógica actual

                        return (
                            <div
                                key={`slide${index}`}
                                className="relative w-full cursor-pointer embla__slide"
                                style={{
                                    paddingBottom: isMobile
                                        ? 'calc(100% / 1.25)' // Mobile ratio 1679:1344
                                        : 'calc(100% / 2.33)' // Desktop ratio 3124:1344
                                }}
                                onClick={() => (!isMobile || name !== '0') && handleClick(name)}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={src}
                                    alt={`Slide ${name}`}
                                    loading="lazy"
                                    className="object-cover absolute top-0 left-0 w-full h-full"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}
