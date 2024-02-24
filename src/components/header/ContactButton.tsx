'use client';

import { motion } from 'framer-motion';

export default function ContactButton({ pathname, lang }: any) {
    return (
        <motion.a
            href='https://docs.google.com/forms/d/e/1FAIpQLSfPg5abINAQ4OkZLFPLVRm3dSJSIEjpjBsUheJS5eOs_O-pWg/viewform'
            target='_blank'
            rel="noopener noreferrer"
            className={`${pathname === `/${lang}/contact` ? 'bg-black text-white' : ''} z-10 hover:bg-black hover:text-white cursor-pointer px-1`}
        >
            {
                lang === 'es' ? 'contacto' : 'contact'
            }
        </motion.a>
    )
}
