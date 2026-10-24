import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";
import { HOST_FORM_URL } from "@/lib/site";

export default function Section2({ dictionary }: { dictionary: Dictionary }) {

    const { popupsdinners1, popupsdinners2 } = dictionary.popups.page.section2;
    const { button } = dictionary.popups.page.section3;


    return (
        <div className="px-3 lg:px-20 pt-5 pb-16 lg:py-16 flex flex-col gap-5 md:flex-row justify-between">
            <div className="flex flex-col items-center justify-between w-full gap-5 md:gap-0">
                <div className="flex flex-col gap-10 items-start flex-1">
                    <h2 className="text-base lg:text-lg text-justify" style={{ lineHeight: 1.2 }}>
                        {popupsdinners1}<br /> <br />{popupsdinners2}
                    </h2>
                    <a href={HOST_FORM_URL} target="_blank" rel="noopener noreferrer" className="uppercase text-base text-center lg:text-lg w-fit mx-auto block px-5 py-4 bg-brand-olive  font-bold text-white">
                        {button}
                    </a>
                </div>
                <Image className="object-cover hidden md:block min-w-full h-auto" src="/popups/img1.jpg" alt="Pop-up dinner" width={720} height={405} sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="w-full">
                <video className="w-full h-auto lg:max-h-[1000px] aspect-9/16 mt-1 mb-1 lg:mb-0 p-0" src="/popups/reelpopup.mov" preload="none" controls autoPlay loop muted>
                    Tu navegador no admite el elemento de video.
                </video>
            </div>
        </div>
    )
}
