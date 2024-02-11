import { Stay } from "@/types/stay.type";
import { getStays } from "@/utils/helpers";
import { Image } from "@nextui-org/react";
import dayjs from "dayjs";


export default async function CalendarFront({ dictionary, lang }: any) {

    const stays: Stay[] | undefined = await getStays();
    const { title } = dictionary.calendar

    return (
        <section className="flex items-center justify-center flex-col mb-20 px-6 lg:px-0 border-white">
            <div className="relative flex flex-col items-center justify-center">
                <Image src="/world.png" alt='world' className="wordlScroll hidden lg:block" width={350} height={350} />
                <Image src="/world.png" alt='world' className="wordlScroll block lg:hidden" width={200} height={200} />
                <h2 className="text-center text-4xl lg:text-6xl font-bold w-auto lg:w-[250px] py-2 absolute bottom-2 lg:bottom-8 z-10 text-white">{title}</h2>
            </div>

            <div>
                <div className="flex flex-col border-t-2 border-gray-800 border-dashed  max-w-7xl mx-auto relative z-10 bg-white">
                    {
                        stays?.slice(0, 4).map((stay) => (
                            <div key={stay._id} className=" border-gray-800 border-b-2 border-dashed flex justify-between items-center py-5 hover:bg-gray-100 letterScroll">
                                <div className="w-full text-start px-1">
                                    <p className="font-bold text-base lg:text-xl">{dayjs(stay.startDate).format('DD.MM')} - {dayjs(stay.endDate).format('DD.MM')}</p>
                                    <p className="uppercase text-sm lg:text-lg text-zinc-500 font-bold">{stay.location}</p>
                                </div>
                                <div className="w-full text-justify text-sm lg:text-base px-1 line-clamp-2">
                                    {lang === 'es' ? stay.description.es : stay.description.en}
                                </div>
                            </div>
                        ))
                    }
                    <button className="bg-black text-white px-1 w-fit ms-auto mt-5 font-semibold letterScroll">MORE DATE</button>
                </div>
            </div>
        </section>
    )
}
