import { InstagramEmbed } from "react-social-media-embed";

export default function EmbedCards() {
    return (
        <div className='flex flex-col gap-4 items-center lg:justify-center lg:flex-row'>
            <InstagramEmbed url="https://www.instagram.com/p/DY7nCOllEhH/" width={328} height={615} />
            <InstagramEmbed url="https://www.instagram.com/reel/DYNXR5Mqr5K/" width={328} height={615} />
            <InstagramEmbed url="https://www.instagram.com/reel/DY0s7ZzKY6k/" width={328} height={615} />
        </div>
    )
}
