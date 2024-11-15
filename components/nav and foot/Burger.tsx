'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

const Burger = () => {
    const [toggle,setToggle] = useState<boolean>(false)
  return (
    <div>
      <div className='text-xl text-othertext font-semibold flex gap-14 items-center justify-between'>
      <Link href={'/'}>
        <img src="/loog.png" alt="" className='h-9' />
      </Link>
      {/* <div className='bg-othertext text-slate-400 text-sm py-1 px-3 pr-6 rounded-full flex items-center justify-start'><CiSearch />Search Creator</div> */}
      <button onClick={()=>setToggle(!toggle)}><RxHamburgerMenu /></button>
      {toggle &&
        <div className='fixed top-12 p-6 right-0 w-1/2 gap-3 flex z-[500] flex-col bg-[#181919] shadow-lg animate-slide-in-right'>
            {/* <img src="/influencer1.svg" alt="" className='w-1/2' />
            <button className='flex gap-1 text-xs text-left text-prime font-normal'><span><FiEdit /></span>Change Profile Picture</button>
            <p className=''>Samira Hadid</p>
            <p className='text-sm font-normal'>@samirahadid</p> */}
            <div className='text-sm text-white flex flex-col'>
            <Link href={'/booking'} className={``}>Book Room</Link>
            <Link href={'/trip'}>Book Trip</Link>
            </div>
            {/* <button className='flex items-center gap-3 text-sm'><FaPowerOff />Logout</button> */}
        </div>
      }
      </div>
    </div>
  )
}

export default Burger
