import { motion } from 'framer-motion';
import { NextFont } from 'next/dist/compiled/@next/font';

interface Props {
    sections: string[],
    lang: string | string[],
    pathname: string
}

export default function Desktop({ sections, lang, pathname }: Props) {
    return (
        <div className="hidden pt-16 pb-6 px-16 xl:px-20 lg:flex justify-between items-center">
            <motion.img
                src="/logo.png"
                alt="logo"
                width={2126}
                height={768}
                className='lg:w-[200px] '
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.3 } }}
            />
            <div className={`flex uppercase`}>
                {sections.map((section, index) => (
                    <motion.p
                        key={section}
                        className={`${pathname === `/${lang}` && section === `home` || section === 'inicio' ? 'bg-black text-white' : ''} z-10 hover:bg-black hover:text-white cursor-pointer px-1`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.5, delay: index * 0.3 } }}
                    >
                        {section}
                    </motion.p>
                ))}
            </div>
        </div>
    )
}
