import Link from 'next/link'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
interface NavbarProps {
    Icon: string, menuName: string
}
const NavbarMenuItem: React.FC<NavbarProps> = ({ Icon, menuName }) => {
    return (
        <Link href={`/${menuName}`} className='flex items-center justify-between gap-20'>
            <div className="text-gray-800 capitalize flex items-center justify-start gap-3 text-xl">
                <Icon />
                {menuName}
            </div>
            <BiChevronRight className='text-2xl text-gray-700' />
        </Link>
    )
}

export default NavbarMenuItem