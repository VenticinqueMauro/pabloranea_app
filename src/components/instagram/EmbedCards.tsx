import { InstagramEmbed } from "react-social-media-embed";

export default function EmbedCards() {
    return (
        <div className='flex flex-col items-center lg:justify-center lg:flex-row gap-4'>
            <InstagramEmbed url="https://www.instagram.com/reel/C5o4wHIuZaB/" width={328} height={615} />
            <InstagramEmbed url="https://www.instagram.com/reel/C7mqPkVOHXi/" width={328} height={615} />
            <InstagramEmbed url="https://www.instagram.com/reel/C7h1kanu3KL/" width={328} height={615} />
        </div>
    )
}
