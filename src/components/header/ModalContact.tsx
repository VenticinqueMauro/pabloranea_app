'use client';

import { X } from "lucide-react";
import { useRef } from "react";
import type { Locale } from "@/lib/locales";
import { HOST_FORM_URL, SOCIAL_LINKS } from "@/lib/site";

// Native <dialog>: focus trap, Escape to close and top-layer rendering come
// from the browser, so no UI library is needed.
export default function ModalContact({ lang }: { lang: Locale }) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const label = lang === 'es' ? 'contacto' : 'contact';

    const close = () => dialogRef.current?.close();

    return (
        <>
            <button
                onClick={() => dialogRef.current?.showModal()}
                aria-haspopup="dialog"
                className="z-10 hover:bg-black hover:text-white cursor-pointer capitalize lg:uppercase lg:px-3 xl:px-5 lg:text-xs xl:text-sm"
            >{label}</button>
            <dialog
                ref={dialogRef}
                aria-labelledby="contact-title"
                // A click whose target is the <dialog> itself landed on the backdrop.
                onClick={(e) => e.target === e.currentTarget && close()}
                className="contact-dialog m-auto w-[calc(100%-2rem)] max-w-md rounded-lg bg-white p-0 font-sans font-normal text-base text-foreground shadow-xl backdrop:bg-black/50 normal-case"
            >
                <div className="relative">
                    <button
                        onClick={close}
                        aria-label={lang === 'es' ? 'Cerrar' : 'Close'}
                        className="absolute top-2 right-2 rounded-full p-2 text-gray-500 hover:bg-gray-100"
                    >
                        <X size={16} />
                    </button>
                    <h2 id="contact-title" className="px-6 py-4 uppercase text-xl font-bold">{label}</h2>
                    <div className="border-t px-6 py-2">
                        <div className="text-lg space-y-1 w-full mt-auto text-end ">
                            <a href="mailto:chefpabloranea@gmail.com" className="flex items-center gap-2 text-gray-700 text-base hover:text-gray-900">
                                <span aria-hidden>📧</span>
                                <span className='pl-1 text-xs'>chefpabloranea@gmail.com</span>
                            </a>
                            <a href="https://wa.me/17202849937" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 text-base hover:text-gray-900">
                                <span aria-hidden>🇺🇸</span>
                                <span className='pl-1 text-xs'>WhatsApp +1 (720) 284-9937</span>
                            </a>
                            <a href="https://wa.me/5492616832720" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 text-base hover:text-gray-900">
                                <span aria-hidden>🇦🇷</span>
                                <span className='pl-1 text-xs'>WhatsApp +54 9 261 6832720</span>
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-between border-t px-6 py-4">
                        <div className="space-y-1 w-full">
                            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-700 text-xs items-center flex gap-2 hover:text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
                                <span className="sr-only">Instagram</span>
                                @pabloranea
                            </a>
                            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-700 text-xs items-center flex gap-2 hover:text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
                                <span className="sr-only">Facebook</span>
                                /chefpabloranea
                            </a>
                            <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-700 text-xs items-center flex gap-2 hover:text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" /></svg>
                                <span className="sr-only">TikTok</span>
                                @chefpabloranea
                            </a>
                            <a href={SOCIAL_LINKS.pinterest} target="_blank" rel="noopener noreferrer" className="text-gray-700 text-xs items-center flex gap-2 hover:text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 20l4 -9" /><path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>
                                <span className="sr-only">Pinterest</span>
                                /chefpabloranea
                            </a>
                        </div>
                    </div>
                    <div className="flex border-t px-6 py-4">
                        <a href={HOST_FORM_URL} target="_blank" rel="noopener noreferrer" className="py-2 px-1 lg:px-5 bg-brand-olive uppercase font-bold text-sm lg:text-base me-auto text-center text-white">
                            {lang === 'es' ? "convertite en anfitrión" : "be a host"}
                        </a>
                    </div>
                </div>
            </dialog>
        </>
    );
}
