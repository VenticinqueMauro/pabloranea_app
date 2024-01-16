import NavbarEvent from "../components/event/Navbar.event";

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
