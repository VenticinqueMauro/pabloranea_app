import Calendar from "./components/Calendar";
import FormCreateStay from "./components/FormCreateStay";
import FormEditStay from "./components/FormEditStay";

async function getStays() {
    const res = await fetch('http://localhost:3000/api/reservation', {
        cache: 'no-store'
    })
    if (res.ok) {
        return await res.json();
    }
}


export default async function DashboardHome() {

    const stays = await getStays();

    // const { _id: id, color } = stays;

    return (
        <div className="col-span-11 px-6 py-14 flex flex-col items-start ">
            <div className="flex items-start gap-4 w-full">
                <Calendar stays={stays} />
                <FormCreateStay />
                {/* <FormEditStay id={id} color={color} /> */}
            </div>
        </div>
    )
}
