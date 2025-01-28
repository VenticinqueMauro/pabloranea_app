import { Metadata } from "next"
import NavbarStay from "../components/stay/Navbar.stay"

export const metadata: Metadata = {
    title: 'Stays',
    description: 'lorem ipsum',
    alternates: {
        canonical: 'https://pabloranea.com/en',
    },
}

export default function EventLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="space-y-4 w-full">
            <NavbarStay />
            <div className="px-6">
                {children}
            </div>
        </div>
    )
}
