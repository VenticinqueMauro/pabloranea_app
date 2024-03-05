import { Image } from '@nextui-org/react'

export default function Section2({ dictionary }: any) {

    const { description1, description2, button } = dictionary.aboutpablo.page.section2;

    return (
        <div className="px-3 lg:px-20 pt-5 pb-16 lg:py-16 flex flex-col gap-5 md:flex-row justify-between" >
            <div className="flex flex-col items-center justify-between w-full gap-5 md:gap-0">
                <div className="flex flex-col gap-10 items-start flex-1">
                    <h2 className="text-base lg:text-lg text-justify" style={{ lineHeight: 1.2 }}>{description1}<br /> <br />
                        {description2}
                    </h2>
                    <a href="/aboutpablo/cv.pdf" target="_blank" rel="noopener noreferrer" className="uppercase text-base text-center lg:text-lg w-fit mx-auto block px-5 py-4 bg-[#5E6B45]  font-bold text-white">
                        {button}
                    </a>
                </div>
                <Image radius="none" className="object-cover hidden md:block aspect-video" src="/popups/3.jpg" alt="pablo ranea" width={1600} height={840} />
            </div>
            <div className="w-full">
                <video className="w-full h-auto lg:max-h-[1000px] aspect-[9/16] mt-1 mb-1 lg:mb-0 p-0" src="/aboutpablo/reelabout.mov" preload="none" controls autoPlay loop muted>
                    Tu navegador no admite el elemento de video.
                </video>
            </div>
        </div>
    )
}
