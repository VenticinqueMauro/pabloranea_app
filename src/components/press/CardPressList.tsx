'use client';

import { useEffect, useMemo, useRef, useState } from "react";
import { pressMap, PressCard } from "./CardPress";

const INITIAL = 3;
const STEP = 3;

// Full press list with incremental ("load more on scroll") rendering.
// Only the visible cards mount, so their remote images load progressively
// instead of all ~22 at once on first paint.
export default function CardPressList({ lang }: { lang: 'es' | 'en' }) {

    const sorted = useMemo(
        () => [...pressMap].sort((a, b) => b.date.getTime() - a.date.getTime()),
        []
    );

    const [visible, setVisible] = useState(INITIAL);
    const sentinelRef = useRef<HTMLDivElement | null>(null);

    const hasMore = visible < sorted.length;

    useEffect(() => {
        if (!hasMore) return;
        const node = sentinelRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible((v) => Math.min(v + STEP, sorted.length));
                }
            },
            { rootMargin: "300px" }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [hasMore, sorted.length]);

    return (
        <div className="px-3 lg:px-0">
            {sorted.slice(0, visible).map((press, i) => (
                <PressCard
                    key={press.title}
                    press={press}
                    lang={lang}
                    isLast={i === sorted.length - 1}
                />
            ))}
            {hasMore && <div ref={sentinelRef} aria-hidden className="h-10 w-full" />}
        </div>
    );
}
