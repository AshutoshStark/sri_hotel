'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

const Burger = () => {
    const [toggle,setToggle] = useState<boolean>(false);
    const pathname = usePathname();

  return (
    <div>
      <div className='text-xl text-othertext font-semibold flex gap-14 items-center justify-between'>
      <Link href={'/'}>
        <img src="/loog.png" alt="" className='h-9' />
      </Link>
      <button onClick={()=>setToggle(!toggle)}><RxHamburgerMenu /></button>
      {toggle &&
        <div className='fixed top-12 p-6 right-0 w-1/2 gap-3 flex z-[500] flex-col bg-[#181919] shadow-lg animate-slide-in-right'>
            <div className='text-sm text-white flex flex-col'>
              <Link href={'/'} className={pathname === '/' ? 'decoration-1 text-prime underline underline-offset-[12px] underline-prime' : ''}>Home</Link>
              <Link href={'/booking'} className={pathname === '/booking' ? 'decoration-1 text-prime underline underline-offset-[12px] underline-prime' : ''}>Book Room</Link>
              <Link href={'/trip'} className={pathname === '/trip' ? 'decoration-1 text-prime underline underline-offset-[12px] underline-prime' : ''}>Book Trip</Link>
            </div>
        </div>
      }
      </div>
    </div>
  )
}

export default Burger
