import ModalCreate from "./ModalCreate";
import ModalDeleteAll from "./ModalDeleteAll";

export default async function NavbarStay() {


    return (
        <nav className="px-6 py-4 border-b w-full flex justify-between items-center">
            <span className="text-xl font-medium">Recent Stays</span>
            <div className="flex gap-2 items-center">
                <ModalCreate />
                <ModalDeleteAll />
            </div>
        </nav>
    )
}
