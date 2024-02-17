
export default function About({ dictionary }: any) {

    const { title, description, button } = dictionary.aboutpablo;

    return (
        <section id='about' className="h-screen flex flex-col justify-center scroll-reveal mt-10 bg-black text-white pt-10 ">
            <h2 className="text-5xl lg:text-9xl font-bold text-center -tracking-widest lg:-tracking-[16px] letterScroll">{title}</h2>
            <div className="px-6 lg:px-0 text-justify pt-10 pb-5 lg:py-10 max-w-7xl mx-auto">
                <p className="font-light text-xl lg:text-2xl h-full light">
                    <span>
                        {description}
                    </span>
                    <button className="flex justify-between gap-10 pt-10  w-fit font-bold ms-auto">
                        <span>
                            {`>>>>>>`}
                        </span>
                        {button}
                    </button>
                </p>
            </div>
        </section>
    )
}
