'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SliderPopups() {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 2000 })])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            className='embla col-span-12'
            ref={emblaRef}
        >
            <div className="embla__container">
                {
                    Array.from({ length: 6 }, (_, index) => (
                        <div key={`slide${index}`} className="embla__slide">
                            <Image
                                src={`/popups/${index + 1}.jpg`}
                                width={1600}
                                height={840}
                                alt='portada'
                                className="w-full"
                            />
                        </div>
                    ))
                }
            </div>
        </motion.div>
    )
}
