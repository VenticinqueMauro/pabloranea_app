import SliderPopups from "@/components/pop-ups/page/sliderPopups";
import { Image } from "@nextui-org/react";

export default function Section3({ dictionary }: any) {

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
                    <button className="uppercase text-base lg:text-lg w-full lg:w-fit lg:ms-auto block px-5 py-4 bg-[#5E6B45] font-bold">
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSfPg5abINAQ4OkZLFPLVRm3dSJSIEjpjBsUheJS5eOs_O-pWg/viewform'>{button}</a>
                    </button>
                </div>
                <SliderPopups />
                {/* <div className="col-span-12">
                    <Image radius="none" className="object-cover w-full h-full" src="/portada/slide5.jpg" alt="popups dinners" width={1920} height={1100} />
                </div> */}
            </div>
        </div>
    )
}
