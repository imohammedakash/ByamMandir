import React from 'react'
import { RxCross1 } from 'react-icons/rx'
const ErrorModal = ({message, setModalClose}) => {
  return (
      <div className="absolute inset-0 z-[99999] flex items-center justify-center before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#060d20] before:to-[#060d2089]">
          <div className=" w-80 flex items-center justify-center flex-col card p-4 rounded-lg">
              <div className="flex items-center justify-end w-full">
                  <RxCross1 className='text-white text-2xl cursor-pointer' onClick={()=>setModalClose(false)} />
              </div>
              <div className="">
                  <img src="https://res.cloudinary.com/dn83xtspp/image/upload/v1676806792/animal-cute_rntsyn.gif" alt="" className='' />
              </div>
              <span className='text-white text-3xl font-semibold transition-all cursor-default hover:tracking-widest mb-2'>
                  Error !!</span>
              <span className='text-[#ff5a5a] py-3 w-80 px-4 text-center text-xl overflow-hidden overflow-ellipsis'>{message}.</span>
          </div>
      </div>
  )
}

export default ErrorModal