'use client';

import Script from "next/script";
import { useEffect } from "react";

const POSTS = [
    "https://www.instagram.com/reel/DextLlJKVzH/",
    "https://www.instagram.com/reel/DekEkxtqAtR/",
    "https://www.instagram.com/reel/DeVGHOVKkdB/",
];

declare global {
    interface Window {
        instgrm?: { Embeds: { process: () => void } };
    }
}

// Instagram's official embed: blockquotes that embed.js upgrades to iframes.
export default function EmbedCards() {
    // If embed.js is already on the page (client-side navigation), re-scan.
    useEffect(() => {
        window.instgrm?.Embeds.process();
    }, []);

    return (
        <div className='flex flex-col gap-4 items-center w-full lg:justify-center lg:flex-row'>
            {POSTS.map((url) => (
                // The wrapper caps the width at 328px and clips the transient
                // over-width (Instagram's raw blockquote is up to 540px before
                // embed.js processes it) that otherwise causes horizontal scroll.
                // min-h reserves the space so the page doesn't jump while loading.
                <div
                    key={url}
                    className="w-full max-w-[328px] min-h-[615px] overflow-hidden rounded-md bg-gray-50"
                >
                    <blockquote
                        className="instagram-media"
                        data-instgrm-permalink={url}
                        data-instgrm-version="14"
                        style={{ width: '100%', minWidth: 0, margin: 0, border: 0 }}
                    >
                        <a href={url} target="_blank" rel="noopener noreferrer">Instagram</a>
                    </blockquote>
                </div>
            ))}
            <Script
                src="https://www.instagram.com/embed.js"
                strategy="lazyOnload"
                onReady={() => window.instgrm?.Embeds.process()}
            />
        </div>
    );
}
