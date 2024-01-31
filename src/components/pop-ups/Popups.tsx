/* eslint-disable @next/next/no-img-element */

export default function Popups() {
    return (
        <section className="h-screen relative">
            {/* <div className="h-full bg-gray-700 flex justify-center items-center imgScroll"></div> */}
            <img
                src="https://estudiarcocina.com/wp-content/uploads/2023/01/Que-es-un-chef-y-cuales-son-sus-funciones.jpg"
                className="min-w-full min-h-full object-cover imgScroll"
                alt="pop-ups"
            />
            <div className="absolute top-0 left-0 px-20 py-10 max-w-md text-justify text-white scroll-parallax">
                <h2 className="text-8xl font-bold text-shadow -tracking-widest">the <br />concept</h2>
                <h3 className="pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi reiciendis autem nobis, architecto deleniti maiores eos sapiente porro minima.</h3>
                <button className="flex justify-between w-full pt-10 showAnimate">
                    <span>
                        {`>>>>>>`}
                    </span>
                    discover more
                </button>
            </div>
        </section>
    )
}
