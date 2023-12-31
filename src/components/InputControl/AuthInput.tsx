import React, { ReactElement, InputHTMLAttributes } from 'react';

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    Icon: string;
}

const AuthInput: React.FC<AuthInputProps> = ({ label, Icon, ...rest }) => {
    return (
        <div className="flex flex-col gap-2 items-start justify-center flex-1">
            <label htmlFor="item" className='uppercase'>{label}  :</label>
            <div className="flex items-center justify-center gap-4 border border-white py-3 px-4 w-full">
                <div className='sm:text-2xl text-lg'>
                    <Icon />
                </div>
                <input {...rest} placeholder={`Enter your ${label.length > 15 ? label.slice(0, 15).concat('...') : label.slice(0, 15)}`} className='w-full outline-none border-none bg-transparent' />
            </div>
        </div>
    )
}

export default AuthInput