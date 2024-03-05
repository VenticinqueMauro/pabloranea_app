import { Image } from "@nextui-org/react";

export default function Section2({ dictionary}: any) {

    const {popupsdinners1, popupsdinners2} = dictionary.popups.page.section2;

    return (
        <div className="px-3 lg:px-20 pt-5 pb-16 lg:py-16 flex flex-col gap-5 md:flex-row justify-between">
            <div className="flex flex-col items-center justify-between w-full gap-5 md:gap-0">
                <h2 className="text-base lg:text-lg text-justify" style={{ lineHeight: 1.2 }}>
                    {popupsdinners1}<br /> <br />{popupsdinners2}
                </h2>
                <Image radius="none" className="object-cover hidden md:block min-w-full h-full" src="/popups/img1.jpg" alt="popups dinners" width={720} height={405} />
            </div>
            <div className="w-full">
                <video className="w-full h-auto lg:max-h-[1000px] aspect-[9/16] mt-1 mb-1 lg:mb-0 p-0" src="/popups/reelpopup.mov" preload="none" controls autoPlay loop muted>
                    Tu navegador no admite el elemento de video.
                </video>
            </div>
        </div>
    )
}
