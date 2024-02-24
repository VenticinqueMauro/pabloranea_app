import { motion } from 'framer-motion';
import ContactButton from './ContactButton';

interface Props {
    sections: string[],
    lang: string | string[],
    pathname: string
}

export const sectionshref = [
    'home',
    '/popups',
    '#calendar',
    '/about',
    '#classes',
    '/partners',
    '#community',
    '/press',
    'https://docs.google.com/forms/d/e/1FAIpQLSfPg5abINAQ4OkZLFPLVRm3dSJSIEjpjBsUheJS5eOs_O-pWg/viewform'
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
                {sections.filter(section => section !== 'contact' && section !== 'contacto').map((section, index) => (
                    <motion.a
                        key={section}
                        href={section === 'home' || section === 'inicio' ? `/${lang}` : `/${lang}${sectionshref[index]}`}
                        className={`${(pathname === `/${lang}` && (section === `home` || section === 'inicio')) ||
                            pathname === `/${lang}/${section}`
                            ? 'bg-black text-white'
                            : ''
                            } z-10 hover:bg-black hover:text-white cursor-pointer px-1`}
                    >
                        {section}
                    </motion.a>
                ))}
                <ContactButton pathname={pathname} lang={lang} />
                {/* <motion.a
                    href={sections.includes('contact') ? sectionshref[sectionshref.length - 1] : (section === 'home' || section === 'inicio' ? `/${lang}` : `/${lang}${sectionshref[index]}`)}
                    target='_blank'
                    rel="noopener noreferrer"
                    className={`${pathname === `/${lang}/contact` ? 'bg-black text-white' : ''} z-10 hover:bg-black hover:text-white cursor-pointer px-1`}
                >
                    {sections.includes('contact')}
                </motion.a> */}
            </div>
        </div >
    )
}
