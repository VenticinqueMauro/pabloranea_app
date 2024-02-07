'use client';
import { motion } from 'framer-motion'
import Image from 'next/image';

export default function Portada() {
    return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.3 } }}
            >
                <Image
                    src='/portada/portada.jpg'
                    width={1980}
                    height={1114}
                    alt='portada'
                    className='w-full'
                />
            </motion.div>
    )
}
