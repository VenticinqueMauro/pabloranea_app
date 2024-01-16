import { Stay } from "@/types/stay.type";
import Calendar from "./components/calendar/Calendar";
import FormCreateEvent from "./components/event/FormCreateEvent";
import FormCreateStay from "./components/stay/FormCreateStay";
import FormEditStay from "./components/stay/FormEditStay";
import EventTable from "./components/event/EventTable";

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
        <div className="px-6 py-6 flex flex-col items-start ">
            <div className="flex items-start gap-4 w-full">
                {/* <Calendar stays={stays} /> */}
                {/* <FormCreateStay />
                {/* <FormEditStay id={id} color={color} /> */}
                <FormCreateEvent locations={locations} />
                <EventTable />
            </div>
        </div>
    )
}
