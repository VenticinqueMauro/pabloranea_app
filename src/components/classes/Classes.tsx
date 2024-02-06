/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Classes({ dictionary }: any) {

    const { title, button } = dictionary.classes

    return (
        <section className="h-screen relative overflow-x-clip">
            {/* <div className="h-full bg-gray-700 flex justify-center items-center imgScroll"></div> */}
            <img
                src="https://estudiarcocina.com/wp-content/uploads/2023/01/Que-es-un-chef-y-cuales-son-sus-funciones.jpg"
                className="min-w-full min-h-full object-cover"
                alt="pop-ups"
            />
            <div className='absolute bottom-5 right-3 p-7 bg-white flex flex-col items-start justify-center gap-4'>
                {
                    Array.from({ length: 3 }, (_, index) => (
                        <div key={index} className=' border-b pb-5 flex flex-col items-start justify-center '>
                            <span className='text-gray-500 font-semibold'>22.03.04</span>
                            <p className='font-bold'>The Macao University of Science en Macao</p>
                            <p className='text-sm italic'>Macao, China</p>
                            <p>Clase técnica de repulgue</p>
                        </div>
                    ))
                }
            </div>
            <div className="absolute top-0 left-0 px-6  lg:px-20 lg:py-10 max-w-md text-justify text-white scroll-parallax">
                <h2 className="text-6xl lg:text-8xl font-bold text-shadow -tracking-widest">{title}</h2>
                <h3 className="text-sm md:text-base pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta illo alias impedit corporis quod cupiditate excepturi eveniet eaque, asperiores quidem illum quae ratione expedita voluptatem nihil molestiae laudantium inventore pariatur ipsum assumenda rem voluptates aliquam? Libero amet nihil iusto, cumque, quidem a aspernatur tempora ratione voluptatibus assumenda debitis et ducimus?</h3>
                <button className="flex justify-between w-full pt-10 showAnimate">
                    <span>
                        {`>>>>>>`}
                    </span>
                    {button}
                </button>
            </div>
        </section>
    )
}
