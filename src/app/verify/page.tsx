"use client"
import React, { useEffect, useRef, useState } from "react";

interface Props { }

const OTPField: React.FC<Props> = (props): JSX.Element => {
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    const [active, setActive] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null)
    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newOtp: string[] = [...otp]
        newOtp[index] = target.value.substring(target.value.length - 1)
        if (!target.value) {
            setActive(index - 1);
        } else if (active === otp.length - 1) {
            setActive(otp.length - 1);
        } else {
            setActive(index + 1);
        }
        setOtp(newOtp)
    }
    useEffect(() => {
        inputRef?.current?.focus()
    }, [active])
    const handleSubmit = () => {

    }
    return (
        <div className="h-screen flex justify-center items-center space-x-2 flex-col">
            <h1 className="text-white text-4xl mb-4"> Verify your Email</h1>
            <p className="text-white font-mono text-center">We have sent an 6 digit OTP to your register email </p>
            <p className="mb-5 text-white font-mono">enter the code to below to verify </p>
            <div className="flex justify-center items-center space-x-2 mt-5">
                {otp.map((_, index: number) => {
                    return (
                        <React.Fragment key={index}>
                            <input
                                ref={active === index ? inputRef : null}
                                type="number"
                                value={otp[index]}
                                onChange={(e) => handleChange(e, index)}
                                className="sm:w-12 sm:h-12 h-10 w-10 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition"
                            />
                            {index === otp.length - 1 ? null : (
                                <span className="w-2 py-0.5 bg-gray-400" />
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
            <button
                className="border slider border-white mt-10 text-white py-3 px-12 flex items-center justify-center w-[20rem] text-center rounded transition-all tracking-wide hover:tracking-widest relative"
                onClick={handleSubmit}
            >
                {
                    loading ? <div className="h-6 w-6 rounded-full border-t-2 border-l-2 animate-spin " /> : 'Verify'
                }
                <i className="absolute inset-0 block before:absolute before:content-[''] before:border-2 before:border-white before:w-[20px] before:h-[8px] before:top-[-3.5px] before:bg-[#060d20] before:left-[80%] before:transition-all after:absolute after:content-[''] after:border-2 after:border-white after:w-[20px] after:h-[8px] after:bottom-[-3.5px] after:bg-[#060d20] after:right-[80%] after:transition-all"></i>
            </button>
        </div>
    );
};

export default OTPField;