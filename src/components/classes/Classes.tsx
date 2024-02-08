/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

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
            <div className='hidden absolute bottom-5 right-3 px-1 bg-white lg:flex flex-col items-start justify-center gap-4 h-[400px] overflow-y-auto'>
                {
                    Array.from({ length: 5 }, (_, index) => (
                        <div key={index} className='cursor-pointer px-3 border-b border-dashed py-5 flex flex-col items-start justify-center '>
                            <span className='text-gray-500 font-semibold'>22.03.04</span>
                            <p className='font-bold'>The Macao University of Science en Macao</p>
                            <p className='text-sm italic'>Macao, China</p>
                            <p>Clase técnica de repulgue</p>
                        </div>
                    ))
                }
            </div>
            <div className="absolute bottom-32 left-0 px-6  lg:px-20 max-w-md text-justify text-white scroll-parallax">
                <h2 className="text-6xl lg:text-7xl font-bold text-shadow -tracking-widest">{title}</h2>
                <h3 className="text-sm md:text-base pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta illo alias impedit corporis quod cupiditate excepturi eveniet eaque, asperiores quidem illum quae ratione expedita voluptatem nihil molestiae laudantium inventore pariatur ipsum assumenda rem voluptates aliquam? Libero amet nihil iusto, cumque, quidem a aspernatur tempora ratione voluptatibus assumenda debitis et ducimus?</h3>
                <button className="flex justify-between w-fit gap-10 font-bold pt-10 showAnimate">
                    <span>
                        {`>>>>>>`}
                    </span>
                    {button}
                </button>
            </div>
        </section>
    )
}
