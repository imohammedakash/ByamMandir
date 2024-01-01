"use client"
import React from 'react';
import Wrapper from '@/components/Wrapper';
import GeneralPage from '@/components/GeneralPage';
import Link from 'next/link';
import Cookies from 'js-cookie'
import GymPass from '@/components/GymPass';
import { useRouter } from 'next/navigation';
const Profile = ({ params }: any) => {
  let page = params.id
  const router = useRouter()
  const token = Cookies.get('token');
  if (!token) {
    router.push(`/login?view=${atob('/profile/general')}`)
  }
  const renderPage = () => {
    switch (page) {
      case 'general':
        return <GeneralPage />;
      case 'gym-pass':
        return <GymPass />;
      default:
        return <div className='h-[70vh] text-white flex items-center justify-center text-xl tracking-wider border'>Nothing to show</div>;
    }
  };
  return (
    <Wrapper>
      <div className="w-full flex flex-col items-center justify-center sm:my-10 my-3">
        <div className="md:w-[80%] w-full px-2 ">
          <div className="w-full sm:h-[10vh] sm:py-0 py-3 sm:text-start text-center text-3xl text-white border-b mb-8">
            Account Setting
          </div>
          <div className="w-full sm:min-h-[89vh] flex items-start flex-col sm:flex-row justify-between">
            <div className="sm:w-[20%] w-full flex sm:flex-col flex-row items-center justify-start overflow-auto sm:py-0 py-4 sm:gap-0">
              <Link href='/profile/general' className={` w-auto sm:w-full py-2 sm:px-2 px-6 rounded ${page === 'general' ? ' border text-[#fff]' : 'text-white'}`}>
                General
              </Link>
              <Link href='/profile/gym-pass' className={` w-auto sm:w-full py-2 sm:px-2 px-6 rounded ${page === 'access-token' ? ' border text-[#fff]' : 'text-white'}`}>
                Gym Pass
              </Link>
              <Link href='/profile/others' className={` w-auto sm:w-full py-2 sm:px-2 px-6 rounded ${page === 'address' ? ' border text-[#fff]' : 'text-white'}`}>
                others
              </Link>
            </div>
            <div className="sm:w-[76%] w-full sm:mt-0 mt-4">
              {token ? renderPage() : ''}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
};

export default Profile;
