"use client"
import React, { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import { useSelector } from "react-redux";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";
const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const [showNotification, setshowNotification] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated } = useSelector((state: any) => state.user) || { isAuthenticated: false };
  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current?.contains(e.target as Node)) {
        setshowMenu(false);
        setshowNotification(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="w-full bg-[#060d20] sticky top-0 z-50 nav-boxshadow">
      <div className="py-4 px-6 flex items-center justify-between">

        <Link href="/">
          <img
            src="https://res.cloudinary.com/dn83xtspp/image/upload/v1676199461/Byam_Mandir__3_-removebg-preview_1_adss24.png"
            alt="Logo"
            className="sm:h-12 h-8"
          />
        </Link>

        <div className="flex items-center justify-center ml-12">
          <Link href="/" className="text-white capitalize md:block hidden">
            Home
          </Link>
          <Link href="/exercise" className="text-white capitalize mx-8 md:block hidden">
            Exercise
          </Link>

          <Link href="/membership" className="text-white capitalize md:block hidden">
            Memberships
          </Link>

          <Link href="/blog" className="text-white capitalize ml-8 md:block hidden">
            Blog
          </Link>
        </div>
        <div className="flex items-center justify-center gap-5 relative">
          <div className="flex items-center justify-center gap-5 relative md:hidden">
            <div
              className="flex items-center justify-center h-8 w-8 overflow-hidden rounded-full cursor-pointer text-3xl font-bold text-white"
              onClick={() => setshowMenu(!showMenu)}
            >
              {
                isAuthenticated ? <img
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/ogw/AAEL6shcDmt5bOUFhRo_-IBUhBKbLdqVlwCo5nQP-xzzGA=s32-c-mo"
                  alt="me"
                /> : <HiMenuAlt3 />
              }

            </div>
            {showMenu && (
              <div
                ref={modalRef}
                className="transition-all absolute -bottom-[26rem] right-5 z-50"
              >
                {" "}
                <Menu />{" "}
              </div>
            )}
          </div>
          <div className="md:flex items-center justify-center gap-5 relative hidden ">
            <Link
              href="/login"
              className="text-white capitalize "
            >
              Login
            </Link>

            <Link href="/signup" className="bg-white rounded border px-6 flex items-center justify-center gap-1">
              <span>
                Try out
              </span>
              <span className="text-3xl mb-1 ">
                &#8594;
              </span>

            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
