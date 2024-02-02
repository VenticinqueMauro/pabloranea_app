import dynamic from "next/dynamic";
import Link from "next/link";

const CardPress = dynamic(() => import("./CardPress"), { ssr: false });


export default function Press() {
    return (
        <section className="max-w-7xl mx-auto py-12 md:py-24 lg:py-32">
            <div className="container grid gap-8 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block  bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Press</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Press Section</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Read about our latest press releases and media coverage.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 ">
                    <CardPress />
                    <CardPress />
                    <CardPress />
                </div>
                <div className="flex justify-center">
                    <Link
                        className="inline-flex h-10 items-center justify-center border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                        href="#"
                    >
                        View All Press Releases
                    </Link>
                </div>
            </div>
        </section>
    )
}
