import { InstagramEmbed } from "react-social-media-embed";

const POSTS = [
    "https://www.instagram.com/p/DY7nCOllEhH/",
    "https://www.instagram.com/reel/DYNXR5Mqr5K/",
    "https://www.instagram.com/reel/DY0s7ZzKY6k/",
];

export default function EmbedCards() {
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
                    <InstagramEmbed url={url} width="100%" />
                </div>
            ))}
        </div>
    );
}
