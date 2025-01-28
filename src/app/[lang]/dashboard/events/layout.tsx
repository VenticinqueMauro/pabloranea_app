import { Metadata } from "next";
import NavbarEvent from "../components/event/Navbar.event";


export const metadata: Metadata = {
    title: 'Events',
    description: 'lorem ipsum',
    alternates: {
        canonical: 'https://pabloranea.com/en',
    },
}

export default function EventLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="space-y-4 w-full">
            <NavbarEvent />
            <div className="px-6">
                {children}
            </div>
        </div>
    )
}
