"use client"
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { toast } from "react-toastify";
import { getUserSubscriptionApi } from '@/Redux/Action/user';
import { useRouter } from 'next/navigation';
const GymPass: React.FC = () => {
    const router = useRouter()
    let [profile, setProfile] = useState()
    const [loading, setLoading] = useState(false)
    const token = Cookies.get('token');
    useEffect(() => {
        if (token) {
            getUserSubscription()
        }
    }, [])
    const getUserSubscription = () => {
        getUserSubscriptionApi().then((data => {
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
    return (
        <div className='w-full'>
            <div className="border w-full flex items-center justify-center rounded p-4 min-h-[70vh]">

            </div>
        </div >
    )
}

export default GymPass