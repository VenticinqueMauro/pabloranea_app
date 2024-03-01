import { Stay } from "@/types/stay.type";
import { getStays } from "@/utils/helpers";
import { Image } from "@nextui-org/react";
import dayjs from "dayjs";
import React from "react";


export default async function CalendarFront({ dictionary, lang }: any) {

    const stays: Stay[] | undefined = await getStays();

    const { title, button } = dictionary.calendar;

    return (
        <section id="calendar" className="flex items-center justify-center flex-col mb-20 px-2 border-white">
            <div className="relative flex flex-col items-center justify-center border-b">
                <Image src="/worldtitle.png" alt='world' className="wordlScroll hidden lg:block w-[350px]" width={500} height={500} />
                <Image src="/worldtitle.png" alt='world' className="wordlScroll block lg:hidden w-[200px]" width={500} height={500} />
            </div>

            <div>
                <div className="flex flex-col border-t border-gray-400 border-dashed  max-w-7xl mx-auto relative z-10 bg-white h-[300px] lg:h-[420px] container-calendar overflow-y-scroll">
                    {
                        stays?.map((stay) => (
                            <div key={stay._id} className=" border-gray-400 border-b border-dashed flex justify-between items-center py-5 hover:bg-gray-100 letterScroll px-3">
                                <div className="w-full text-start px-1">
                                    <p className="font-bold text-base lg:text-xl">{dayjs(stay.startDate).format('DD.MM')} - {dayjs(stay.endDate).format('DD.MM')}</p>
                                    <p className="uppercase text-sm lg:text-base text-zinc-500 font-bold">{stay.location}</p>
                                </div>
                                <div className="w-full text-start text-sm lg:text-base px-1 whitespace-pre-line">
                                    {lang === 'es'
                                        ? stay.description.es.split('\n').map((line, index, array) => (
                                            <React.Fragment key={index}>
                                                {line.trim() && '• ' + line.trim()} 
                                                {index !== array.length - 1 && line.trim() && <br />} 
                                            </React.Fragment>
                                        ))
                                        : stay.description.en.split('\n').map((line, index, array) => (
                                            <React.Fragment key={index}>
                                                {line.trim() && '• ' + line.trim()} 
                                                {index !== array.length - 1 && line.trim() && <br />} 
                                            </React.Fragment>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPg5abINAQ4OkZLFPLVRm3dSJSIEjpjBsUheJS5eOs_O-pWg/viewform" target="_blank" className=" text-white px-5 py-2 text-base lg:text-lg bg-[#5E6B45] w-fit block mx-auto mt-10 font-semibold letterScroll">{button}</a>
            </div>
        </section>
    )
}
