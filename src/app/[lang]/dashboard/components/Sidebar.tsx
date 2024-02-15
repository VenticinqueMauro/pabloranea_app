'use client';

import { Button, Link } from "@nextui-org/react";
import { ChefHat, Palmtree, UtensilsCrossed, Wine } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import UserDropDown from "./UserDropDown";

const routes = [
    { label: 'Stays', route: '/dashboard/stays', icon: <Palmtree size={18} /> },
    { label: 'Events', route: '/dashboard/events', icon: <UtensilsCrossed size={18} /> },
    { label: 'Partners', route: '#', icon: <Wine size={18} /> },
]

export default function Sidebar() {

    const pathname = usePathname();
    const { lang } = useParams();

    return (
        <div className="flex flex-col  px-6 py-6 border-r space-y-10 min-w-[15%]">
            <Link href="/dashboard" color="foreground" className="text-lg font-semibold flex gap-2 items-start">
                <ChefHat size={26} />
                Admin Panel
            </Link>
            <div className="space-y-2 flex-grow">
                {
                    routes.map(route => (
                        <Button
                            key={route.label}
                            as={Link}
                            size="md"
                            variant={pathname.startsWith(route.route) ? 'flat' : 'light'}
                            startContent={route.icon}
                            href={`/${lang}/${route.route}`}
                            className="flex items-center gap-2 justify-start"
                        >
                            {route.label}
                        </Button>
                    ))
                }
            </div>
            <UserDropDown />
        </div>
    )
}
