/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import ContainerCardClasses from './ContainerCard.classes'
import { ChevronDown } from 'lucide-react'

export default function Classes({ dictionary }: any) {

    const { title, description, button } = dictionary.classes

    return (
        <section className="min-h-screen relative overflow-x-clip">
            <div className='bg-black'>
                <Image
                    src='/classes/classes.jpeg'
                    width={1920}
                    height={1023}
                    alt='partners'
                    className="object-cover w-full h-screen sm:h-screen "
                    style={{
                        maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.5), #000000cc)'
                    }}
                />
            </div>
            <p className='hidden absolute top-1/2 right-80 text-white lg:flex'>
                <ChevronDown className='animate-bounce mr-3 mt-3 bg-black rounded-full' size={30} />
            </p>
            <ContainerCardClasses />
            <div className="absolute bottom-32 left-0 px-6  lg:px-20 max-w-md text-justify text-white scroll-parallax">
                <h2 className="text-6xl lg:text-7xl font-bold text-shadow -tracking-[3px] lg:-tracking-[6px]" style={{ lineHeight: 0.8 }}>{title}</h2>
                <h3 className="text-sm md:text-base pt-5">{description}</h3>
                {/* <button className="flex justify-between w-fit gap-10 font-bold pt-10">
                    <span>
                        {`>>>>>>`}
                    </span>
                    {button}
                </button> */}
            </div>
        </section>
    )
}
