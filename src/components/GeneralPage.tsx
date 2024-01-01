"use client"
import React, { useEffect, useState } from 'react'
import {
    AiOutlineUser,
    AiOutlineMail,
} from "react-icons/ai";
import { BsSignpost2, BsSignpostSplit, BsTelephone } from "react-icons/bs";
import Cookies from 'js-cookie'
import AuthInput from "@/components/InputControl/AuthInput";
import { toast } from "react-toastify";
import { FaLandmark, FaRegBuilding } from "react-icons/fa";
import { FaLandmarkFlag, FaPlaceOfWorship, FaSignsPost, FaTreeCity } from "react-icons/fa6";
import { getUserProfileApi, updateUserApi } from '@/Redux/Action/user';
import { useRouter } from 'next/navigation';
interface profileProps {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    profile: string;
    address: string,
    appartment: string,
    city: string,
    state: string,
    country: string,
    postalCode: string,

}
const GeneralPage: React.FC = () => {
    const router = useRouter()
    let [profile, setProfile] = useState<profileProps>({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        profile: '',
        address: '',
        appartment: '',
        city: '',
        state: '',
        country: '',
        postalCode: ''
    })
    const [loading, setLoading] = useState(false)
    const token = Cookies.get('token');
    useEffect(() => {
        if (token) {
            getUserDetails()
        }
    }, [])
    const getUserDetails = () => {
        getUserProfileApi().then((data => {
            if (data?.status === 200) {
                setProfile(data.data)
                return
            }
            toast.error(data?.message)
        })).catch((err: any) => {
            router.push('/')
            toast.error(err.message)
        })
    }
    const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (profile?.firstname === "" || profile?.lastname === "" || profile?.phone === "") {
            toast.error('Checkout Missing Some required fields')
            return;
        }
        setLoading(true)
        try {
            let { email, ...payload } = profile
            const data = await updateUserApi(payload);
            if (data.status === 200) {
                toast.success(data.message);
                return
            }
            const errorMessage = data?.message?.includes(':')
                ? data.message.split(':')[2].trim()
                : data?.message?.trim() || 'An unknown error occurred';
            toast.error(errorMessage);
        } catch (err: any) {
            toast.error(err.message)
        } finally {
            setLoading(false);
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };
    return (
        <div className='w-full'>
            <div className="border w-full flex items-center justify-between rounded p-4">
                <div className="flex items-start justify-center flex-col gap-1 ">
                    <span className='text-white sm:text-2xl tracking-wider'>Avatar</span>
                    <span className='text-white sm:text-sm text-xs tracking-wider'>This is Your Avatar</span>
                    <span className='text-white sm:text-sm text-xs tracking-wider'>Click on the Avatar to Choose your Image</span>
                    <span></span>
                </div>
                <div className="">
                    <img loading='lazy' className='sm:h-24 sm:w-24 w-20 h-20 rounded-full' src="https://mohammedakash.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FProfile.2dc40604.jpg&w=384&q=75" alt="" />
                </div>
            </div>
            <div className="border w-full flex items-center flex-col justify-between rounded p-4 mt-3">
                <div className="w-full flex gap-4 text-white mt-4">
                    <AuthInput
                        label="first name"
                        Icon={AiOutlineUser}
                        type="text"
                        name="firstname"
                        value={profile.firstname}
                        onChange={handleChange}
                    />
                    <AuthInput
                        label="Last name"
                        Icon={AiOutlineUser}
                        type="text"
                        name="lastname"
                        value={profile.lastname}
                        onChange={handleChange}
                    />
                </div>
                <div className="w-full flex gap-4 text-white mt-4">
                    <AuthInput
                        label="email"
                        Icon={AiOutlineMail}
                        disabled={true}
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                    />
                    <AuthInput
                        label="phone"
                        Icon={BsTelephone}
                        type="number"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                    />
                </div>

                <div className="w-full flex gap-4 text-white mt-4">
                    <AuthInput
                        label="address"
                        Icon={FaPlaceOfWorship}
                        type="text"
                        name="address"
                        value={profile?.address}
                        onChange={handleChange}
                    />
                    <AuthInput
                        label="appartment"
                        Icon={FaRegBuilding}
                        type="text"
                        name="appartment"
                        value={profile?.appartment || ''}
                        onChange={handleChange}
                    />
                </div>

                <div className="w-full flex gap-4 text-white mt-4">
                    <AuthInput
                        label="city"
                        Icon={FaTreeCity}
                        type="text"
                        name="city"
                        value={profile?.city}
                        onChange={handleChange}
                    />
                    <AuthInput
                        label="state"
                        Icon={BsSignpostSplit}
                        type="text"
                        name="state"
                        value={profile?.state}
                        onChange={handleChange}
                    />
                </div>
                <div className="w-full flex gap-4 text-white mt-4">
                    <AuthInput
                        label="postalCode"
                        Icon={BsSignpost2} 
                        type="text"
                        name="postalCode"
                        value={profile?.postalCode}
                        onChange={handleChange}
                    />
                    <AuthInput
                        label="country"
                        Icon={FaLandmark}
                        type="text"
                        name="country"
                        value={profile?.country}
                        onChange={handleChange}
                    />
                </div>
                <div className=" w-full flex items-center justify-start text-white mt-4">
                    <button
                        className="border slider border-white py-3 px-12 flex items-center justify-center sm:w-[12rem] w-[8rem] text-center rounded transition-all tracking-wide hover:tracking-widest relative"
                        onClick={handleSave}
                    >
                        {
                            loading ? <div className="h-6 w-6 rounded-full border-t-2 border-l-2 animate-spin " /> : 'Save'
                        }
                        <i className="absolute inset-0 block before:absolute before:content-[''] before:border-2 before:border-white before:w-[20px] before:h-[8px] before:top-[-3.5px] before:bg-[#060d20] before:left-[80%] before:transition-all after:absolute after:content-[''] after:border-2 after:border-white after:w-[20px] after:h-[8px] after:bottom-[-3.5px] after:bg-[#060d20] after:right-[80%] after:transition-all"></i>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default GeneralPage