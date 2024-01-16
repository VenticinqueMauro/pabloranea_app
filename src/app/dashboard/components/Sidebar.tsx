'use client';

import { Button, Link } from "@nextui-org/react"
import { Calendar, Palmtree, Wine } from "lucide-react"
import { usePathname } from "next/navigation"

const routes = [
    { label: 'Events', route: '/dashboard/events', icon: <Calendar size={20} /> },
    { label: 'Stays', route: '/dashboard/stays', icon: <Palmtree size={20} /> },
    { label: 'Partners', route: '#', icon: <Wine size={20} /> },
]

export default function Sidebar() {

    const pathname = usePathname();


    return (
        <div className="flex flex-col px-3 py-6 border-r space-y-5">
            <Link href="/dashboard" color="foreground" className="text-lg font-medium">Admin Panel</Link>
            {
                routes.map(route => (
                    <Button
                        key={route.label}
                        as={Link}
                        size="md"
                        variant={pathname.startsWith(route.route) ? 'solid' : 'flat'}
                        startContent={route.icon}
                        href={route.route}
                        className="flex items-center gap-1 justify-start"
                    >
                        {route.label}
                    </Button>
                ))
            }
        </div>
    )
}
