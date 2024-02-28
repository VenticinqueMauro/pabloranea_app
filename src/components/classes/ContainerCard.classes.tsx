import Card from "./Card";

export default function ContainerCardClasses() {
    return (
        <>
            <div className='absolute bottom-5 left-1/2 -translate-x-1/2 ml-auto sm:-translate-x-0 w-full px-3 sm:w-fit sm:right-3 sm:px-1 lg:flex flex-col items-start justify-center gap-2 max-h-[300px] lg:max-h-[400px] overflow-y-auto overscroll-auto focus:overscroll-contain container-classes z-10 hide-scrollbar' style={{ WebkitOverflowScrolling: 'touch' }}>

                <div className='mt-24 space-y-2 '>
                    {
                        Array.from({ length: 4 }, (_, index) => (
                            <Card key={index} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
