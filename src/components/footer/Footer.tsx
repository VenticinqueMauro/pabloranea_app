import { Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function Footer({ dictionary, lang }: any) {

    const menu = dictionary?.menu;

    if (!menu) {
        return null;
    }
    const { home, popups, calendar, aboutpablo, classes, partners, community, press, contact } = menu;


    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-10">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <Image
                                as={NextImage}
                                src="/logo.png"
                                alt="logo"
                                priority
                                width={200}
                                height={72}
                                className="font-bold text-3xl uppercase" />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href={`/${lang}`} className="hover:underline capitalize">{home}</a>
                                </li>
                                <li className="mb-4">
                                    <a href={`/${lang}/popup`} className="hover:underline capitalize">{popups}</a>
                                </li>
                                <li>
                                    <a href={`/${lang}#calendar`} className="hover:underline capitalize">{calendar}</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href={`/${lang}/about`} className="hover:underline capitalize ">{aboutpablo}</a>
                                </li>
                                <li className="mb-4">
                                    <a href={`/${lang}/#classes`} className="hover:underline capitalize ">{classes}</a>
                                </li>
                                <li>
                                    <a href={`/${lang}/partners`} className="hover:underline capitalize">{partners}</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href={`/${lang}/#community`} className="hover:underline capitalize">{community}</a>
                                </li>
                                <li className="mb-4">
                                    <a href={`/${lang}/press`} className="hover:underline capitalize">{press}</a>
                                </li>
                                <li>
                                    <a href={'https://docs.google.com/forms/d/e/1FAIpQLSfPg5abINAQ4OkZLFPLVRm3dSJSIEjpjBsUheJS5eOs_O-pWg/viewform'} className="hover:underline capitalize" target='_blank'>{contact}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2026 <a href="#" className="underline font-bold text-black">Insiders Agencia</a> & <a href="https://www.instagram.com/insiders.agencia/" className="underline font-bold text-black">MVDEV</a>. All Rights Reserved.</span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="https://www.instagram.com/pabloranea/?hl=es-la" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="https://www.facebook.com/chefpabloranea" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="https://www.tiktok.com/@chefpabloranea" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-tiktok" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" /></svg>
                            <span className="sr-only">TikTok</span>
                        </a>
                        <a href="https://www.pinterest.es/chefpabloranea/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-pinterest" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 20l4 -9" /><path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>
                            <span className="sr-only">Pinterest</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer >

    )
}
