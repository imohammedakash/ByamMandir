import Link from 'next/link'
import React, { useState } from 'react'
interface SuccessModalProps {
    navigation: string, message: string
}
const SuccessModal: React.FC<SuccessModalProps> = ({ navigation, message }) => {
    return (
        <div className="absolute inset-0 z-[99999] flex items-center justify-center before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#060d20] before:to-[#060d2089]">
            <div className=" w-80 flex items-center justify-center flex-col card gap-5 px-4 pb-8 rounded-lg text-white">
                <div className="">
                    <img loading='lazy' src="https://res.cloudinary.com/dn83xtspp/image/upload/v1676804883/dm4uz3-foekoe_venzs1.gif" alt="" className='' />
                </div>
                <span className='text-white text-2xl font-semibold'>congratulations</span>
                <span className='text-white'>{message}</span>
                <Link href='/login'>
                    <button className='text-white py-2 px-12 border rounded-lg'>Home</button>
                </Link>

            </div>

        </div>
    )
}

export default SuccessModal