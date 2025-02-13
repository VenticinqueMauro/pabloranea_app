'use client';

import Marquee from "react-fast-marquee";
import Image from "next/image";

const logosPress = [
    {
        src: '/logospress/diariouno.svg',
        alt: 'diariouno',
        width: 128,
        heigth: 48
    },
    {
        src: '/logospress/elcomercio.png',
        alt: 'elcomercio',
        width: 321,
        heigth: 51
    },
    {
        src: '/logospress/filonews.svg',
        alt: 'filonews',
        width: 124,
        heigth: 25
    },
    {
        src: '/logospress/Gourmet.svg',
        alt: 'gourmet',
        width: 46,
        heigth: 46
    },
    {
        src: '/logospress/mdz200.png',
        alt: 'mdz',
        width: 200,
        heigth: 87
    },
    {
        src: '/logospress/mingpaonews.png',
        alt: 'mingpaonews',
        width: 243,
        heigth: 65
    },
    {
        src: '/logospress/placeres.png',
        alt: 'placeres',
        width: 1648,
        heigth: 414
    },
    {
        src: '/logospress/trinche.png',
        alt: 'trinche',
        width: 752,
        heigth: 246
    },
    {
        src: '/logospress/viapais.svg',
        alt: 'viapais',
        width: 124,
        heigth: 36
    },
    {
        src: '/logospress/vinomanos.png',
        alt: 'vinomanos',
        width: 300,
        heigth: 105
    },
]

export default function MarqueeContainer() {
    return (
        <Marquee
            autoFill={true}
            speed={100}
            className="items-center"
        >
            {
                logosPress.map(logo => (
                    <Image
                        key={logo.alt}
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.heigth}
                        className={`${logo.alt === 'viapais' ? 'bg-[#ff6e00] px-3 py-2' : ''} object-contain object-center mx-6 lg:mx-12 max-w-[100px] lg:max-w-[120px] lg:mt-10 mb-10`}
                    />

                ))
            }
        </Marquee>
    )
}
