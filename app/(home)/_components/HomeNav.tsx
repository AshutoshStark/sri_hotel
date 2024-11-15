'use client'
import React, { useState } from 'react'

const HomeNav = () => {

    const [navigation,setNavigation] = useState<string>('travel')

  return (
    <div className='flex justify-between  text-lg md:text-2xl font-semibold py-5 px-7 bg-black rounded-2xl my-7'>
      <button onClick={()=>setNavigation('travel')} className={`${navigation === 'travel' ? 'decoration-1 text-prime underline underline-offset-[12px] underline-prime':''}`}>Travel</button>
      <button onClick={()=>setNavigation('digital')} className={`${navigation === 'digital' ? 'decoration-1 text-prime underline underline-offset-[12px] underline-prime':''}`}>Search</button>
      <button onClick={()=>setNavigation('brand')} className={`${navigation === 'brand' ? 'decoration-1 text-prime underline underline-offset-[12px] underline-prime':''}`}>Pay</button>
      <button onClick={()=>setNavigation('merch')} className={`${navigation === 'merch' ? 'decoration-1 text-prime underline underline-offset-[12px] underline-prime':''}`}>Stay</button>
    </div>
  )
}

export default HomeNav
