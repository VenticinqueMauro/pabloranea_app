import Card from "./Card";

export interface Class {
    date: string;
    location: string;
    description: string;
    link?: string;
}

const classes: Class[] = [
    {
        date: 'Feb 12th, 2025',
        location: 'Vistapueblo, Mendoza - Argentina',
        description: 'Cooking class with María Urrutigoity'
    },
    {
        date: 'Nov 23rd, 2024',
        location: 'Urban Kitchen, Lima - Perú',
        description: 'Cooking class with Chef Ignacio Barrios'
    },
    {
        date: 'Dic 2nd, 2024',
        location: 'Urritigoity Cocina, Mendoza - Argentina',
        description: 'Cooking class with María Urrutigoity'
    },
];




export default function ContainerCardClasses() {
    return (
        <>
            <div className='absolute bottom-5 left-1/2 -translate-x-1/2 ml-auto sm:-translate-x-0 w-full px-3 sm:w-fit sm:right-3 sm:px-1 lg:flex flex-col items-start justify-center gap-2 max-h-[250px] lg:max-h-[400px] overflow-y-auto overscroll-auto focus:overscroll-contain container-classes z-10 hide-scrollbar' style={{ WebkitOverflowScrolling: 'touch' }}>

                <div className='mt-24 space-y-2 md:mt-0'>
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
