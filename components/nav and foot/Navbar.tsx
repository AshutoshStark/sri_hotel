'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { HiUser } from 'react-icons/hi'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Navbar = () => {

  const [toggle,setToggle] = useState<boolean>(false)
  const {padEnd} = usePathname()

  return (
    <div className='text-2xl text-othertext font-semibold flex gap-14 items-center justify-between'>
      <Link href={'/'}>
        <img src="/loog.png" alt="" />
      </Link>
      <div className='flex gap-11 items-center'>
      <Link href={'/booking'} className={``}>Book Room</Link>
      <Link href={'/trip'}>Book Trip</Link>
      </div>
      <div onClick={()=>setToggle(!toggle)} className='flex-row'>
      {/* <div className='text-primetext bg-othertext flex gap-4 px-4 py-2 rounded-xl'><HiUser /> {toggle ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
     {toggle && <div className='text-lg items-start gap-6 flex-row absolute py-3 px-2 w-1/12 font-normal bg-black rounded-lg mt-2'>
        <p className=''>Profile</p>
        <p className='my-8'>Dashboard</p>
        <p>My Store</p>
      </div>} */}
      </div>
    </div>
  )
}

export default Navbar
