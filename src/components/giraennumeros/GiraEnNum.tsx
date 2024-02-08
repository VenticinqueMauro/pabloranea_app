import { ArrowDown } from "lucide-react";

export default function GiraEnNum() {
    return (
        <div className="bg-black pt-10 pb-28 relative ">
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl px-6 sm:px-10 md:px-16 lg:px-20 xl:px-40 mx-auto text-white font-bold text-justify leading-tight letterScroll">
                <div className="h-10 sm:h-12 lg:h-16 xl:h-20 w-[50%] sm:w-[55%] md:w-[65%] lg:w-[61%] xl:w-[75%] bg-white inline-block mr-10 md:mr-20 lg:mr-28 "></div>
                más de 50 litros de chimichurri, 180 kilos de dulce de leche y 1400 botellas de vino
            </div>
                <div className="absolute bottom-0 right-0 h-14 md:h-16 lg:h-24 w-full md:w-fit  flex items-center gap-2 md:gap-5 bg-white justify-center md:justify-end lg:ml-6 text-black font-semibold text-end 
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-3 sm:px-6 border-white border-8">the 2024 tour dates
                    <div className="flex items-end gap-2">
                        <ArrowDown className="bg-black text-white rounded-full p-1 h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"  />
                        <ArrowDown className="bg-black text-white rounded-full p-1 h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"  />
                    </div>
                </div>
        </div>
    )
}
