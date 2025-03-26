import { InstagramEmbed } from "react-social-media-embed";

export default function EmbedCards() {
    return (
        <div className='flex flex-col gap-4 items-center lg:justify-center lg:flex-row'>
            <InstagramEmbed url="https://www.instagram.com/p/DHcNm1Vug6M/" width={328} height={615} />
            <InstagramEmbed url="https://www.instagram.com/p/DHQ81_UugfL/?img_index=3" width={328} height={615} />
            <InstagramEmbed url="https://www.instagram.com/p/DF-_kdEperN/" width={328} height={615} />
        </div>
    )
}
