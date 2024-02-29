import { Image } from "@nextui-org/react";

export default function Section1() {
    return (
        <div className="relative lg:px-20">
            <Image className="lg:hidden" radius="none" src="/popups/portadapage.png" alt="portada popups" width={1980} />
            <Image className="hidden lg:block" radius="none" src="/popups/portadapage.png" alt="portada popups" width={1980} />
        </div>
    )
}
