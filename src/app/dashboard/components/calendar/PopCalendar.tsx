'use client';

import { Stay } from "@/types/stay.type";
import { BASE_URL } from "@/utils/enviroments";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Calendar from "./Calendar";
import { useStore } from "@/store/dashboard";

export default function PopCalendar() {

    const { refresh } = useStore();
    const [stays, setStays] = useState<Stay[]>([])

    useEffect(() => {
        async function GET() {
            const res = await fetch(`${BASE_URL}/api/stay`, {
                cache: 'no-store'
            })
            if (res.ok) {
                const data: Stay[] = await res.json();
                console.log(data)
                setStays(data);
            }
        }

        GET();

    }, [refresh])


    return (
        <div className='absolute bottom-10 right-5'>
            <Popover placement="bottom" >
                <PopoverTrigger>
                    <Button variant="shadow" color="default" className="bg-background text-foreground dark" isIconOnly ><CalendarIcon size={18} /></Button>
                </PopoverTrigger>
                <PopoverContent className="shadow-none bg-transparent">
                    <Calendar stays={stays} />
                </PopoverContent>
            </Popover>
        </div>
    );
}
