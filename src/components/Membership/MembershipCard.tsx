import Link from 'next/link'
import React from 'react'
import { BsCheck2Circle, BsArrowRight } from 'react-icons/bs'

interface MembershipProps {
    Icon: string, plainName: string, cost: string, text1: string, text2: string, text3: string
}


const MembershipCard: React.FC<MembershipProps> = ({ Icon, plainName, cost, text1, text2, text3 }) => {
    return (
        <div className={` w-[360px] text-white p-8 rounded overflow-hidden ${plainName === 'premium' ? ' bg-gradient-to-t from-orange-500 to-yellow-300 ' : 'card'}`}>
            <div className={`flex flex-col items-start justify-start gap-4`}>
                <div className="flex flex-col items-start justify-start gap-3">
                    <div className={`text-5xl ${plainName === 'premium' ? ' text-white ' : 'text-[#eb7c3e]'}`}>
                        <Icon />
                    </div>
                    <span className='font-semibold uppercase text-lg'>{plainName} Plan</span>
                </div>
                <span className='font-semibold uppercase text-4xl'>{cost}</span>
            </div>
            <div className="mt-8 flex flex-col gap-2">
                <div className="w-full flex items-center justify-start gap-4">
                    <BsCheck2Circle />
                    <span className='w-full overflow-hidden whitespace-nowrap overflow-ellipsis'>{text1}</span>
                </div>
                <div className="w-full flex items-center justify-start gap-4">
                    <BsCheck2Circle />
                    <span>{text2}</span>
                </div>
                <div className="w-full flex items-center justify-start gap-4">
                    <BsCheck2Circle />
                    <span className='w-full overflow-hidden whitespace-nowrap overflow-ellipsis'>{text3}</span>
                </div>
                <Link href={`/membership/${plainName}`} className="flex items-center justify-start gap-2 mt-2">
                    <span className='w-full overflow-hidden whitespace-nowrap overflow-ellipsis'>See more Benefits</span>
                    <BsArrowRight />
                </Link>
            </div>
            <div className={` flex items-center justify-center rounded-md font-medium tracking-wide cursor-pointer relative p-3 mt-8 mb-3 ${plainName === 'premium' ? ' bg-white ' : 'border border-[#ec7b35] '} `}>
                <span className={`${plainName === 'premium' ? ' text-[#ec7b35] ' : 'text-white'}`} >Join Now</span>
            </div>
        </div>
    )
}

export default MembershipCard