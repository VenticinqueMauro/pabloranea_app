import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
import Calendar from "./Calendar";
import { Stay } from "@/types/stay.type";
import { CalendarIcon } from "lucide-react";

export default function PopCalendar({ stays }: { stays: Stay[] | undefined }) {
    return (
        <Popover placement="bottom">
            <PopoverTrigger>
                <Button variant="light" color="default" startContent={<CalendarIcon size={18} />}>Calendar</Button>
            </PopoverTrigger>
            <PopoverContent className="shadow-none bg-transparent">
                <Calendar stays={stays} />
            </PopoverContent>
        </Popover>
    );
}
