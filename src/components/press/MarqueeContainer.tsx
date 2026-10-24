import Image from "next/image";

const logosPress = [
    { src: '/logospress/diariouno.svg', alt: 'Diario Uno', width: 128, height: 48 },
    { src: '/logospress/elcomercio.png', alt: 'El Comercio', width: 321, height: 51 },
    { src: '/logospress/filonews.svg', alt: 'Filo News', width: 124, height: 25 },
    { src: '/logospress/Gourmet.svg', alt: 'El Gourmet', width: 46, height: 46 },
    { src: '/logospress/mdz200.png', alt: 'MDZ', width: 200, height: 87 },
    { src: '/logospress/mingpaonews.png', alt: 'Ming Pao', width: 243, height: 65 },
    { src: '/logospress/placeres.png', alt: 'Placeres', width: 1648, height: 414 },
    { src: '/logospress/trinche.png', alt: 'El Trinche', width: 752, height: 246 },
    { src: '/logospress/viapais.svg', alt: 'Vía País', width: 124, height: 36 },
    { src: '/logospress/vinomanos.png', alt: 'Vinómanos', width: 300, height: 105 },
]

// Pure-CSS marquee: the track holds the logo set twice (each half wide enough
// for large screens) and slides by -50% in a loop, so it never shows a gap.
export default function MarqueeContainer() {
    const half = [...logosPress, ...logosPress];

    return (
        <div className="overflow-hidden" role="region" aria-label="Press">
            <ul className="marquee-track flex w-max items-center">
                {[...half, ...half].map((logo, i) => (
                    <li key={i} aria-hidden={i >= logosPress.length ? true : undefined}>
                        <Image
                            src={logo.src}
                            alt={i >= logosPress.length ? '' : logo.alt}
                            width={logo.width}
                            height={logo.height}
                            className={`${logo.alt === 'Vía País' ? 'bg-[#ff6e00] px-3 py-2' : ''} object-contain object-center mx-6 lg:mx-12 max-w-[100px] lg:max-w-[120px] lg:mt-10 mb-10`}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
