'use client';

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";

export default function ModalContact({ pathname, lang }: any) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <button onClick={onOpen} className={`${pathname === `/${lang}/contact` ? 'bg-black text-white' : ''} z-10 hover:bg-black hover:text-white cursor-pointer capitalize lg:uppercase lg:px-3 xl:px-5 lg:text-xs xl:text-sm`}
            >{lang === 'es' ? 'contacto' : 'contact'}</button>
            <Modal radius="sm" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 uppercase text-xl font-bold ">{
                                lang === 'es' ? 'contacto' : 'contact'
                            }</ModalHeader>
                            <ModalBody className="border-t">

                                <div className="text-lg space-y-1 w-full mt-auto text-end ">
                                    <a href="mailto:chefpabloranea@gmail.com" target="_blank" className="flex items-center gap-2 text-gray-700 text-base hover:text-gray-900 dark:hover:text-white">
                                        📧
                                        <span className='pl-1 text-xs'>chefpabloranea@gmail.com</span>
                                    </a>
                                    <a href="https://wa.me/17202849937" target="_blank" className="flex items-center gap-2 text-gray-700 text-base hover:text-gray-900 dark:hover:text-white">
                                        🇺🇸
                                        <span className='pl-1 text-xs'>+1 (720) 284-9937</span>
                                    </a>
                                    <a href="https://wa.me/5492616832720" target="_blank" className="flex items-center gap-2 text-gray-700 text-base hover:text-gray-900 dark:hover:text-white">
                                        🇦🇷
                                        <span className='pl-1 text-xs'>+54 9 261 6832720</span>
                                    </a>
                                </div>
                            </ModalBody>
                            <ModalFooter className="flex justify-between border-t">
                                <div className="space-y-1 w-full">
                                    <a href="https://www.instagram.com/pabloranea/?hl=es-la" className="text-gray-700 text-xs items-center flex gap-2 hover:text-gray-900 dark:hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
                                        <span className="sr-only">Instagram</span>
                                        @pabloranea
                                    </a>
                                    <a href="https://www.facebook.com/chefpabloranea" className="text-gray-700 text-xs items-center flex gap-2 hover:text-gray-900 dark:hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
                                        <span className="sr-only">Facebook</span>
                                        /chefpabloranea
                                    </a>
                                    <a href="https://www.tiktok.com/@chefpabloranea" className="text-gray-700 text-xs items-center flex gap-2 hover:text-gray-900 dark:hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-tiktok" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" /></svg>
                                        <span className="sr-only">TikTok</span>
                                        @chefpabloranea
                                    </a>
                                    <a href="https://www.pinterest.es/chefpabloranea/" className="text-gray-700 text-xs items-center flex gap-2 hover:text-gray-900 dark:hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-pinterest" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 20l4 -9" /><path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>
                                        <span className="sr-only">Pinterest</span>
                                        /chefpabloranea
                                    </a>
                                </div>
                            </ModalFooter>
                            <ModalFooter className="border-t">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPg5abINAQ4OkZLFPLVRm3dSJSIEjpjBsUheJS5eOs_O-pWg/viewform" className="py-2 px-1 lg:px-5 bg-[#5E6B45] uppercase font-bold text-sm lg:text-base me-auto text-center text-white">
                                    {lang === 'es' ? "convertite en anfitrión" : "be a host"}
                                </a>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
