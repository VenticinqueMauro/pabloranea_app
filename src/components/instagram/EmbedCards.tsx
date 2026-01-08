import { InstagramEmbed } from "react-social-media-embed";

export default function EmbedCards() {
    return (
        <div className='flex flex-col gap-4 items-center lg:justify-center lg:flex-row'>
            <InstagramEmbed url="https://www.instagram.com/reel/DJ9vZAyuYuN/?utm_source=ig_web_copy_link&igsh=MTRkcDZ1NGN6ZnZ6cA%3D%3D" width={328} height={615} />
            <InstagramEmbed url="https://www.instagram.com/reel/DS7tWHyjqz_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} height={615} />
            <InstagramEmbed url="https://www.instagram.com/p/DQ-YLS8DibX/" width={328} height={615} />
        </div>
    )
}
