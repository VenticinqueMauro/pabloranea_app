import { Image } from "@nextui-org/react";

export default function Section1() {
    return (
        <div className="relative">
            <Image className="lg:hidden" radius="none" src="/popups/popups.jpg" alt="portada popups" width={1980}  />
            <Image className="hidden lg:block" radius="none" src="/popups/portadapage.jpg" alt="portada popups" width={1980}  />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <h1 className="text-6xl lg:text-9xl font-bold text-shadow -tracking-[3px] lg:-tracking-[9px] text-white">PopUp Dinners</h1>
            </div>
        </div>
    )
}
