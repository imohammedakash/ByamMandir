import Link from 'next/link';
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
interface excerciseContainerProps {
    category: string[];
    tutorialImage: string;
    id: string;
}
const ExcerciseContainer: React.FC<excerciseContainerProps> = ({ category, tutorialImage, id }) => {
    return (
        <div className='bg-white rounded-lg overflow-hidden p-4 box-border w-80 flex flex-col gap-3'>
            <div className="bg-white h-56 w-72">
                <img loading='lazy' src={tutorialImage} alt="" className='h-56 w-72 object-contain' />
            </div>
            <div className="flex flex-col gap-4">
                <div className='flex items-center justify-start flex-wrap gap-4'>
                    <span>Target Muscles :</span>
                    {
                        category.slice(0, 2).map((categ, index) => (
                            <span title={categ} className={` cursor-default px-3 py-1 rounded-md text-[#0b1528] font-poppins font-medium text-sm  ${index % 2 == 0 ? 'bg-red-400' : 'bg-green-500'}`} key={index}>{categ}</span>
                        ))

                    }</div>
                <Link href={`/exercise/:${id}`} className='flex w-full items-center justify-end'>Know More <BiChevronRight className='text-2xl text-gray-700' /></Link>
            </div>
        </div>
    )
}

export default ExcerciseContainer