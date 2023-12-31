import Link from 'next/link'
import React from 'react'

interface NotificationContainerProps {
  message: string;
  url: string; // Assuming url is a string
  time: string; // Assuming time is a number
}


const NotificationContainer: React.FC<NotificationContainerProps> = ({ message, url, time }) => {
  return (
    <Link href={`${url}`} className='w-full flex items-center justify-evenly gap-2 px-3 py-4 hover:bg-gray-100 transition-all rounded-t-[inherit]'>
      <div className="flex items-center justify-center h-12 w-12 overflow-hidden rounded-full cursor-pointer" >
        <img loading='lazy' className="h-full w-full object-cover" src='https://scontent.frdp1-1.fna.fbcdn.net/v/t39.30808-6/324257767_684658133160469_2326331120959926487_n.jpg?stp=dst-jpg_p843x403&_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=8Pk7nlpXZ_4AX995PrV&_nc_ht=scontent.frdp1-1.fna&oh=00_AfDRdcduZlLitFVbx-g62H9kjrzuGqp-IL_7i2o8LjcwOQ&oe=63F0392C' alt='me' />
      </div>
      <div className="flex flex-col w-[80%] py-1">
        <span className='capitalize'>{message}</span>
        {/* <span className='text-sm text-blue-600'>{time}</span> */}
      </div>
    </Link>
  )
}

export default NotificationContainer