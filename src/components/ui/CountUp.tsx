'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';

// True while the element is on screen (re-arms every time it re-enters).
export function useInView<T extends Element>(): [RefObject<T | null>, boolean] {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return [ref, inView];
}

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

// Counts from 0 to `end` while `active`; renders nothing otherwise.
export default function CountUp({ end, duration = 6, active }: { end: number; duration?: number; active: boolean }) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!active) return;
        // Reduced motion: jump straight to the final value on the first frame.
        const ms = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : duration * 1000;
        let frame: number;
        const start = performance.now();
        const tick = (now: number) => {
            const t = ms ? Math.min((now - start) / ms, 1) : 1;
            setValue(Math.round(easeOutExpo(t) * end));
            if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => {
            cancelAnimationFrame(frame);
            setValue(0);
        };
    }, [active, end, duration]);

    return active ? <>{value}</> : null;
}
