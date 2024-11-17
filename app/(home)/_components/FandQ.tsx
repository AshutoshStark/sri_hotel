'use client'
import React, { useState } from 'react'
import { GoPlus } from 'react-icons/go'
import { HiMiniMinus } from 'react-icons/hi2'

const FandQ = () => {

    const [toggle,setToggle] = useState<number>(0)

  return (
    <div className='flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center h-screen'>
      <div>
        <p className='text-4xl font-semibold text-prime'>FREQUENTLY ASKED <br /> QUESTIONS</p>
        <p className='text-xl'>Quick answers to questions you may have. Can’t find what <br /> you're looking for? <br />Check out our full documentation</p>
      </div>
      <div className='md:w-1/2 flex flex-col gap-4'>
        <div className=''>
         {toggle !== 1  && <div className='bg-othertext text-primetext font-semibold flex items-center justify-between px-4 py-3 rounded-2xl'>How much does it cost to set up a store? <GoPlus className='text-2xl'onClick={()=>setToggle(1)} /> </div>}
        {toggle === 1 &&<div className='bg-othertext text-primetext font-semibold flex flex-col justify-between px-4 py-3 rounded-2xl'>
                <p className='flex items-center justify-between border-b-2 pb-3'>Do I need technical skills to use the platform? <HiMiniMinus className='text-2xl' onClick={()=>setToggle(0)}/></p>
                <p className='pt-3 text-sm'>
                    No, not at all! Our platform is designed with user-friendliness in mind. You can <br /> easily navigate and set up your store without any technical expertise. It's as <br /> simple as a few clicks to get started!
                </p>
            </div>}
        </div>
        <div className=''>
         {toggle !== 2  && <div className='bg-othertext text-primetext font-semibold flex items-center justify-between px-4 py-3 rounded-2xl'>What kind of digital products can I sell? <GoPlus className='text-2xl'onClick={()=>setToggle(2)} /> </div>}
        {toggle === 2 &&<div className='bg-othertext text-primetext font-semibold flex flex-col justify-between px-4 py-3 rounded-2xl'>
                <p className='flex items-center justify-between border-b-2 pb-3'>Do I need technical skills to use the platform? <HiMiniMinus className='text-2xl' onClick={()=>setToggle(0)}/></p>
                <p className='pt-3 text-sm'>
                    No, not at all! Our platform is designed with user-friendliness in mind. You can <br /> easily navigate and set up your store without any technical expertise. It's as <br /> simple as a few clicks to get started!
                </p>
            </div>}
        </div>
        <div className=''>
         {toggle !== 3  && <div className='bg-othertext text-primetext font-semibold flex items-center justify-between px-4 py-3 rounded-2xl'> Do I need technical skills to use the platform? <GoPlus className='text-2xl' onClick={()=>setToggle(3)}/> </div>}
        {toggle === 3 &&
            <div className='bg-othertext text-primetext font-semibold flex flex-col justify-between px-4 py-3 rounded-2xl'>
                <p className='flex items-center justify-between border-b-2 pb-3'>Do I need technical skills to use the platform? <HiMiniMinus className='text-2xl' onClick={()=>setToggle(0)}/></p>
                <p className='pt-3 text-sm'>
                    No, not at all! Our platform is designed with user-friendliness in mind. You can <br /> easily navigate and set up your store without any technical expertise. It's as <br /> simple as a few clicks to get started!
                </p>
            </div>
        }
        </div>
        <div className=''>
         {toggle !== 4  && <div className='bg-othertext text-primetext font-semibold flex items-center justify-between px-4 py-3 rounded-2xl'>Is there a limit to the number of products I can list? <GoPlus className='text-2xl'onClick={()=>setToggle(4)} /> </div>}
        {toggle === 4 &&<div className='bg-othertext text-primetext font-semibold flex flex-col justify-between px-4 py-3 rounded-2xl'>
                <p className='flex items-center justify-between border-b-2 pb-3'>Do I need technical skills to use the platform? <HiMiniMinus className='text-2xl' onClick={()=>setToggle(0)}/></p>
                <p className='pt-3 text-sm'>
                    No, not at all! Our platform is designed with user-friendliness in mind. You can <br /> easily navigate and set up your store without any technical expertise. It's as <br /> simple as a few clicks to get started!
                </p>
            </div>}
        </div>
        <div className=''>
         {toggle !== 5  && <div className='bg-othertext text-primetext font-semibold flex items-center justify-between px-4 py-3 rounded-2xl'>How do I receive payments for my sales? <GoPlus className='text-2xl'onClick={()=>setToggle(5)} /> </div>}
        {toggle === 5 &&<div className='bg-othertext text-primetext font-semibold flex flex-col justify-between px-4 py-3 rounded-2xl'>
                <p className='flex items-center justify-between border-b-2 pb-3'>Do I need technical skills to use the platform? <HiMiniMinus className='text-2xl' onClick={()=>setToggle(0)}/></p>
                <p className='pt-3 text-sm'>
                    No, not at all! Our platform is designed with user-friendliness in mind. You can <br /> easily navigate and set up your store without any technical expertise. It's as <br /> simple as a few clicks to get started!
                </p>
            </div>}
        </div>
        <div className=''>
         {toggle !== 6  && <div className='bg-othertext text-primetext font-semibold flex items-center justify-between px-4 py-3 rounded-2xl'>Can I sell internationally on this marketplace? <GoPlus className='text-2xl'onClick={()=>setToggle(6)} /> </div>}
        {toggle === 6 &&<div className='bg-othertext text-primetext font-semibold flex flex-col justify-between px-4 py-3 rounded-2xl'>
                <p className='flex items-center justify-between border-b-2 pb-3'>Do I need technical skills to use the platform? <HiMiniMinus className='text-2xl' onClick={()=>setToggle(0)}/></p>
                <p className='pt-3 text-sm'>
                    No, not at all! Our platform is designed with user-friendliness in mind. You can <br /> easily navigate and set up your store without any technical expertise. It's as <br /> simple as a few clicks to get started!
                </p>
            </div>}
        </div>
        <div className=''>
         {toggle !== 7  && <div className='bg-othertext text-primetext font-semibold flex items-center justify-between px-4 py-3 rounded-2xl'>What support and resources are available for sellers? <GoPlus className='text-2xl'onClick={()=>setToggle(7)} /> </div>}
        {toggle === 7 &&<div className='bg-othertext text-primetext font-semibold flex flex-col justify-between px-4 py-3 rounded-2xl'>
                <p className='flex items-center justify-between border-b-2 pb-3'>Do I need technical skills to use the platform? <HiMiniMinus className='text-2xl' onClick={()=>setToggle(0)}/></p>
                <p className='pt-3 text-sm'>
                    No, not at all! Our platform is designed with user-friendliness in mind. You can <br /> easily navigate and set up your store without any technical expertise. It's as <br /> simple as a few clicks to get started!
                </p>
            </div>}
        </div>
        <div className=''>
         {toggle !== 8  && <div className='bg-othertext text-primetext font-semibold flex items-center justify-between px-4 py-3 rounded-2xl'>Is there a review process for uploaded products? <GoPlus className='text-2xl'onClick={()=>setToggle(8)} /> </div>}
        {toggle === 8 &&<div className='bg-othertext text-primetext font-semibold flex flex-col justify-between px-4 py-3 rounded-2xl'>
                <p className='flex items-center justify-between border-b-2 pb-3'>Do I need technical skills to use the platform? <HiMiniMinus className='text-2xl' onClick={()=>setToggle(0)}/></p>
                <p className='pt-3 text-sm'>
                    No, not at all! Our platform is designed with user-friendliness in mind. You can <br /> easily navigate and set up your store without any technical expertise. It's as <br /> simple as a few clicks to get started!
                </p>
            </div>}
        </div>
        </div>
      </div>
  )
}

export default FandQ
