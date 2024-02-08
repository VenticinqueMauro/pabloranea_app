'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Portada() {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            className='h-screen embla'
            ref={emblaRef}
        >
            <div className="embla__container">
                {
                    Array.from({ length: 5 }, (_, index) => (
                        <div key={`slide${index}`} className="embla__slide">
                            <Image
                                src={`/portada/slide${index + 1}.jpg`}
                                width={1980}
                                height={1114}
                                alt='portada'
                                className="object-cover w-full h-screen sm:h-screen"
                            />
                        </div>
                    ))
                }
            </div>
        </motion.div>
    )
}
