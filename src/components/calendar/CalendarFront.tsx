import { Stay } from "@/types/stay.type";
import { getStays } from "@/utils/helpers";
import { Image } from "@nextui-org/react";
import dayjs from "dayjs";


export default async function CalendarFront() {

    const stays: Stay[] | undefined = await getStays();

    return (
        <section className="h-screen flex items-center justify-center flex-col">
            <div className="relative imgScroll">
                <Image src="/world.png" alt='world' className="transition-all  ease-linear filter grayscale  duration-300 wordlScroll" width={350} height={350} />
                <h2 className="text-center text-6xl font-bold block py-2 absolute bottom-0 z-10 left-1/2 -translate-x-1/2 text-white">tour&lsquo;24 <br /> dates</h2>
            </div>
            <div>
                <div className="flex flex-col border-t-4 border-black max-w-7xl mx-auto relative z-10 bg-white">
                    {
                        stays?.map((stay) => (
                            <div key={stay._id} className=" border-black border-b-4 flex justify-between items-center py-5 hover:bg-gray-100 letterScroll">
                                <div className="w-full text-start">
                                    <p className="font-bold text-xl">{dayjs(stay.startDate).format('DD.MM')} - {dayjs(stay.endDate).format('DD.MM')}</p>
                                    <p className="uppercase text-lg text-zinc-500 font-bold">{stay.location}</p>
                                </div>
                                <div className="w-full text-justify ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempore id, architecto doloremque temporibus voluptas fugiat ut veritatis veniam quam.
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
