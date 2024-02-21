import { Image } from "@nextui-org/react";

export default function Section2() {
    return (
        <div className="grid grid-cols-12 grid-rows-3 gap-4 lg:gap-10 px-3 lg:px-20 py-16">
            <div className="col-start-3 row-start-1 lg:row-start-1 lg:col-start-7 col-span-8 lg:col-span-6 min-h-full row-span-2 lg:row-span-3 flex justify-center items-center">
                <video className="w-full h-full mt-1 mb-1 lg:mb-0 p-0" src="/popups/reel.mp4" controls autoPlay >
                    Tu navegador no admite el elemento de video.
                </video>
            </div>
            <div className="hidden col-span-12 lg:col-start-1 lg:col-span-6 lg:row-span-1 row-start-3 lg:flex justify-center items-center px-3 lg:px-0">
                <Image radius="none" className="object-cover w-full h-full" src="/popups/img1.jpg" alt="popups dinners" width={720} height={405} />
            </div>
        </div>
    )
}
