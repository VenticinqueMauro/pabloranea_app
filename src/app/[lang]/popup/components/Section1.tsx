import { Image } from "@nextui-org/react";

export default function Section1() {
    return (
        <div className="relative">
            <Image className="lg:hidden aspect-[3.3/1]" radius="none" src="/popups/portadapage.png" alt="portada popups" width={2760} height={825}/>
            <Image className="hidden lg:block aspect-[3.3/1]" radius="none" src="/popups/portadapage.png" alt="portada popups" width={2760} height={825} />
        </div>
    )
}
