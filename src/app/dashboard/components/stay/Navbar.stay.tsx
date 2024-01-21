import { getStays } from "@/utils/helpers";
import ModalCreate from "./ModalCreate";
import ModalDeleteAll from "./ModalDeleteAll";
import PopCalendar from "../calendar/PopCalendar";

export default async function NavbarStay() {

    const stays = await getStays();

    return (
        <nav className="px-6 py-4 border-b w-full flex justify-between items-center">
            <span className="text-xl font-medium">Recent Stays</span>
            <PopCalendar stays={stays} />
            <div className="flex gap-2 items-center">
                <ModalCreate />
                <ModalDeleteAll />
            </div>
        </nav>
    )
}
