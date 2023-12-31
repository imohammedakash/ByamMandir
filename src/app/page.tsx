import React from 'react'

import { HiPhone, HiOutlineMail } from "react-icons/hi"
import Link from 'next/link'
import Wrapper from '@/components/Wrapper'
import Traners from '@/components/Traners'
import Explore from '@/components/Explore'
const Home = () => {
  return (
    <Wrapper>

      <div className=" w-full ">
        <div className="w-full h-[89vh] flex items-center justify-center bg-[#060d20] relative overflow-hidden">
          <div className="flex items-center justify-around w-full ">
            <div className="md:w-auto w-full flex items-start justify-start flex-col gap-5">
              <div className=" md:w-auto w-full p-2 flex items-start justify-start  cursor-default z-10">
                <img loading='lazy' src="https://res.cloudinary.com/dn83xtspp/image/upload/v1676208569/Screenshot_20230212_185640-removebg-preview_i6v45v.png" alt="" className='h-12 rotate-45' />
                <div className="flex flex-col items-start justify-start">
                  <span className='font-bold text-lg -skew-x-12 text-white'>Traning</span>
                  <span className='font-bold text-base -skew-x-12 text-[#257fddd6] pl-2'>Zone.cog</span>
                </div>
              </div>
              <div className=" md:w-auto w-full flex flex-col -space-y-8 z-10">
                <div className="flex md:items-start items-center md:justify-start justify-center gap-5 cursor-default ">
                  <span className='text-[4rem] font-semibold uppercase tracking-tighter text-white font-poppins'>No</span>
                  <span className='text-[4rem] font-semibold uppercase tracking-tighter text-[#1cb0d8] font-poppins'>Pain</span>
                </div>
                <div className="flex md:items-start items-center md:justify-start justify-center gap-5 cursor-default">
                  <span className='text-[6rem] font-semibold uppercase tracking-tighter text-[#1cb0d8] font-poppins'>No</span>
                  <span className='text-[6rem] font-semibold uppercase tracking-tighter text-white font-poppins'>Gain</span>
                </div>
                <div className="flex flex-col md:w-auto w-full md:items-start items-center md:justify-start justify-center gap-12 pt-8">
                  <span className='text-white font-Roboto cursor-default md:text-start text-center'>Byam Mandir, Your true fitness solution from <br /> heavier to healthier.</span>
                  <Link href="/membership"><button className='bg-blue-700 py-4 px-16 rounded-lg text-white whitespace-nowrap '>Subscribe Now</button></Link>
                </div>
              </div>
              <div className="md:w-auto w-full md:rotate-0 rotate-[-90deg] md:static absolute -right-[9.7rem] bottom-20 flex items-center md:justify-start justify-center md:flex-row flex-col md:gap-4 gap-1 md:mt-8 z-10">
                <div className="flex items-center justify-start gap-2">
                  <div className=" rounded-full p-2 bg-[#1cb0d8] text-black">
                    <HiPhone className="md:text-xl text-sm" />
                  </div>
                  <span className='font-medium text-white md:text-base text-sm'>+91 7029793127</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <div className=" rounded-full p-2 bg-[#1cb0d8] text-black">
                    <HiOutlineMail className="md:text-xl text-sm" />
                  </div>
                  <span className='font-medium text-white md:text-base text-sm'>byammandir@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="flex gap-6 cursor-default">
              <div className="flex flex-col items-center justify-end md:h-[5.3rem] absolute md:left-1/4 left-10 md:top-10 bottom-5 card p-4 rounded-md z-10 ">
                <div className="uppercase font-bold md:text-xl text-sm flex items-center justify-start gap-2">
                  <span className='text-white'>get</span>
                  <span className='text-blue-500'>07</span>
                  <span className='text-white'>days</span>
                </div>
                <div className="uppercase font-bold md:text-xl text-sm flex items-center justify-start gap-2">
                  <span className='text-white'>Free Trial</span>
                </div>
              </div>
              <div className="absolute w-screen md:h-full h-screen  md:flex items-center justify-center inset-0 ">
                <div className="flex flex-col items-center justify-center md:mt-0 mt-[50%] -space-y-20 font-bold glowing-effect ">
                  <span className='lg:text-[15rem] md:text-[12rem] text-[8rem]'>BYAM</span>
                  <span className='lg:text-[15rem] md:text-[12rem] text-[8rem]'>MANDIR</span>
                </div>
              </div>
              <div className="md:flex hidden flex-col items-end justify-center h-full absolute bottom-0">
                <img loading='lazy' src="https://res.cloudinary.com/dn83xtspp/image/upload/v1676300017/pexels-leon-ardho-2468339-removebg-preview_1_mk8dl1.png" alt="" className='' />
              </div>
            </div>
            <div className=" flex items-center justify-center md:h-full md:relative absolute top-6 right-5 card p-4 rounded-md cursor-default">
              <div className="flex items-center justify-center h-full flex-col">
                <div className="uppercase font-bold md:text-xl text-sm flex md:items-end items-center justify-center -space-y-2 flex-col gap-2">
                  <span className='text-[#1cb0d8]'>Membership</span>
                  <span className='text-white'>Discount</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Traners />
      <Explore />
    </Wrapper>
  )
}

export default Home