import { User } from "lucide-react";

export default function Navbar() {
    return (
        <section className="absolute top-0 left-0 w-full bg-background text-foreground">
            <div className="w-full flex justify-between items-center px-6 py-2 border-b">
                <h1 className="text-lg font-medium">Admin Panel</h1>
                <span>
                    <User />
                </span>
            </div>
        </section>
    )
}
