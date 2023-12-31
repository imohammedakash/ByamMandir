"use client"
import Link from 'next/link'
import React from 'react'

const Explore = () => {
    return (
        <div className="w-full flex items-center justify-center my-10">
            <div className='w-[80%] flex sm:items-center justify-center sm:justify-between sm:flex-row flex-col '>
                <div className=" sm:mb-0 mb-10 sm:w-1/2 w-full flex items-start justify-center flex-col ">
                    <div className="sm:w-auto w-full flex sm:items-start items-center justify-center flex-col">
                        <h2 className='w-full sm:text-6xl text-3xl sm:text-start text-center text-white font-mono'>Explore</h2>
                        <h2 className=' w-full sm:text-6xl text-3xl sm:text-start text-center text-white font-mono'>Our fitness freek</h2>
                    </div>
                    <p className='w-full text-white tracking-wider font-mono sm:items-start items-center my-8 text-sm sm:text-start text-center'>Transform your body, energize your spirit. Our gym fosters strength, community, and wellness. Embrace the journey to a healthier youdifferent trainers here</p>
                    <div className="w-full flex items-center sm:justify-start justify-center">
                        <Link href="/membership" className="bg-white rounded border px-6 flex items-center justify-center gap-1">
                            <span>
                                Get Started
                            </span>
                            <span className="text-3xl mb-1 ">
                                &#8594;
                            </span>

                        </Link>
                    </div>
                </div>
                <div className="sm:w-1/2 w-full hidden sm:flex flex-wrap items-start justify-center my-10 gap-10">
                    <img className='w-full' src="https://res-console.cloudinary.com/dn83xtspp/thumbnails/v1/image/upload/v1703789054/NzAxNTkxMF9nYm5kZXc=/grid_landscape" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Explore