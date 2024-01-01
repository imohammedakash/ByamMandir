"use client"
import React from 'react'
import { FaCrown, FaHandPointRight } from 'react-icons/fa'
import { FaHeartBroken } from 'react-icons/fa'
import { GiWeightLiftingUp } from 'react-icons/gi'
import Wrapper from '@/components/Wrapper'
import MembershipCard from '@/components/Membership/MembershipCard'
import ShowCase from '@/components/Membership/ShowCase'

const Membership = () => {
    return (
        <Wrapper>
            <div className=" w-full relative">
                <div className="absolute h-full w-full before:content-[''] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-gradient-to-t before:from-[#060d20] before:to-[#060d20b1] z-[-2] ">
                    <img loading='lazy' src="https://images.unsplash.com/photo-1561214095-fea147325936?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" className="h-full w-full object-cover" />
                </div>
                <div className="w-full flex items-center justify-center flex-col p-4 gap-2">
                    <span className='text-[#000000af] sm:text-5xl text-4xl font-bold font-poppins text-shadow-white'>Choose Your Plain</span>
                    <div className="text-[#fff] text-shadow-black flex items-center justify-center flex-col">
                        <span className='text-center'>Remember that there is just a slight gap between Heavier and Healthier </span>
                        <div className=' text-2xl font-semibold font-poppins flex items-center sm:flex-row flex-col justify-center gap-3 '>
                            <span className='text-center'> Begin your journey from Heavier</span>
                            <FaHandPointRight className='text-[#fee045] sm:rotate-0 rotate-90 ' />
                            <span className='text-center'> Healthier Today </span>
                        </div>
                    </div>
                    <span className='text-[#fff] text-6xl font-semibold font-poppins text-center'>Start Now</span>
                </div>
                <div className="flex items-center flex-wrap justify-center w-full relative gap-10 my-5 ">
                    <MembershipCard cost="$25" plainName="basic" Icon={FaHeartBroken} text1='2 hours of exercise' text2='Free consultation to coaches' text3='Access to fitnessClub Community' />
                    <MembershipCard cost="$45" plainName="pro" Icon={GiWeightLiftingUp} text1='8 hours of exercise' text2='Free consultation to Private coaches' text3='Access to fitness marchandise' />
                    <MembershipCard cost="$30" plainName="premium" Icon={FaCrown} text1='5 hours of exercise' text2='Free consultation to coaches' text3='Access to minibar' />
                </div>
            </div>
            <ShowCase />
        </Wrapper>

    )
}

export default Membership