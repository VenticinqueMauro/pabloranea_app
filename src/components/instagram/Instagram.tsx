'use client'

import { InstagramEmbed } from 'react-social-media-embed';
import EmbedCards from './EmbedCards';

export const Instagram = () => {

    return (
        <section id='community' className='flex justify-center'>
            <div className='max-w-7xl  gap-5 px-6 lg:px-0  py-10'>
                <h2 className="text-5xl lg:text-8xl font-bold text-shadow -tracking-[4px] lg:-tracking-[6px] py-20 text-center" style={{ lineHeight: 0.8 }}>Sigue nuestro tour 2024</h2>
                <EmbedCards />
            </div>
        </section>
    )
}