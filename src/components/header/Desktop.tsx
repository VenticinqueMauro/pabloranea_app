import { motion } from 'framer-motion';

interface Props {
    sections: string[],
    lang: string | string[],
    pathname: string
}

export const sectionshref = [
    'home',
    '/popups',
    '#calendar',
    '#about',
    '#classes',
    '#partners',
    '#community',
    '/press',
    '#contact'
]

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
                    <motion.a
                        key={section}
                        href={`${section === 'home' || section === 'inicio' ? `/${lang}` : `/${lang}${sectionshref[index]}`}`}
                        className={`${(pathname === `/${lang}` && (section === `home` || section === 'inicio')) ||
                                pathname === `/${lang}/${section}`
                                ? 'bg-black text-white'
                                : ''
                            } z-10 hover:bg-black hover:text-white cursor-pointer px-1`}
                    >
                        {section}
                    </motion.a>
                ))}
            </div>
        </div >
    )
}
