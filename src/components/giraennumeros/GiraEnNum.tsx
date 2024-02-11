import { ArrowDown } from "lucide-react";

export default function GiraEnNum() {
    return (
        <div className="bg-black pt-10 md:pb-5 relative ">
            <div className="text-5xl sm:text-6xl md:text-[78px]  lg:text-[80px] 2xl:text-9xl px-6 sm:px-10 2xl:px-40  mx-auto text-white font-bold text-justify leading-tight letterScroll w-full">
                <div className="h-10 sm:h-14 lg:h-16 xl:h-20 w-[50%] sm:w-[55%] md:w-[65%] lg:w-[70%] xl:w-[75%] 2xl:w-[70%] bg-white inline-block mr-10 md:mr-20 lg:mr-28 "></div>
                más de 50 litros de <span className="text-gray-600">chimichurri</span>, 180 kilos de <span className="text-gray-600">dulce de leche</span> y 1400 <span className="text-gray-600 md:mr-[40%] lg:mr-[100%] xl:mr-[50%] 2xl:mr-[30%]">botellas de vino</span>
                <div className=" inline-flex items-center justify-center md:justify-end gap-4 text-black font-semibold text-center md:text-end 
                text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl  md:pl-20 md:pr-6  bg-white h-20 md:h-28 w-full md:w-auto mt-10 md:absolute md:-bottom-11 md:right-0">
                    the 2024 tour dates
                    <div className="flex items-end gap-2 bg-white">
                        <ArrowDown className="bg-black text-white rounded-full p-1 h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
                        <ArrowDown className="bg-black text-white rounded-full p-1 h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
                    </div>
                </div>
            </div>
            {/* <div className="absolute bottom-0 right-0 h-14 md:h-16 lg:h-24 w-full xl:w-[50%]  flex items-center gap-2 md:gap-5 bg-white justify-center md:justify-end lg:ml-6 text-black font-semibold text-end 
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-3 sm:px-6 border-white border-8">the 2024 tour dates
                <div className="flex items-end gap-2">
                    <ArrowDown className="bg-black text-white rounded-full p-1 h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
                    <ArrowDown className="bg-black text-white rounded-full p-1 h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
                </div>
            </div> */}
        </div>
    )
}
