"use client"
import React, { useState } from "react";
import {
    AiOutlineMail,
    AiOutlineLock,
    AiOutlineEye,
    AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import AuthInput from "@/components/InputControl/AuthInput";
import ErrorModal from "@/components/Modals/ErrorModal";
import SuccessModal from "@/components/Modals/SuccessModal";
import Link from "next/link";
import { loginUserApi } from "@/Redux/Action/user";
import { registerUser } from "@/Redux/UserSlice";
interface Credentials {
    email: string;
    password: string;
}
const LoginPage: React.FC = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [credentials, setCredentials] = useState<Credentials>({ email: "", password: "" });
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [message, setMessage] = useState("");
    const [showErrorModal, setShowErrorModal] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const user = await loginUserApi(credentials);
        dispatch(registerUser(user));
    };
    return (
        <div className="h-screen w-full flex md:items-start items-center flex-col justify-center relative transition-all p-2">
            {showSuccessModal && <SuccessModal message={message} navigation="/" />}
            {showErrorModal && (
                <ErrorModal message={message} setModalClose={setShowErrorModal} />
            )}
            <div className="absolute h-full w-full before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#060d20] before:to-[#060d2033] ">
                <img
                    src="https://cdn.pixabay.com/photo/2017/07/21/09/35/muscles-2525200__340.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="md:ml-20 flex flex-col gap-5 z-50">
                <div className="flex flex-col gap-4">
                    <span className="uppercase md:text-start text-center text-white text-xl">
                        push yourself harder
                    </span>
                    <h6 className="uppercase md:text-start text-center text-white text-5xl font-bold ">
                        welcome back
                    </h6>

                    <span className="uppercase text-white text-xs tracking-widest flex items-center md:justify-start justify-center md:flex-row flex-col gap-1">
                        Restart your journey with{" "}
                        <img
                            src="https://res.cloudinary.com/dn83xtspp/image/upload/v1676199461/Byam_Mandir__3_-removebg-preview_1_adss24.png"
                            alt="Logo"
                            className="h-12"
                        />{" "}
                        again{" "}
                    </span>

                    <span className="uppercase text-white font-light md:text-start text-center">
                        Don't have a account?{" "}
                        <Link href="/signup" className="text-[#3c8aff] ml-1">
                            Register
                        </Link>
                    </span>
                </div>
                <div className="text-white flex flex-col gap-6">
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
                    </div>
                    <div className=" md:w-auto w-full flex items-center md:justify-start justify-center  mt-3">
                        <button className="border slider border-white py-3 px-12 rounded transition-all tracking-wide hover:tracking-widest relative" onClick={handleSubmit}>
                            Login
                            <i className="absolute inset-0 block before:absolute before:content-[''] before:border-2 before:border-white before:w-[20px] before:h-[8px] before:top-[-3.5px] before:bg-[#060d20] before:left-[80%] before:transition-all after:absolute after:content-[''] after:border-2 after:border-white after:w-[20px] after:h-[8px] after:bottom-[-3.5px] after:bg-[#060d20] after:right-[80%] after:transition-all"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
