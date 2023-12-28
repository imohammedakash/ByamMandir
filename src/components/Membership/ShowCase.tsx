import React from 'react'

const ShowCase = () => {
    return (
        <div className='w-full membership-container-bgimage md:h-[60vh] h-[40vh] my-10 flex items-center justify-center relative after:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] after:from-[#060d207f] after:via-[#060d20de] after:to-[#060d20] after:w-full after:h-full'>
            <div className="bg-none absolute z-[2] flex items-center justify-center flex-col">
                <span className=' text-white tracking-wide text-2xl relative flex items-center justify-center after:-right-20 after:absolute after:w-[4rem] after:h-[2px] after:bg-[#FFD700] after:mt-2
                before:-left-20 before:absolute before:w-[4rem] before:h-[2px] before:bg-[#FFD700] before:mt-2'>20 Years in Body Building</span>
                <div className="text-white tracking-wide text-6xl text-center font-medium mt-3 flex items-center justify-center flex-col space-y-4 ">
                    <span className='text-shadow-xl'>Manage your physique</span>
                    <span className=' '>Easily and Effectively</span>
                </div>
            </div>
        </div>
    )
}

export default ShowCase