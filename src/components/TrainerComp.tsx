"use client"
import React from 'react'
interface TrainerCompProps {
    border: string;
    name: string;
    description: string;
    image: string;
}
const TrainerComp: React.FC<TrainerCompProps> = ({ border, name, description, image }) => {
    return (
        <div className='w-[320px] ' >
            <div className={`w-full h-[300px] rounded-b-sm rounded-t-full px-4 pt-4 overflow-hidden border ${border}`}>
                <img loading='lazy' className='w-full h-full object-cover rounded-b-sm rounded-t-full bg-white' src={image} alt="" />
            </div>
            <div className="w-full flex items-start justify-center flex-col">
                <h2 className='text-white tracking-wider mt-1'>{name}</h2>
                <h2 className='text-white tracking-wider mt-1 text-sm font-mono'>{description}</h2>
            </div>
            <div className="w-full flex items-center justify-end ">
                <span className="text-3xl mb-1 text-white">
                    &#8594;
                </span>
            </div>
        </div>
    )
}

export default TrainerComp