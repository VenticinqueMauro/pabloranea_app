import Card from "./Card";

export interface Class {
    date: string;
    location: string;
    description: string;
}

const classes: Class[] = [
    {
        date: '29.04 – 02.06',
        location: 'Houston – San Antonio, Texas', 
        description: 'May 8th Food & Wine pairing class at Central Market in Houston'
    },
    {
        date: '03.06 – 22.07',
        location: 'New York – Washington DC – Asbury Pk, East Coast', 
        description: 'June xx Argentinian wine class at ICE Institute of Culinary Education in Battery Park New York'
    }
];


export default function ContainerCardClasses() {
    return (
        <>
            <div className='absolute bottom-5 left-1/2 -translate-x-1/2 ml-auto sm:-translate-x-0 w-full px-3 sm:w-fit sm:right-3 sm:px-1 lg:flex flex-col items-start justify-center gap-2 max-h-[250px] lg:max-h-[400px] overflow-y-auto overscroll-auto focus:overscroll-contain container-classes z-10 hide-scrollbar' style={{ WebkitOverflowScrolling: 'touch' }}>

                <div className='mt-24 space-y-2 '>
                    {
                        classes.map((classItem) => (
                            <Card key={classItem.date} classItem={classItem} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
