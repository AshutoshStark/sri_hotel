'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { HiUser } from 'react-icons/hi'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Navbar = () => {

  const [toggle,setToggle] = useState<boolean>(false)

  return (
    <div className='text-2xl text-othertext font-semibold flex gap-14 items-center justify-center'>
      <Link href={''}>
        <img src="/loog.png" alt="" />
      </Link>
      <div className='bg-othertext text-slate-600 text-lg py-2 px-4 rounded-full flex items-center gap-3 w-3/12'><CiSearch />Search Creator/Product</div>
      <div className='flex gap-11 items-center'>
      <Link href={''}>Fav Creators</Link>
      <Link href={''}>Merchandise</Link>
      <Link href={''}>Brand</Link>
      <Link href={''}>Digital</Link>
      </div>
      <div onClick={()=>setToggle(!toggle)} className='flex-row'>
      <div className='text-primetext bg-othertext flex gap-4 px-4 py-2 rounded-xl'><HiUser /> {toggle ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
     {toggle && <div className='text-lg items-start gap-6 flex-row absolute py-3 px-2 w-1/12 font-normal bg-black rounded-lg mt-2'>
        <p className=''>Profile</p>
        <p className='my-8'>Dashboard</p>
        <p>My Store</p>
      </div>}
      </div>
    </div>
  )
}

export default Navbar
