"use client"
import React from 'react'
import NavbarMenuItem from './NavbarMenuItem'
import { MdOutlineLogout, MdCardMembership, MdPerson } from 'react-icons/md'
import { GiPathDistance, GiBodyBalance } from 'react-icons/gi'
import { CgGym } from 'react-icons/cg'
import { BiStore} from 'react-icons/bi'
import Link from 'next/link'
const Menu = () => {
    return (
        <div className="flex flex-col bg-white gap-5 shadow-2xl rounded-tr-none rounded-lg ">
            <div className="flex items-center justify-start gap-4 border-b px-3 py-3">
                <Link href='/profile' className="flex items-center justify-center h-9 w-9 overflow-hidden border-1 border-gray-200 rounded-full cursor-pointer">
                    <img className="h-full w-full object-fill" src='https://lh3.googleusercontent.com/ogw/AAEL6shcDmt5bOUFhRo_-IBUhBKbLdqVlwCo5nQP-xzzGA=s32-c-mo' alt='me' />
                </Link>
                <span className='font-medium'>Mohammed Akash</span>
            </div>
            <div className="flex flex-col bg-white gap-5 px-5">
                <NavbarMenuItem menuName='profile' Icon={MdPerson} />
                <NavbarMenuItem menuName='diet' Icon={GiBodyBalance} />
                <NavbarMenuItem menuName='routine' Icon={CgGym} />
                <NavbarMenuItem menuName='road map' Icon={GiPathDistance} />
                <NavbarMenuItem menuName='membership' Icon={MdCardMembership} />
                <NavbarMenuItem menuName='store' Icon={BiStore} />
            </div>
            <span className='text-gray-800 capitalize cursor-pointer flex items-center justify-start gap-3 px-5 pb-6'>
                <MdOutlineLogout className='text-gray-800 text-2xl' />
                Log out
            </span>
        </div>
    )
}

export default Menu