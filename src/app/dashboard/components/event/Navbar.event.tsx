import { Stay } from "@/types/stay.type";
import { getStays } from "@/utils/helpers";
import ModalCreate from "./ModalCreate";
import ModalDeleteAll from "./ModalDeleteAll";

export default async function NavbarEvent() {

    const stays = await getStays();

    const locations = Array.from(new Set(stays?.map((stay: Stay) => stay.location)));

    return (
        <nav className="px-6 py-4 border-b w-full flex justify-between items-center">
            <span className="text-xl font-medium">Recent Events</span>
            <div className="flex gap-2 items-center">
                <ModalCreate locations={locations} />
                <ModalDeleteAll />
            </div>
        </nav>
    )
}
