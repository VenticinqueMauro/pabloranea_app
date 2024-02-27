import { Image } from "@nextui-org/react";

export default function Section1() {
    return (
        <div className="relative lg:px-20">
            <Image className="lg:hidden" radius="none" src="/popups/portadapage.png" alt="portada popups" width={1980} />
            <Image className="hidden lg:block" radius="none" src="/popups/portadapage.png" alt="portada popups" width={1980} />
            <div className="absolute inset-0 flex justify-center items-center z-10">
                {/* <h1 className="text-4xl lg:text-6xl font-bold text-shadow -tracking-[3px] lg:-tracking-[4px] text-white">PopUp Dinners</h1> */}
            </div>
        </div>
    )
}
