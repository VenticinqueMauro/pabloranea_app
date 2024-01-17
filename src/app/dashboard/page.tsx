import { Stay } from "@/types/stay.type";
import { redirect } from "next/navigation";

async function getStays() {
    const res = await fetch(`${process.env.BASE_URL}/api/stay`, {
        cache: 'no-store'
    })
    if (res.ok) {
        return await res.json();
    }
}


export default async function DashboardHome() {

    const stays: Stay[] = await getStays();

    const locations = Array.from(new Set(stays?.map((stay: Stay) => stay.location)));

    return redirect('/dashboard/stays');
    // const { _id: id, color } = stays;

    // return (
    //     <div className="px-6 py-6 flex flex-col items-start min-w-full">
    //         <div className="flex items-start gap-4 w-full">
    //             HOME DASH
    //         </div>
    //     </div>
    // )
}
