import Image from "next/image";

export default function Section1() {
    return (
        <div className="relative">
            <Image className="aspect-[3.3/1] w-full h-auto" src="/aboutpablo/portadapage.png" alt="Pablo Ranea" width={2760} height={825} sizes="100vw" preload />
        </div>
    )
}
