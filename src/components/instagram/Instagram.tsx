'use client'

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const EmbedCards = dynamic(() => import('./EmbedCards'), { ssr: false });

const textEn = 'FOLLOW OUR TOUR 2026';
const textEs = 'Sigue nuestro tour 2026';

function EmbedSkeleton() {
    return (
        <div className='flex flex-col gap-4 items-center w-full lg:justify-center lg:flex-row'>
            {[0, 1, 2].map((i) => (
                <div key={i} className="w-full max-w-[328px] min-h-[615px] rounded-md bg-gray-100 animate-pulse" />
            ))}
        </div>
    );
}

export default function Instagram() {

    const pathname = usePathname();
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    // Defer loading Instagram's heavy embed.js + iframes until the section is
    // near the viewport, instead of on initial page load. rootMargin preloads
    // a bit before it actually enters view so it feels instant when reached.
    useEffect(() => {
        if (inView) return;
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '400px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [inView]);

    return (
        <section id='community' className='flex overflow-x-hidden justify-center items-center px-3 lg:px-0'>
            <div className='max-w-7xl w-full mx-auto py-10'>
                <h2 className="text-5xl lg:text-8xl font-bold text-shadow -tracking-[4px] lg:-tracking-[6px] py-20 text-center" style={{ lineHeight: 0.8 }}>
                    {pathname === '/en' ? textEn : textEs}
                </h2>
                <div ref={ref}>
                    {inView ? <EmbedCards /> : <EmbedSkeleton />}
                </div>
            </div>
        </section>
    )
}
