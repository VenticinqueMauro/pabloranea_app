/* eslint-disable @next/next/no-img-element */
import ContainerCardClasses from './ContainerCard.classes'

export default function Classes({ dictionary }: any) {

    const { title, description, button } = dictionary.classes

    return (
        <section id='classes' className="min-h-screen relative overflow-x-clip">
            <ContainerCardClasses />
            <div className={`imageContainer-classes`}>
                <div className={`imageOverlay-classes`} />
                <div className={`contentContainer absolute top-0 left-0 px-6  lg:px-20 py-10 lg:py-16 max-w-lg text-justify text-white scroll-parallax`}>
                    <h2 className="text-6xl lg:text-7xl font-bold text-shadow -tracking-[3px] lg:-tracking-[3px]" style={{ lineHeight: 0.8 }}>{title}</h2>
                    <h3 className="text-sm md:text-base pt-5 text-start" style={{ lineHeight: 1.2 }}>{description}</h3>
                </div>
            </div>
        </section>
    )
}