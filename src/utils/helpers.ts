import { Stay } from "@/types/stay.type";
import { BASE_URL } from "./enviroments";

export async function getStays(): Promise<Stay[] | undefined> {
    const res = await fetch(`${BASE_URL}/api/stay`, {
        cache: 'no-store'
    });

    if (res.ok) {
        const staysData: Stay[] = await res.json(); 

        const stays: Stay[] = staysData.map((stayData) => ({
            ...stayData,
            startDate: new Date(stayData.startDate)
        }));

        stays.sort((a, b) => {
            const fechaActual = new Date();
            const diffA = Math.abs(a.startDate.getTime() - fechaActual.getTime());
            const diffB = Math.abs(b.startDate.getTime() - fechaActual.getTime());
            return diffA - diffB;
        });

        return stays;
    } else {
        return undefined;
    }
}