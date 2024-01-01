"use client"
import React, { useState } from "react";
import {
    AiOutlineUser,
    AiOutlineMail,
    AiOutlineLock,
    AiOutlineEye,
    AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useRouter, useSearchParams } from 'next/navigation'
import { BsTelephone } from "react-icons/bs";
import AuthInput from "@/components/InputControl/AuthInput";
import ErrorModal from "@/components/Modals/ErrorModal";
import SuccessModal from "@/components/Modals/SuccessModal";
import Link from "next/link";
import { registerUserApi } from "@/Redux/Action/user";
import { registerUser } from "@/Redux/UserSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
interface credentialsProps {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;

}
const RegisterPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const [credentials, setCredentials] = useState<credentialsProps>({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phone: "",
    });
    const searchParams = useSearchParams()
    const view = searchParams.get('view');
    const dispatch = useDispatch()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (credentials.email === "" || credentials.firstname === "" || credentials.lastname === "" || credentials.password === "" || credentials.phone === "") {
            setMessage("Some fields are yet to be filled");
            setShowErrorModal(true);
            return;
        }
        setLoading(true)
        try {
            const data = await registerUserApi(credentials);
            if (data.status === 200) {
                setLoading(false);
                dispatch(registerUser(data.data));
                return router.push(data.mailStatus === 200 ? `/verify-email${view ? `?view=${view}` : ''}`: '/')
            }
            const errorMessage = data?.message?.includes(':')
                ? data.message.split(':')[2].trim()
                : data?.message?.trim() || 'An unknown error occurred';
            setMessage(errorMessage);
            setShowErrorModal(true)
        } catch (err: any) {
            setMessage(err.message);
            setShowErrorModal(true);
        }finally{
            setLoading(false);
        }


    };

    return (
        <div className="h-screen w-full flex md:items-start items-center flex-col justify-center relative transition-all p-2">
            {showSuccessModal && <SuccessModal message={message} navigation="/" />}
            {showErrorModal && (
                <ErrorModal message={message} setModalClose={setShowErrorModal} />
            )}
            <div className="absolute h-full w-full before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#060d20] before:to-[#060d2033] ">
                <img loading='lazy'
                    src="https://cdn.pixabay.com/photo/2017/01/16/15/28/boxer-1984344__340.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="md:ml-20 flex flex-col gap-5 z-50">
                <div className="flex flex-col gap-4">
                    <span className="uppercase md:text-start text-center text-white text-xl">Start for Free</span>
                    <h6 className="uppercase md:text-start text-center text-white text-5xl font-bold ">
                        Create new account
                    </h6>

                    <span className="uppercase text-white text-xs tracking-widest flex items-center md:justify-start justify-center md:flex-row flex-col gap-1">
                        Begin your journey with{" "}
                        <Link href='/'>
                            <img loading='lazy'
                                src="https://res.cloudinary.com/dn83xtspp/image/upload/v1676199461/Byam_Mandir__3_-removebg-preview_1_adss24.png"
                                alt="Logo"
                                className="h-12"
                            />
                        </Link>
                        {" "}
                        Today{" "}
                    </span>

                    <span className="uppercase md:text-start text-center text-white font-light">
                        Already a member?{" "}
                        <Link href={`/login${view ? `?view=${view}` : ''}`} className="text-[#3c8aff] ml-1">
                            Login
                        </Link>
                    </span>
                </div>
                <div className="text-white flex flex-col gap-6">
                    <div className="flex gap-4 text-white">
                        <AuthInput
                            label="first name"
                            Icon={AiOutlineUser}
                            type="text"
                            name="firstname"
                            value={credentials.firstname}
                            onChange={handleChange}
                        />
                        <AuthInput
                            label="Last name"
                            Icon={AiOutlineUser}
                            type="text"
                            name="lastname"
                            value={credentials.lastname}
                            onChange={handleChange}
                        />
                    </div>
                    <AuthInput
                        label="email"
                        Icon={AiOutlineMail}
                        type="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                    />

                    {/* password */}
                    <div className="flex gap-4 text-white">
                        <div className="flex flex-col gap-2 items-start justify-center flex-1">
                            <label htmlFor="" className="uppercase">
                                Password :
                            </label>
                            <div className="flex items-center justify-center gap-4 border border-white py-3 px-4 w-full">
                                <AiOutlineLock className="text-2xl" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder={`Enter your Password`}
                                    value={credentials.password}
                                    onChange={handleChange}
                                    className="w-full outline-none border-none bg-transparent"
                                />
                                {showPassword ? (
                                    <AiOutlineEyeInvisible
                                        onClick={() => setShowPassword(false)}
                                        className="text-2xl cursor-pointer"
                                    />
                                ) : (
                                    <AiOutlineEye
                                        onClick={() => setShowPassword(true)}
                                        className="text-2xl cursor-pointer"
                                    />
                                )}
                            </div>
                        </div>
                        <AuthInput
                            label="phone"
                            Icon={BsTelephone}
                            type="number"
                            name="phone"
                            value={credentials.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className=" md:w-auto w-full flex items-center md:justify-start justify-center  mt-3">
                        <button
                            className="border slider border-white py-3 px-12 flex items-center justify-center w-[12rem] text-center rounded transition-all tracking-wide hover:tracking-widest relative"
                            onClick={handleSubmit}
                        >
                            {
                                loading ? <div className="h-6 w-6 rounded-full border-t-2 border-l-2 animate-spin " /> : 'Register'
                            }
                            <i className="absolute inset-0 block before:absolute before:content-[''] before:border-2 before:border-white before:w-[20px] before:h-[8px] before:top-[-3.5px] before:bg-[#060d20] before:left-[80%] before:transition-all after:absolute after:content-[''] after:border-2 after:border-white after:w-[20px] after:h-[8px] after:bottom-[-3.5px] after:bg-[#060d20] after:right-[80%] after:transition-all"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
