'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Navbar = () => {

  const [toggle,setToggle] = useState<boolean>(false)
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className='text-2xl text-othertext font-semibold flex gap-14 items-center justify-between'>
      <Link href={'/'} className='font-serif text-3xl'>
        Sri
      </Link>
      <div className='flex gap-11 items-center'>
      <Link href={'/'} className={pathname === '/'? 'decoration-1 text-prime underline underline-offset-[12px] underline-prime' : ''}>Home</Link>
      <Link href={'/booking'} className={pathname === '/booking'? 'decoration-1 text-prime underline underline-offset-[12px] underline-prime' : ''}>Book Room</Link>
      <Link href={'/trip'} className={pathname === '/trip'? 'decoration-1 text-prime underline underline-offset-[12px] underline-prime' : ''}>Book Trip</Link>
      </div>
      <div onClick={()=>setToggle(!toggle)} className='flex-row'>
      </div>
    </div>
  )
}

export default Navbar
