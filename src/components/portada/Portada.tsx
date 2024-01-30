'use client';
import { motion } from 'framer-motion'

export default function Portada() {
    return (
        <motion.div
            className="h-[770px] bg-gray-200 flex justify-center items-center text-5xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
        > PORTADA
        </motion.div>
    )
}
