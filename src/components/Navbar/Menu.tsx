"use client"
import React from 'react'
import NavbarMenuItem from './NavbarMenuItem'
import { MdOutlineLogout, MdCardMembership, MdPerson } from 'react-icons/md'
import { GiPathDistance, GiBodyBalance } from 'react-icons/gi'
import { CgGym } from 'react-icons/cg'
import Cookies from 'js-cookie';
import { BiStore } from 'react-icons/bi'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { logoutUser } from '@/Redux/UserSlice'
import { LogoutUserApi } from '@/Redux/Action/user'
import { useDispatch } from 'react-redux'
const Menu = () => {
    const token = Cookies.get('token');
    const router = useRouter();
    const dispatch = useDispatch();
    const handleLogout = async () => {
        if (!token) {
            toast.error('Something went wrong')
            return;
        }
        try {
            const data = await LogoutUserApi();
            if (data.status === 200) {
                toast.success(data.message)
                dispatch(logoutUser());
                router.push('/');
                return
            }
            const errorMessage = data?.message?.includes(':')
                ? data.message.split(':')[2].trim()
                : data?.message?.trim() || 'An unknown error occurred';
            toast.error(errorMessage)
        } catch (err: any) {
            toast.error(err.message)
        }
    }
    return (
        <div className="flex flex-col bg-white gap-5 shadow-2xl rounded-tr-none rounded-lg pb-6 ">
            {
                token ? <Link href='/profile' className="flex items-center justify-start gap-4 border-b px-3 py-3">
                    <div className="flex items-center justify-center border-1 border-gray-200 rounded-full cursor-pointer">
                        <MdPerson className='text-gray-800 text-2xl' />
                    </div>
                    <span className='font-medium'>Profile</span>
                </Link> : <div className='w-full flex'>
                    <Link href='/login' className="flex-1 flex items-center justify-center gap-4 border-b px-3 py-3">
                        <span className='font-medium'>Login</span>
                    </Link>
                    <Link href='/signup' className=" flex-1 flex items-center justify-center gap-4 border-b border-l px-3 py-3">
                        <span className='font-medium'>Sign Up</span>
                    </Link>
                </div>
            }
            <div className="flex flex-col bg-white gap-5 px-5">
                <NavbarMenuItem menuName='diet' Icon={GiBodyBalance} />
                {
                    token ? <NavbarMenuItem menuName='routine' Icon={CgGym} /> : ''
                }
                <NavbarMenuItem menuName='road map' Icon={GiPathDistance} />
                <NavbarMenuItem menuName='membership' Icon={MdCardMembership} />
                <NavbarMenuItem menuName='store' Icon={BiStore} />
            </div>
            {
                token ? <span className='text-gray-800 capitalize cursor-pointer flex items-center justify-start gap-3 px-5 ' onClick={handleLogout}>
                    <MdOutlineLogout className='text-gray-800 text-2xl' />
                    Log out
                </span> : ''
            }

        </div>
    )
}

export default Menu