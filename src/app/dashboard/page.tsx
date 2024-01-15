import { Stay } from "@/types/stay.type";
import Calendar from "./components/Calendar";
import FormCreateEvent from "./components/event/FormCreateEvent";
import FormCreateStay from "./components/stay/FormCreateStay";
import FormEditStay from "./components/stay/FormEditStay";

async function getStays() {
    const res = await fetch(`${process.env.BASE_URL}/api/reservation`, {
        cache: 'no-store'
    })
    if (res.ok) {
        return await res.json();
    }
}


export default async function DashboardHome() {

    const stays: Stay[] = await getStays();

    const locations = Array.from(new Set(stays.map((stay: Stay) => stay.location)));


    // const { _id: id, color } = stays;

    return (
        <div className="col-span-11 px-6 py-14 flex flex-col items-start ">
            <div className="flex items-start gap-4 w-full">
                <Calendar stays={stays} />
                <FormCreateStay />
                <FormCreateEvent locations={locations} />
                {/* <FormEditStay id={id} color={color} /> */}
            </div>
        </div>
    )
}
