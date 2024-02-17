/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import ContainerCardClasses from './ContainerCard.classes'
import { ChevronDown } from 'lucide-react'

export default function Classes({ dictionary }: any) {

    const { title, description, button } = dictionary.classes

    return (
        <section className="min-h-screen relative overflow-x-clip">
            <div className={`imageContainer `}>
                <div className={`imageOverlay-classes`} />
                <Image
                    src='/classes/classes.jpg'
                    width={1920}
                    height={1023}
                    alt='partners'
                    className="object-cover w-full h-screen sm:h-screen"
                />
            </div>
            <ContainerCardClasses />
            <div className="absolute top-0 left-0 px-6 lg:px-20 max-w-lg text-justify text-white scroll-parallax z-10">
                <h2 className="text-6xl lg:text-7xl font-bold text-shadow -tracking-[3px] lg:-tracking-[3px]" style={{ lineHeight: 0.8 }}>{title}</h2>
                <h3 className="text-sm md:text-base pt-5" style={{lineHeight: 1.2}}>{description}</h3>
            </div>
        </section>
    )
}

{/* <button className="flex justify-between w-fit gap-10 font-bold pt-10">
    <span>
        {`>>>>>>`}
    </span>
    {button}
</button> */}