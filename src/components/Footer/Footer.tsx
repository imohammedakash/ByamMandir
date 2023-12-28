import Link from 'next/link'
import React from 'react'
const Footer = () => {
    return (
        <div className="">
            <div className="w-full p-2 bg-[#060d20] flex items-center justify-center cursor-pointer shadow-xl border-t " >
                <span  className='text-gray-100 p-2'>Back to top</span>
            </div>
            <div className="flex gap-4 items-start flex-wrap sm:justify-evenly justify-between w-full bg-[#060d20] border-y p-7">
                <div className="flex items-start justify-start flex-col gap-2">
                    <h5 className='text-gray-100 font-semibold tracking-widest mb-2'>Calculator</h5>

                    <Link href='/calculate/bmi' className='text-gray-100 text-sm'>BMI Calculator</Link>
                    <Link href='/calculate/calorie-burn' className='text-gray-100 text-sm'>Calorie Burn</Link>
                </div>
                <div className="flex items-start justify-start flex-col gap-2">
                    <h5 className='text-gray-100 font-semibold tracking-widest mb-2'>Explore</h5>
                    <Link href='/' className='text-gray-100 text-sm'>Home</Link>
                    <Link href='/about' className='text-gray-100 text-sm'>About us</Link>
                    <Link href='contactus' className='text-gray-100 text-sm'>Contact us</Link>
                    <Link href='/blog' className='text-gray-100 text-sm'>Blog</Link>
                </div>
                <div className="flex items-start justify-start flex-col gap-2">
                    <Link href='/about' className='text-gray-100 font-semibold tracking-widest mb-2'>Know Us</Link>
                    <Link href='/privacy-policy' className='text-gray-100 text-sm'>Privacy Policy</Link>
                    <Link href='/terms-conditions' className='text-gray-100 text-sm'>Terms and Conditions</Link>
                    <Link href='help-faq' className='text-gray-100 text-sm'>Help and FAQ</Link>
                </div>
                <div className="flex items-start justify-start flex-col gap-2">
                    <h5 className='text-gray-100 font-semibold tracking-widest mb-2'>Social</h5>
                    <a href='https://twitter.com/imohammedakash' target='blank' className='text-gray-100 text-sm'>Twitter</a>
                    <a href='https://facebook.com/imohammedakash' target='blank' className='text-gray-100 text-sm'>Facebook</a>
                    <a href='https://instagram.com/imohammedakash' target='blank' className='text-gray-100 text-sm'>Instagram</a>
                    <a href='https://youtube.com/imohammedakash' target='blank' className='text-gray-100 text-sm'>Youtube</a>
                </div>

            </div>
            <div className="w-full flex items-center justify-center p-3 bg-[#060d20]">
                <span className='text-gray-100 tracking-wider'>Copyright © 2022 ByamMandir.com</span>
            </div>
        </div>
    )
}

export default Footer