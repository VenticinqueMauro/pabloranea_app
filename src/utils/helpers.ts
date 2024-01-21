import { Stay } from "@/types/stay.type";
import { BASE_URL } from "./enviroments";

export async function getStays() {
    const res = await fetch(`${BASE_URL}/api/stay`, {
        cache: 'no-store'
    })
    if (res.ok) {
        const data: Stay[] = await res.json();
        return data;
    }
}