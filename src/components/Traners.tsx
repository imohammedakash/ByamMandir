"use client"
import React from 'react'
import TrainerComp from './TrainerComp'
import { getRandomColor } from './RandomPassword'

const Traners: React.FC = () => {
    return (
        <div className='w-full flex items-center justify-center flex-col mt-10'>
            <div className="w-[80%] flex items-center justify-between sm:flex-row flex-col">
                <div className="sm:w-auto w-full flex items-start md:items-center justify-center flex-col">
                    <h1 className='sm:text-7xl text-4xl sm:text-start text-center text-white font-mono'>Our traner</h1>
                    <p className='text-white tracking-wider mt-2 font-serif '>see our profound traners who have well did in there professional carrers</p>
                </div>
                <div className="sm:w-auto w-full flex items-start md:items-center sm:mt-0 mt-4 justify-center flex-col">
                    <h1 className='text-7xl text-white font-mono'>23</h1>
                    <p className='text-white tracking-wider mt-2 font-serif'>different trainers here</p>
                </div>
            </div>
            <div className="flex flex-wrap items-start justify-center mt-16 gap-10">
                <TrainerComp border={`border-${getRandomColor()}`} name='Rahul Bhatacharya' description='Mrs Olympiad 2014 and many other medals ' image='https://cdn.pixabay.com/photo/2017/09/13/03/23/abs-2744291_1280.jpg' />
                <TrainerComp border={`border-${getRandomColor()}`} name='Shahi Kant' description='Mrs Olympiad 2014 and many other medals ' image='https://cdn.pixabay.com/photo/2020/07/12/15/45/six-pack-abs-5397696_1280.jpg' />
                <TrainerComp border={`border-${getRandomColor()}`} name='Sumit Roy' description='Mrs Olympiad 2014 and many other medals ' image='https://cdn.pixabay.com/photo/2022/12/13/10/00/body-builder-7653003_1280.jpg' />
            </div>
        </div>
    )
}

export default Traners