import SliderPopups from "@/components/pop-ups/page/sliderPopups";
import type { Dictionary } from "@/lib/i18n";
import { HOST_FORM_URL } from "@/lib/site";

export default function Section3({ dictionary }: { dictionary: Dictionary }) {

    const { title, description1, description2, button } = dictionary.popups.page.section3;


    return (
        <div className="bg-background text-foreground dark">
            <div className="px-3 lg:px-20 py-16 grid grid-cols-12 gap-5 lg:gap-10">
                <h2 className="uppercase text-2xl font-bold w-full col-span-12 lg:col-span-6">{title}</h2>
                <div className="w-fit lg:w-full space-y-10 col-span-12 lg:col-span-6">
                    <p className="text-base lg:text-lg text-justify" style={{ lineHeight: 1.2 }}>
                        {description1}
                        <br /><br />
                        {description2}
                    </p>
                    <a href={HOST_FORM_URL} target="_blank" rel="noopener noreferrer" className="uppercase text-base lg:text-lg w-full lg:w-fit lg:ms-auto block text-center px-5 py-4 bg-brand-olive font-bold">
                        {button}
                    </a>
                </div>
                <SliderPopups />
            </div>
        </div>
    )
}
