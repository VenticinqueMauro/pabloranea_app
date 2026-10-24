import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/locales";
import { HOST_FORM_URL, SOCIAL_LINKS } from "@/lib/site";

export default function Footer({ dictionary, lang }: { dictionary: Dictionary, lang: Locale }) {

    const { home, popups, calendar, aboutpablo, classes, partners, community, press, contact } = dictionary.menu;


    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-10">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href={`/${lang}`} className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="Pablo Ranea"
                                width={200}
                                height={72} />
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
                                    <a href={`/${lang}#classes`} className="hover:underline capitalize ">{classes}</a>
                                </li>
                                <li>
                                    <a href={`/${lang}/partners`} className="hover:underline capitalize">{partners}</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href={`/${lang}#community`} className="hover:underline capitalize">{community}</a>
                                </li>
                                <li className="mb-4">
                                    <a href={`/${lang}/press`} className="hover:underline capitalize">{press}</a>
                                </li>
                                <li>
                                    <a href={HOST_FORM_URL} className="hover:underline capitalize" target='_blank' rel="noopener noreferrer">{contact}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-gray-500">© {new Date().getFullYear()} Pablo Ranea. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</span>
                        <span className="text-xs text-gray-400">{lang === 'es' ? 'Sitio por' : 'Site by'} <a href="https://www.instagram.com/insiders.agencia/" rel="noopener" className="underline hover:text-black">Insiders Agencia</a> & <a href="https://m25.com.ar/" rel="noopener" className="underline hover:text-black">MVDEV</a></span>
                    </div>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" /></svg>
                            <span className="sr-only">TikTok</span>
                        </a>
                        <a href={SOCIAL_LINKS.pinterest} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 20l4 -9" /><path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>
                            <span className="sr-only">Pinterest</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer >

    )
}
