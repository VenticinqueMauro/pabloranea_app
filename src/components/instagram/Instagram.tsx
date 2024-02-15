'use client'

import { InstagramEmbed } from 'react-social-media-embed';

export const Instagram = () => {

    return (
        <section className='flex justify-center'>
            <div className='max-w-7xl  gap-5 px-6 lg:px-0  py-10'>
                <h2 className="text-5xl lg:text-8xl font-bold text-shadow -tracking-[4px] lg:-tracking-[6px] py-20 text-center" style={{ lineHeight: 0.8 }}>Sigue nuestro tour 2024</h2>
                <div className='flex flex-col lg:flex-row gap-4'>
                    <InstagramEmbed url="https://www.instagram.com/reel/C2zuz0tLu81/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} height={615} />
                    <InstagramEmbed url="https://www.instagram.com/p/C1c60-LOafQ/" width={328} height={615} />
                    <InstagramEmbed url="https://www.instagram.com/reel/C2SyXnyOrMm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} height={615} />
                </div>
            </div>
        </section>
    )
}