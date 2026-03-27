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

    const EVENTBRITE_LINK = 'https://www.eventbrite.com/e/a-latin-soul-pop-up-dinner-with-argentine-wine-in-west-village-nyc-tickets-1984729720020?aff=ebdssbdestsearch';
    const GOOGLE_FORM_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSfPg5abINAQ4OkZLFPLVRm3dSJSIEjpjBsUheJS5eOs_O-pWg/viewform';

    const handleClick = (imageName: string) => {
        if (imageName === 'latin-soul') {
            window.open(EVENTBRITE_LINK, '_blank');
        } else {
            window.open(GOOGLE_FORM_LINK, '_blank');
        }
    };

    type Slide = { name: string; desktopSrc: string; mobileSrc: string };

    const slides: Slide[] = [
        { name: 'latin-soul', desktopSrc: '/portada/latin-soul-desktop.jpg', mobileSrc: '/portada/latin-soul-mobile.jpg' },
        { name: '1a', desktopSrc: '/portada/1a.jpg', mobileSrc: '/portada/1a.jpg' },
        { name: '2a', desktopSrc: '/portada/2a.jpg', mobileSrc: '/portada/2a.jpg' },
        { name: '3a', desktopSrc: '/portada/3a.jpg', mobileSrc: '/portada/3a.jpg' },
        { name: '4a', desktopSrc: '/portada/4a.jpg', mobileSrc: '/portada/4a.jpg' },
        { name: '5a', desktopSrc: '/portada/5a.jpg', mobileSrc: '/portada/5a.jpg' },
        { name: '6a', desktopSrc: '/portada/6a.jpg', mobileSrc: '/portada/6a.jpg' },
        { name: '7a', desktopSrc: '/portada/7a.jpg', mobileSrc: '/portada/7a.jpg' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="relative w-full embla"
        >
            <div className="w-full embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => {
                        const src = isMobile ? slide.mobileSrc : slide.desktopSrc;

                        return (
                            <div
                                key={`slide${index}`}
                                className="relative w-full cursor-pointer embla__slide"
                                style={{
                                    paddingBottom: isMobile
                                        ? 'calc(100% / 1.25)' // Mobile ratio 1679:1344
                                        : 'calc(100% / 1.78)' // Desktop ratio 1920:1080
                                }}
                                onClick={() => handleClick(slide.name)}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={src}
                                    alt={`Slide ${slide.name}`}
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
