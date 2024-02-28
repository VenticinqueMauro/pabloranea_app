import ContactButton from './ContactButton';
import { Image } from '@nextui-org/react';
import ModalContact from './ModalContact';

interface Props {
    sections: string[],
    lang: string | string[],
    pathname: string
}

export const sectionshref = [
    'home',
    '/popup',
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
        <div className="hidden pt-16 pb-6 px-16 xl:px-20 lg:flex justify-between items-center absolute top-0 left-0 bg-white w-full z-40">
            <a
                className='lg:w-[200px] '
                href='/'
            >
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={2126}
                    height={768}

                />
            </a>
            <div className={`flex uppercase gap-2`}>
                {sections.filter(section => section !== 'contact' && section !== 'contacto').map((section, index) => (
                    <a
                        key={section}
                        href={section === 'home' || section === 'inicio' ? `/${lang}` : `/${lang}${sectionshref[index]}`}
                        className={`${(pathname === `/${lang}` && (section === `home` || section === 'inicio')) ||
                            pathname === `/${lang}/${section}`
                            ? 'bg-black text-white'
                            : ''
                            } z-10 hover:bg-black hover:text-white cursor-pointer px-1`}
                    >
                        {section}
                    </a>
                ))}
                {/* <ContactButton pathname={pathname} lang={lang} /> */}
                <ModalContact pathname={pathname} lang={lang} />
            </div>
        </div >
    )
}
