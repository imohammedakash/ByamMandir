import React from 'react'

const Input = ({ label, ...rest }) => {
  return (
      <div className="flex-1">
          <label htmlFor="name" className='uppercase '>{label} :</label>
          <input {...rest} placeholder={`Enter your ${label.length > 15 ? label.slice(0, 15).concat('...') : label.slice(0, 15) }`} className='p-3 w-full outline-none border bg-transparent mt-3' />
      </div>
  )
}

export default Input