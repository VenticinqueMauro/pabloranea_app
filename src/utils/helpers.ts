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
            startDate: new Date(stayData.startDate),
            endDate: new Date(stayData.endDate)
        }));

        const currentDate = new Date();

        stays.sort((a, b) => {
            // Si la fecha de finalización de la estadía A aún no ha pasado al día de hoy
            // y la fecha de finalización de la estadía B ya pasó, A debe aparecer primero.
            if (a.endDate >= currentDate && b.endDate < currentDate) {
                return -1;
            }
            // Si la fecha de finalización de la estadía A ya pasó
            // y la fecha de finalización de la estadía B aún no ha pasado, A debe aparecer después.
            if (a.endDate < currentDate && b.endDate >= currentDate) {
                return 1;
            }
            // Si ambas estadías aún no han finalizado, ordenar por cercanía a la fecha de inicio.
            if (a.endDate >= currentDate && b.endDate >= currentDate) {
                return a.startDate.getTime() - b.startDate.getTime();
            }
            // Si ambas estadías ya han finalizado, ordenar por cercanía a la fecha de finalización.
            return a.endDate.getTime() - b.endDate.getTime();
        });

        // Filtrar estadías cuya fecha de finalización aún no ha pasado
        const activeStays = stays.filter(stay => stay.endDate >= currentDate);

        return activeStays;
    } else {
        return undefined;
    }
}

