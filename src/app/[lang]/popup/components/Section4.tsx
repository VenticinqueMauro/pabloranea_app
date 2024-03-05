import { Lang } from '@/types/lang.type'
import { Image } from '@nextui-org/react'
import React from 'react'

export default function Section4({ lang }: any) {
    return (
        <div className="bg-background text-foreground light px-3 lg:px-20 py-10 lg:py-16 grid grid-cols-12 lg:grid-rows-2 gap-5 ">
            <div className="col-span-12 lg:col-span-6 lg:row-span-2">
                <div className="flex items-center gap-5 lg:gap-10">
                    <h2 className="text-6xl lg:text-8xl font-extrabold">5</h2>
                    <h3 className="text-2xl uppercase font-extrabold">{lang === 'es' ? "eventos destacados" : "Milestones of Our Journey"}</h3>
                </div>
            </div>
            <div className="col-span-12 lg:row-span-1 lg:col-span-6">
                <div className="text-xl lg:text-2xl lg:pt-10">
                    Pop Up Dinner para el <b>Festival Argentino</b> en el <b>American Club</b>, <b>HONG KONG</b>, 2017
                    <br /><br />
                    Wine Dinner en <b>La Journée Mondial edu Malbec</b>, <b>CAHORS FRANCIA</b>, 2010
                    <br /><br />
                    Pop Up Dinner en el <b>International Culinary Center</b>, <b>SOHO EN NEW YORK</b>, 2019
                    <br /><br />
                    Gala Dinner con Rutini Wines en el <b>ParkHyatt</b>, <b>SHANGHAI</b>, 2019
                    <br /><br />
                    Wine dinner en el <b>Caesar Palace</b>, <b>LAS VEGAS NEVADA</b>, 2014
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
