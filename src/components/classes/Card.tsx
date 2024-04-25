import Link from "next/link"
import { Class } from "./ContainerCard.classes"
import { ExternalLink } from 'lucide-react'



export default function Card({ classItem }: { classItem: Class }) {
    return (
        <>
            {
                classItem?.link ?
                    <Link href={classItem.link} className='lg:hover:bg-black/50 transition-colors duration-200 cursor-pointer bg-black/10 backdrop-blur mt-2 py-3 px-3  flex flex-col items-start justify-center shadow-md relative overflow-x-hidden text-sm lg:text-base lg:max-w-[400px]'>
                        <div className='absolute top-0 flex w-full justify-center' >
                            <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
                        </div>
                        <span className='text-gray-300 font-semibold light'>{classItem.date}</span>
                        <p className='font-bold text-white '>{classItem.description}</p>
                        <p className='text-xs lg:text-sm italic light text-gray-200'>{classItem.location}</p>
                        <div className='absolute top-1 right-1 text-white hover:text-blue-500 flex items-center'>
                            <p className='mr-2 text-sm cursor-pointer '>Buy tickets</p>
                            <ExternalLink size={16} />
                        </div>
                    </Link >
                    :
                    <div className='lg:hover:bg-black/50 transition-colors duration-200 cursor-pointer bg-black/10 backdrop-blur mt-2 py-3 px-3  flex flex-col items-start justify-center shadow-md relative overflow-x-hidden text-sm lg:text-base lg:max-w-[400px]'>
                        <div className='absolute top-0 flex w-full justify-center'>
                            <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
                        </div>
                        <span className='text-gray-300 font-semibold light'>{classItem.date}</span>
                        <p className='font-bold text-white '>{classItem.description}</p>
                        <p className='text-xs lg:text-sm italic light text-gray-200'>{classItem.location}</p>
                    </div>
            }
        </>
    )
}
