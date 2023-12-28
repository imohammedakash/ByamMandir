import React from 'react'
import NotificationContainer from './NotificationContainer'

const Notification = () => {
  return (
    <div className='rounded-lg overflow-auto scrollbar h-[85vh] bg-white w-[22rem] text-black rounded-tr-none shadow-xl'>
      <div className="px-5 py-4 border-b">
        <span className='font-semibold text-2xl'>Notification</span>
      </div>
      <div className="w-full">
        <NotificationContainer message='You are lagging with your time tab' url='/membership' time='24 hours ago' />
        <NotificationContainer message='Your membership expires in 15 days subscribe now.' url='/membership' time='24 hours ago' />
        <NotificationContainer message='You updated your profile' url='/membership' time='24 hours ago' />
        <NotificationContainer message='Its time get to the gym' url='/membership' time='24 hours ago' />
        <NotificationContainer message='Its time to leave you can go home and take some rest' url='/membership' time='24 hours ago' />
        <NotificationContainer message='hello akash wecome to Byam mandir here is your time table' url='/membership' time='24 hours ago' />
        <NotificationContainer message='hello akash wecome to Byam mandir here is your time table' url='/membership' time='24 hours ago' />
        <NotificationContainer message='hello akash wecome to Byam mandir here is your time table' url='/membership' time='24 hours ago' />
        <NotificationContainer message='hello akash wecome to Byam mandir here is your time table' url='/membership' time='24 hours ago' />
        <NotificationContainer message='hello akash wecome to Byam mandir here is your time table' url='/membership' time='24 hours ago' />
      </div>
    </div>
  )
}

export default Notification