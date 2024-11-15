import React from 'react'
import { booking } from './_components/data'
import Link from 'next/link'

const page = () => {
  return (
    <div className='py-12'>
        <p className='text-2xl font-semibold'>Our Room's</p>
        <div className='w-full flex flex-col gap-6 py-12'>
           {booking.map((item:any,index:number)=>(
             <div className='flex flex-col md:flex-row gap-8 border border-1 border-gray-400 p-4 rounded-xl bg-black shadow-gray-700 shadow-md'>
                <img src={item.room_img} alt="" className='md:w-1/3 rounded-lg object-cover shadow-gray-800 shadow-md' />
                <div className='w-full flex flex-col gap-4'>
                    <p className='text-xl font-semibold'>{item.room_name}</p>
                    <p className='text-lg text-slate-500'>Discription :</p>
                    <p className='text-sm  text-slate-500 md:w-2/5'>{item.dis}</p>
                    <div>
                      <p className='text-sm text-slate-600'>Price :</p>
                      <p className='text-sm text-slate-600'>Day- ₹{item.day}</p>
                      <p className='text-sm text-slate-600'>Night- ₹{item.night}</p>
                      <p className='text-sm text-slate-600'>Full Day- ₹{item.full}</p>
                    </div>
                <Link href={`/details/${item?.room_name}/${item?.day}/${item?.night}/${item?.full}`} className='flex justify-center items-center bg-prime rounded-lg py-2 px-6 md:w-1/3 font-semibold'>Book Now</Link>
                </div>
            </div>
              ))}
        </div>
    </div>
  )
}

export default page