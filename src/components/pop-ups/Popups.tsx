/* eslint-disable @next/next/no-img-element */

export default async function Popups({ dictionary }: any) {

    return (
        <section className="h-screen relative overflow-x-clip">
            {/* <div className="h-full bg-gray-700 flex justify-center items-center imgScroll"></div> */}
            <img
                src="https://estudiarcocina.com/wp-content/uploads/2023/01/Que-es-un-chef-y-cuales-son-sus-funciones.jpg"
                className="min-w-full min-h-full object-cover imgScroll "
                alt="pop-ups"
            />
            <div className="absolute top-0 left-0 px-6  lg:px-20 ;gLpy-10 max-w-md text-justify text-white scroll-parallax">
                <h2 className="text-6xl lg:text-8xl font-bold text-shadow -tracking-widest">{dictionary.popups.title1}<br />{dictionary.popups.title2}</h2>
                <h3 className="text-sm md:text-base pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta illo alias impedit corporis quod cupiditate excepturi eveniet eaque, asperiores quidem illum quae ratione expedita voluptatem nihil molestiae laudantium inventore pariatur ipsum assumenda rem voluptates aliquam? Libero amet nihil iusto, cumque, quidem a aspernatur tempora ratione voluptatibus assumenda debitis et ducimus?</h3>
                <button className="flex justify-between w-full pt-10 showAnimate">
                    <span>
                        {`>>>>>>`}
                    </span>
                    {dictionary.popups.button}
                </button>
            </div>
        </section>
    )
}
