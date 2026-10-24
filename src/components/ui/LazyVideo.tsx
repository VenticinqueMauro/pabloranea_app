'use client';

import { useEffect, useRef, type VideoHTMLAttributes } from 'react';

type Props = Omit<VideoHTMLAttributes<HTMLVideoElement>, 'src' | 'autoPlay'> & {
    src: string;
};

// Muted, looping video that only downloads once the page has finished loading
// and the video is actually on screen (so it never competes with critical
// resources), and pauses while off screen. With reduced motion it stays on its
// poster until the visitor presses play (when controls are shown).
export default function LazyVideo({ src, ...props }: Props) {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = ref.current;
        if (!video) return;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (!video.getAttribute('src')) video.src = src;
                    if (!reduceMotion) video.play().catch(() => {});
                } else if (!video.paused) {
                    video.pause();
                }
            },
            { threshold: 0.25 }
        );
        const start = () => observer.observe(video);
        if (document.readyState === 'complete') start();
        else window.addEventListener('load', start, { once: true });
        return () => {
            window.removeEventListener('load', start);
            observer.disconnect();
        };
    }, [src]);

    return <video ref={ref} muted loop playsInline preload="none" {...props} />;
}
