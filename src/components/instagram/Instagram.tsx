'use client'

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const EmbedCards = dynamic(() => import('./EmbedCards'), { ssr: false });

const textEn = 'FOLLOW OUR TOUR 2024';
const textEs = 'Sigue nuestro tour 2024';

export default function Instagram() {

    const pathname = usePathname();

    return (
        <section id='community' className='flex justify-center items-center px-3 lg:px-0'>
            <div className='max-w-7xl mx-auto py-10'>
                <h2 className="text-5xl lg:text-8xl font-bold text-shadow -tracking-[4px] lg:-tracking-[6px] py-20 text-center" style={{ lineHeight: 0.8 }}>
                    {pathname === '/en' ? textEn : textEs}
                </h2>
                <EmbedCards />
            </div>
        </section>
    )
}