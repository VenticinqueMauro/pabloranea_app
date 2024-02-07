'use client';

import { Event } from "@/types/event.type";
import { Stay } from "@/types/stay.type";
import { Tooltip } from "@nextui-org/react";
import dayjs from "dayjs";
import { MapPinned, PlaneLanding, PlaneTakeoff } from "lucide-react";

interface Props {
    day: number,
    staysForDate: Stay
}


export default function TooltipCalendar({ day, staysForDate }: Props) {

    const hasEvents = staysForDate?.events && staysForDate?.events?.some((event: Event) => {
        let eventDay = dayjs(event.date).date();

        if (eventDay === 31) {
            eventDay = 1;
            return day === eventDay || (eventDay === 1 && day === 1);
        }

        return day === eventDay + 1 || (eventDay === 1 && day === 1);
    });


    return (
        <>
            <Tooltip content={
                <div className="space-y-2 p-5">
                    <p className="flex gap-2 items-center uppercase" >
                        <MapPinned size={20} />
                        {staysForDate?.location}
                    </p>
                    <p className="flex gap-2 items-center" >
                        <PlaneLanding size={20} />
                        {dayjs(staysForDate?.startDate).add(1, 'day').format('dddd, DD-MM-YYYY')}
                    </p>
                    <p className="flex gap-2 items-center" >
                        <PlaneTakeoff size={20} />
                        {dayjs(staysForDate?.endDate).add(1, 'day').format('dddd, DD-MM-YYYY')}
                    </p>
                    {staysForDate?.events && staysForDate.events.length > 0 && (
                        <>
                            <p className="flex gap-2 items-center">
                                Event details:
                            </p>
                            {staysForDate.events.map((event: any) => (
                                <p key={event._id} className="flex gap-2 items-center" >
                                    {event.title} on {dayjs(event.date).add(1, 'day').format('dddd, MM YYYY')} at {event.time}hs
                                </p>
                            ))}
                        </>
                    )}
                </div>
            }>
                <p style={{ position: 'relative' }}>
                    {day}
                    {hasEvents && (
                        <span className="h-2 w-2 rounded-full inline-block absolute bg-blue-600 border-blue-200 -top-1 right-0 animate-bounce"></span>
                    )}
                </p>
            </Tooltip>
        </>
    );
}
