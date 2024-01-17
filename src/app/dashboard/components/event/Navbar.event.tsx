import { Button } from "@nextui-org/react";
import { Trash, UtensilsCrossed } from "lucide-react";

export default function NavbarEvent() {
    return (
        <nav className="px-6 py-4 border-b w-full flex justify-between items-center">
            <span className="text-xl font-medium">Recent Events</span>
            <div className="flex gap-2 items-center">
                <Button className="bg-black text-white font-medium" startContent={<UtensilsCrossed size={20} />}>Create Event</Button>
                <Button color="danger" variant='flat' className="font-medium" startContent={<Trash size={20} />}>Delete all events</Button>
            </div>
        </nav>
    )
}
