import { Stay } from "@/types/stay.type";
import { BASE_URL } from "@/utils/enviroments"
import dayjs from "dayjs";

async function getStays() {
    try {
        const res = await fetch(`${BASE_URL}/api/stay`, {
            cache: 'no-store'
        })

        if (res.ok) {
            return await res.json();
        }
    } catch (error) {
        console.log(error)
    }
}

export default async function CalendarFront() {

    const stays: Stay[] = await getStays();

    console.log(stays)

    return (
        <div className="h-screen px-20 flex items-center justify-center">
            <div>
                <h2 className="text-center text-6xl font-bold block py-2">tour&lsquo;24 <br /> dates</h2>
                <div className="flex flex-col border-t-4 border-black max-w-7xl mx-auto">
                    {
                        stays?.map((stay) => (
                            <div key={stay._id} className=" border-black border-b-4 flex justify-between items-center py-5 hover:bg-gray-100">
                                <div className="w-full text-start">
                                    <p className="font-bold text-xl">{dayjs(stay.startDate).format('DD.MM')} - {dayjs(stay.endDate).format('DD.MM')}</p>
                                    <p className="uppercase text-lg text-zinc-500 font-bold">{stay.location}</p>
                                </div>
                                <div className="w-full text-justify">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempore id, architecto doloremque temporibus voluptas fugiat ut veritatis veniam quam.
                                </div>
                                {/* <div className="w-full text-end">
                                <p className="underline text-zinc-500 font-bold">BOTON A DEFINIR</p>
                            </div> */}
                            </div>
                        ))
                    }
                    <button className="bg-black text-white px-1 w-fit ms-auto mt-5 font-semibold">MORE DATE</button>
                </div>
            </div>
        </div>
    )
}
