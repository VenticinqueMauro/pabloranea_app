import { InstagramEmbed } from "react-social-media-embed";

export default function EmbedCards() {
    return (
        <div className='flex flex-col items-center lg:justify-center lg:flex-row gap-4'>
            <InstagramEmbed url="https://www.instagram.com/reel/C2zuz0tLu81/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} height={615} />
            <InstagramEmbed url="https://www.instagram.com/p/C1c60-LOafQ/" width={328} height={615} />
            <InstagramEmbed url="https://www.instagram.com/reel/C2SyXnyOrMm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} height={615} />
        </div>
    )
}
