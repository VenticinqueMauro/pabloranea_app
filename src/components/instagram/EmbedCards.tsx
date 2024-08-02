import { InstagramEmbed } from "react-social-media-embed";

export default function EmbedCards() {
    return (
        <div className='flex flex-col items-center lg:justify-center lg:flex-row gap-4'>
            <InstagramEmbed url="https://www.instagram.com/p/C92cL8uuqCA/" width={328} height={615} />
            <InstagramEmbed url="https://www.instagram.com/p/C9x5ZUYupIN/" width={328} height={615} />
            <InstagramEmbed url="https://www.instagram.com/reel/C8uaiDKunGR/" width={328} height={615} />
        </div>
    )
}
