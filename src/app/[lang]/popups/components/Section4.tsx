import { Image } from '@nextui-org/react'
import React from 'react'

export default function Section4() {
    return (
        <div className="bg-background text-foreground light px-3 lg:px-20 py-10 lg:py-16 grid grid-cols-12 lg:grid-rows-3 gap-5 lg:gap-10">
            <div className="col-span-12 lg:col-span-6 lg:row-span-2">
                <div className="flex items-center gap-5 lg:gap-10">
                    <h2 className="text-7xl lg:text-9xl font-extrabold">5</h2>
                    <h3 className="text-xl lg:text-3xl uppercase font-extrabold">eventos destacados</h3>
                </div>
            </div>
            <div className="col-span-12 lg:row-span-1 lg:col-span-6">
                <div className="text-xl lg:text-3xl font-bold lg:pt-10">
                    Pop Up Dinner para el Festival Argentino en el American Club
                    HONGKONG,AÑO
                    <br /><br />
                    Wine Dinner en La Journée Mondial edu Malbec
                    CAHORSFRANCIA,AÑO
                    <br /><br />
                    Pop Up Dinner en el International Culinary Center
                    SOHOENNEWYORK,AÑO
                    <br /><br />
                    Gala Dinner con Rutini Wines en el ParkHyatt
                    SHANGHAI,AÑO
                    <br /><br />
                    Wine dinner en el Caesar Palace
                    LASVEGASNEVADA,AÑO
                </div>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:row-span-1 lg:row-start-3 flex justify-center lg:items-end">
                <Image radius="none" className="object-cover w-full h-full" src="/popups/img2.jpg" alt="popups dinners" width={720} height={600} />
            </div>
            <div className="hidden lg:col-span-6 lg:row-span-2 lg:row-start-2 lg:flex items-end">
                <Image radius="none" className="object-cover w-full h-full" src="/popups/vertical2.jpg" alt="popups dinners" width={720} height={1079} />
            </div>
        </div>
    )
}
