/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import ContainerCardClasses from './ContainerCard.classes'

export default function Classes({ dictionary }: any) {

    const { title, button } = dictionary.classes

    return (
        <section className="min-h-screen relative overflow-x-clip">
            <div className='bg-black'>
                <Image
                    src='/classes/classes.jpg'
                    width={1980}
                    height={1023}
                    alt='partners'
                    className="object-cover w-full h-screen sm:h-screen"
                    style={{
                        maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.5), #000000cc)'
                    }}
                />
            </div>
            <ContainerCardClasses />
            <div className="absolute bottom-32 left-0 px-6  lg:px-20 max-w-md text-justify text-white scroll-parallax">
                <h2 className="text-6xl lg:text-7xl font-bold text-shadow -tracking-widest">{title}</h2>
                <h3 className="text-sm md:text-base pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta illo alias impedit corporis quod cupiditate excepturi eveniet eaque, asperiores quidem illum quae ratione expedita voluptatem nihil molestiae laudantium inventore pariatur ipsum assumenda rem voluptates aliquam? Libero amet nihil iusto, cumque, quidem a aspernatur tempora ratione voluptatibus assumenda debitis et ducimus?</h3>
                <button className="flex justify-between w-fit gap-10 font-bold pt-10 scroll-reveal">
                    <span>
                        {`>>>>>>`}
                    </span>
                    {button}
                </button>
            </div>
        </section>
    )
}
