import { InstagramEmbed } from "react-social-media-embed";

export default function EmbedCards() {
    return (
        <div className='flex flex-col items-center lg:justify-center lg:flex-row gap-4'>
            <InstagramEmbed url="https://www.instagram.com/reel/DAZUCcVP9rz/" width={328} height={615} />
            <InstagramEmbed url="https://www.instagram.com/reel/C_8nyMNOsXf/" width={328} height={615} />
            <InstagramEmbed url="https://www.instagram.com/reel/C_qzXwnuEoT/" width={328} height={615} />
        </div>
    )
}
