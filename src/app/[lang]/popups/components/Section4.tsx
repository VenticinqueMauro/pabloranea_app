import { Image } from '@nextui-org/react'
import React from 'react'

export default function Section4() {
    return (
        <div className="bg-background text-foreground light px-20 py-16 grid grid-cols-12 grid-rows-3 gap-10">
            <div className="col-span-6 row-span-2">
                <div className="flex items-center gap-10">
                    <h2 className="text-9xl font-extrabold">5</h2>
                    <h3 className="text-3xl uppercase font-extrabold">eventos destacados</h3>
                </div>
            </div>
            <div className="row-span-1 col-span-6">
                <div className="text-3xl font-bold pt-10">
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
            <div className="col-span-6 row-span-1 row-start-3 flex justify-center items-end">
                <Image radius="none" className="object-cover w-full h-full" src="/partners/partners.jpg" alt="test2" />
            </div>
            <div className="col-span-6 min-h-full row-span-2 row-start-2 items-center bg-gray-500 block"></div>
        </div>
    )
}
