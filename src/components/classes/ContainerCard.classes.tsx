import { ChevronDown } from "lucide-react";
import Card from "./Card";

export default function ContainerCardClasses() {
    return (
        <div className='hidden absolute bottom-5 right-3 px-1 lg:flex flex-col items-start justify-center gap-2 h-[400px] overflow-y-auto overscroll-auto focus:overscroll-contain scrollbar-hide snap-y snap-mandatory snap-start '>
            <div className='mt-24 space-y-2'>
                {
                    Array.from({ length: 4 }, (_, index) => (
                        <Card key={index} />
                    ))
                }
            </div>
        </div>
    )
}
